# YouTube MCP Server

[![smithery badge](https://smithery.ai/badge/@novemberde/mcp-youtube)](https://smithery.ai/server/@novemberde/mcp-youtube)

Uses `yt-dlp` to download subtitles from YouTube and connects it to claude.ai via [Model Context Protocol](https://modelcontextprotocol.io/introduction). Try it by asking Claude, "Summarize the YouTube video <<URL>>". Requires `yt-dlp` and `ffmpeg` to be installed locally e.g. via Homebrew.

### How do I get this working?

1. Install `yt-dlp` and `ffmpeg` (Homebrew and WinGet both work great here)
   ```bash
   brew install yt-dlp ffmpeg
   ```
2. Install the MCP CLI and connect it to Claude:
  ```bash
  npm install -g @novemberde/mcp-youtube
  ```
3.  Add MCP on Claude Config
  ```bash
  {
    "mcpServers": {
      "mcp-youtube": {
        "command": "npx",
        "args": [
          "@novemberde/mcp-youtube"
        ]
      }
    }
  }
  ```

### Available Tools

#### 1. download_youtube_url
Downloads and extracts subtitles from a YouTube video.

**Parameters:**
- `url` (required): The URL of the YouTube video

**Example Usage:**
```json
{
  "url": "https://www.youtube.com/watch?v=example"
}
```

#### 2. search_youtube_videos
Searches for YouTube videos using a query string.

**Parameters:**
- `query` (required): The search query string
- `max_results` (optional): Maximum number of results to return (default: 10)

**Example Usage:**
```json
{
  "query": "how to make pizza",
  "max_results": 5
}
```

**Returns:**
- Video title
- URL
- Description
- Duration
- View count
- Uploader name

#### 3. get_screenshots
Gets screenshots of a YouTube video at specific timestamps.

**Parameters:**
- `url` (required): The URL of the YouTube video
- `timestamps` (required): Array of timestamps in HH:MM:SS format (e.g., ["01:30:45", "02:45:15"])

**Example Usage:**
```json
{
  "url": "https://www.youtube.com/watch?v=example",
  "timestamps": ["00:01:30", "00:05:45"]
}
```

**Returns:**
- The file paths where screenshots were saved

### Notes
- All tools require `yt-dlp` to be installed on your system
- The `get_screenshots` tool requires `ffmpeg` to be installed on your system
- The server uses temporary directories for processing, which are automatically cleaned up after use
- Error handling is implemented for all tools with descriptive error messages
