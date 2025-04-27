# YouTube MCP Server

Uses `yt-dlp` to download subtitles from YouTube and connects it to claude.ai via [Model Context Protocol](https://modelcontextprotocol.io/introduction). Try it by asking Claude, "Summarize the YouTube video <<URL>>". Requires `yt-dlp` to be installed locally e.g. via Homebrew.

### How do I get this working?

1. Install `yt-dlp` and `ffmpeg` (Homebrew and WinGet both work great here)
   ```bash
   brew install yt-dlp ffmpeg
   ```
2. Install the MCP YouTube tool:
   ```bash
   npm install -g @novemberde/mcp-youtube
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

#### 3. get_screenshot
Gets a screenshot of a YouTube video at a specific timestamp.

**Parameters:**
- `url` (required): The URL of the YouTube video
- `timestamp` (required): Timestamp in HH:MM:SS format (e.g., "01:30:45")

**Example Usage:**
```json
{
  "url": "https://www.youtube.com/watch?v=example",
  "timestamp": "00:01:30"
}
```

**Returns:**
- Base64 encoded JPEG image of the video frame at the specified timestamp

### Notes
- All tools require `yt-dlp` to be installed on your system
- The `get_screenshot` tool requires `ffmpeg` to be installed on your system
- The server uses temporary directories for processing, which are automatically cleaned up after use
- Error handling is implemented for all tools with descriptive error messages
