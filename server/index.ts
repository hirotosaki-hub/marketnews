import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // JSON body parser
  app.use(express.json());

  // API endpoint for news refresh
  app.post("/api/trpc/news.refresh", async (req, res) => {
    console.log("📰 News refresh API called");
    
    try {
      // ニュース更新スクリプトを実行
      const scriptPath = path.resolve(__dirname, "..", "scripts", "update-news.py");
      console.log(`Running script: ${scriptPath}`);
      
      const { stdout, stderr } = await execAsync(`python3 ${scriptPath}`);
      
      if (stderr && !stderr.includes("FutureWarning")) {
        console.error("Script stderr:", stderr);
      }
      
      console.log("Script output:", stdout);
      
      res.json({
        result: {
          data: {
            success: true,
            message: "ニュースが正常に更新されました",
            timestamp: new Date().toISOString()
          }
        }
      });
    } catch (error: any) {
      console.error("Error refreshing news:", error);
      res.status(500).json({
        error: {
          message: "ニュースの更新に失敗しました",
          code: "INTERNAL_SERVER_ERROR",
          data: {
            stack: error.stack,
            message: error.message
          }
        }
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString()
    });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log(`API endpoints:`);
    console.log(`  POST /api/trpc/news.refresh - Refresh news`);
    console.log(`  GET  /api/health - Health check`);
  });
}

startServer().catch(console.error);
