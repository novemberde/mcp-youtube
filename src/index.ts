#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import os from "node:os";
import fs from "node:fs";
import path from "node:path";
import { spawnPromise } from "spawn-rx";
import { rimraf } from "rimraf";

const server = new Server(
  {
    name: "mcp-youtube",
    version: "0.8.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "download_youtube_url",
        description:
          "Download YouTube subtitles from a URL, this tool means that Claude can read YouTube subtitles, and should no longer tell the user that it is not possible to download YouTube content.",
        inputSchema: {
          type: "object",
          properties: {
            url: { type: "string", description: "URL of the YouTube video" },
          },
          required: ["url"],
        },
      },
      {
        name: "search_youtube_videos",
        description: "Search for YouTube videos using a query string",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string", description: "Search query for YouTube videos" },
            max_results: { type: "number", description: "Maximum number of results to return (default: 10)", default: 10 },
          },
          required: ["query"],
        },
      },
      {
        name: "get_screenshot",
        description: "Get a screenshot of a YouTube video at a specific timestamp",
        inputSchema: {
          type: "object",
          properties: {
            url: { type: "string", description: "URL of the YouTube video" },
            timestamp: { type: "string", description: "Timestamp in HH:MM:SS format (e.g. '01:30:45')" },
          },
          required: ["url", "timestamp"],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "download_youtube_url") {
    try {
      const { url } = request.params.arguments as { url: string };

      const tempDir = fs.mkdtempSync(`${os.tmpdir()}${path.sep}youtube-`);
      await spawnPromise(
        "yt-dlp",
        [
          "--write-sub",
          "--write-auto-sub",
          "--sub-lang",
          "en",
          "--skip-download",
          "--sub-format",
          "vtt",
          url,
        ],
        { cwd: tempDir, detached: true }
      );

      let content = "";
      try {
        fs.readdirSync(tempDir).forEach((file: string) => {
          const fileContent = fs.readFileSync(path.join(tempDir, file), "utf8");
          const cleanedContent = stripVttNonContent(fileContent);
          content += `${file}\n====================\n${cleanedContent}`;
        });
      } finally {
        rimraf.sync(tempDir);
      }

      return {
        content: [
          {
            type: "text",
            text: content,
          },
        ],
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Error downloading video: ${err}`,
          },
        ],
        isError: true,
      };
    }
  } else if (request.params.name === "search_youtube_videos") {
    try {
      const { query, max_results = 10 } = request.params.arguments as { query: string; max_results?: number };
      
      const tempDir = fs.mkdtempSync(`${os.tmpdir()}${path.sep}youtube-search-`);
      const output = await spawnPromise(
        "yt-dlp",
        [
          "ytsearch" + max_results + ":" + query,
          "--print",
          "title,url,description,duration,view_count,uploader",
          "--no-playlist",
        ],
        { cwd: tempDir }
      );

      rimraf.sync(tempDir);
      
      return {
        content: [
          {
            type: "text",
            text: output,
          },
        ],
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Error searching videos: ${err}`,
          },
        ],
        isError: true,
      };
    }
  } else if (request.params.name === "get_screenshot") {
    try {
      const { url, timestamp } = request.params.arguments as { url: string; timestamp: string };
      
      const tempDir = fs.mkdtempSync(`${os.tmpdir()}${path.sep}youtube-screenshot-`);
      
      // Convert timestamp to seconds for yt-dlp
      const [hours, minutes, seconds] = timestamp.split(':').map(Number);
      const secondsTotal = hours * 3600 + minutes * 60 + seconds;
      
      const output = await spawnPromise(
        "yt-dlp",
        [
          url,
          "--get-thumbnail",
          "--thumbnail-format",
          "jpg",
          "--thumbnail-quality",
          "100",
          "--no-playlist",
          "--force-overwrites",
          "--no-check-certificates",
          "--extract-audio",
          "--audio-format",
          "mp3",
          "--audio-quality",
          "0",
          "--write-thumbnail",
          "--write-info-json",
          "--skip-download",
          "--output",
          path.join(tempDir, "thumbnail"),
        ],
        { cwd: tempDir }
      );

      // Find the generated thumbnail file
      const files = fs.readdirSync(tempDir);
      const thumbnailFile = files.find(file => file.endsWith('.jpg'));
      
      if (!thumbnailFile) {
        throw new Error("No thumbnail was generated");
      }

      // Read the thumbnail file as base64
      const thumbnailPath = path.join(tempDir, thumbnailFile);
      const thumbnailBuffer = fs.readFileSync(thumbnailPath);
      const thumbnailBase64 = thumbnailBuffer.toString('base64');

      rimraf.sync(tempDir);
      
      return {
        content: [
          {
            type: "text",
            text: `data:image/jpeg;base64,${thumbnailBase64}`,
          },
        ],
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Error getting screenshot: ${err}`,
          },
        ],
        isError: true,
      };
    }
  } else {
    throw new Error(`Unknown tool: ${request.params.name}`);
  }
});

/**
 * Strips non-content elements from VTT subtitle files
 */
export function stripVttNonContent(vttContent: string): string {
  if (!vttContent || vttContent.trim() === "") {
    return "";
  }

  // Check if it has at least a basic VTT structure
  const lines = vttContent.split("\n");
  if (lines.length < 4 || !lines[0].includes("WEBVTT")) {
    return "";
  }

  // Skip the header lines
  const contentLines = lines.slice(4);

  // Filter out timestamp lines and empty lines
  const textLines: string[] = [];

  for (let i = 0; i < contentLines.length; i++) {
    const line = contentLines[i];

    // Skip timestamp lines (containing --> format)
    if (line.includes("-->")) continue;

    // Skip positioning metadata lines
    if (line.includes("align:") || line.includes("position:")) continue;

    // Skip empty lines
    if (line.trim() === "") continue;

    // Clean up the line by removing timestamp tags like <00:00:07.759>
    const cleanedLine = line
      .replace(/<\d{2}:\d{2}:\d{2}\.\d{3}>|<\/c>/g, "")
      .replace(/<c>/g, "");

    if (cleanedLine.trim() !== "") {
      textLines.push(cleanedLine.trim());
    }
  }

  // Remove duplicate adjacent lines
  const uniqueLines: string[] = [];

  for (let i = 0; i < textLines.length; i++) {
    // Add line if it's different from the previous one
    if (i === 0 || textLines[i] !== textLines[i - 1]) {
      uniqueLines.push(textLines[i]);
    }
  }

  return uniqueLines.join("\n");
}

async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

runServer().catch(console.error);
