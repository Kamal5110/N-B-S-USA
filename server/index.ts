import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import compression from "compression";

const app = express();
// Enable gzip compression for all responses
app.use(compression({
  level: 9, // Maximum compression level
  threshold: 0, // Compress all responses, no size threshold
  filter: (req, res) => {
    // Compress everything except images that are already compressed
    if (req.path.match(/\.(jpg|jpeg|png|gif|webp|ico|svg)$/)) {
      return false;
    }
    return true;
  },
  // Cache compression for better performance
  cache: true,
  // Prefer gzip over deflate for better browser support
  strategy: 1 // Use RLE strategy (1) for better compression ratio at the expense of speed
})); // Aggressive compression for all responses
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Block directory listing attempts
app.use((req, res, next) => {
  const path = req.path;
  // If request path doesn't have a file extension and it's not the root or a specific API endpoint
  if (!path.includes('.') && path !== '/' && !path.startsWith('/api/')) {
    // Check if it looks like a directory path (ends with /)
    if (path.endsWith('/')) {
      // Return 403 Forbidden for directory listing attempts
      return res.status(403).send('Forbidden');
    }
  }
  next();
});

// Add cache headers for static assets and improve performance
app.use((req, res, next) => {
  // Set cache headers based on file type
  const path = req.path;
  
  // Disable directory listing attempts
  if (!path.includes('.') && path !== '/') {
    // For directory requests, use no-store to prevent caching
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  } else if (path.endsWith('.html')) {
    // No caching for HTML files
    res.setHeader('Cache-Control', 'no-cache');
    // Add expires header for HTML files (1 day)
    res.setHeader('Expires', new Date(Date.now() + 86400000).toUTCString());
  } else if (path.match(/\.(js|css|min\.js|min\.css)$/)) {
    // Long-term caching for JS/CSS files with strong validation
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
    // Add expires header for JS/CSS files (7 days)
    res.setHeader('Expires', new Date(Date.now() + 604800000).toUTCString());
  } else if (path.match(/\.(jpg|jpeg|png|gif|ico|svg|webp|avif)$/)) {
    // Long-term caching for images
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
    // Add expires header for images (30 days)
    res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString());
  } else if (path.match(/\.(woff|woff2|ttf|otf|eot)$/)) {
    // Long-term caching for fonts
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
    // Add expires header for fonts (1 year)
    res.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString());
  }

  // Enable DNS prefetching to improve performance for external resources
  res.setHeader('X-DNS-Prefetch-Control', 'on');
  
  // Security headers to prevent MIME type sniffing and directory listing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
