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
      
      // First download the video to the temp directory
      await spawnPromise(
        "yt-dlp",
        [
          url,
          "--output",
          path.join(tempDir, "video.%(ext)s"),
          "--format",
          "best[height<=720]", // Limit resolution to avoid large downloads
          "--no-playlist",
        ],
        { cwd: tempDir }
      );
      
      // Find the downloaded video file
      const files = fs.readdirSync(tempDir);
      const videoFile = files.find(file => !file.endsWith('.jpg') && !file.endsWith('.json'));
      
      if (!videoFile) {
        throw new Error("No video was downloaded");
      }
      
      const videoPath = path.join(tempDir, videoFile);
      const screenshotPath = path.join(tempDir, "screenshot.jpg");
      
      // Use ffmpeg to extract a frame at the specified timestamp
      await spawnPromise(
        "ffmpeg",
        [
          "-ss", timestamp,
          "-i", videoPath,
          "-vframes", "1",
          "-q:v", "2",
          screenshotPath
        ],
        { cwd: tempDir }
      );
      
      // Read the screenshot file as base64
      const screenshotBuffer = fs.readFileSync(screenshotPath);
      const screenshotBase64 = screenshotBuffer.toString('base64');
      
      rimraf.sync(tempDir);

      return {
        content: [
          {
            type: "text",
            text: `data:image/jpeg;base64,${screenshotBase64}`,
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
