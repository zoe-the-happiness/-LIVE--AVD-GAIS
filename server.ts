import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import axios from "axios";
import * as cheerio from "cheerio";
import NodeCache from "node-cache";
import https from "https";
import crypto from "crypto";

// Cache for 10 hours
const cache = new NodeCache({ stdTTL: 10 * 60 * 60 });

const httpsAgent = new https.Agent({
  secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/transfers", async (req, res) => {
    try {
      const cachedData = cache.get("transfers");
      if (cachedData) {
        return res.json(cachedData);
      }

      // Fetch from the actual API endpoint
      const response = await axios.get("https://ard.wb.gov.in/api/v1/appointments", {
        httpsAgent,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });
      
      const apiData = response.data || [];
      const orders = apiData.map((item: any) => ({
        title: item.title_english,
        link: item.file_path_english ? `https://ard.wb.gov.in/${item.file_path_english}` : 'https://ard.wb.gov.in',
        date: new Date(item.created).toLocaleDateString()
      }));

      const result = { success: true, data: orders };
      cache.set("transfers", result);
      
      res.json(result);
    } catch (error) {
      console.error("API error:", error);
      res.status(500).json({ success: false, error: "Failed to fetch transfers" });
    }
  });

  app.get("/api/orders", async (req, res) => {
    try {
      const cachedData = cache.get("orders");
      if (cachedData) {
        return res.json(cachedData);
      }

      // Fetch from the orders API endpoint
      const response = await axios.get("https://ard.wb.gov.in/api/v1/orders", {
        httpsAgent,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });
      
      const apiData = response.data || [];
      const orders = apiData.map((item: any) => ({
        title: item.title_english,
        link: item.file_path ? `https://ard.wb.gov.in/${item.file_path}` : 'https://ard.wb.gov.in',
        date: new Date(item.created).toLocaleDateString()
      }));

      const result = { success: true, data: orders };
      cache.set("orders", result);
      
      res.json(result);
    } catch (error) {
      console.error("API error (orders):", error);
      res.status(500).json({ success: false, error: "Failed to fetch orders" });
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
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve("dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
