import express from "express";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route to proxy reservation requests to n8n
  // This avoids CORS "Failed to fetch" errors in the browser
  app.post("/api/reservation", async (req, res) => {
    try {
      console.log("Forwarding reservation to n8n...");
      const response = await fetch('https://ashif33545.app.n8n.cloud/webhook-test/b87827ff-c480-496b-b3b8-495da1c1d82f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("n8n error response:", errorText);
        return res.status(response.status).json({ error: "Failed to forward to n8n" });
      }

      const result = await response.json().catch(() => ({ status: "success" }));
      res.json(result);
    } catch (error) {
      console.error("Proxy error:", error);
      res.status(500).json({ error: "Internal server error during proxy" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
