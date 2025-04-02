// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  contactMessages;
  bookings;
  currentUserId;
  currentContactId;
  currentBookingId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.contactMessages = /* @__PURE__ */ new Map();
    this.bookings = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentBookingId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Contact form methods
  async createContactMessage(message) {
    const id = this.currentContactId++;
    const now = /* @__PURE__ */ new Date();
    const contactMessage = {
      ...message,
      id,
      createdAt: now
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
  async getContactMessages() {
    return Array.from(this.contactMessages.values());
  }
  // Meeting booking methods
  async createBooking(booking) {
    const id = this.currentBookingId++;
    const now = /* @__PURE__ */ new Date();
    const newBooking = {
      ...booking,
      id,
      createdAt: now
    };
    this.bookings.set(id, newBooking);
    return newBooking;
  }
  async getBookings() {
    return Array.from(this.bookings.values());
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertContactSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true
});
var bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  service: text("service").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contactMessage = await storage.createContactMessage(validatedData);
      res.status(201).json({
        message: "Contact message submitted successfully",
        data: contactMessage
      });
    } catch (error) {
      res.status(400).json({
        message: "Invalid form data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve contact messages",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      res.status(201).json({
        message: "Meeting booked successfully",
        data: booking
      });
    } catch (error) {
      res.status(400).json({
        message: "Invalid booking data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.get("/api/bookings", async (req, res) => {
    try {
      const bookings2 = await storage.getBookings();
      res.status(200).json(bookings2);
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve bookings",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
import compression from "compression";
var app = express2();
app.use(compression({
  level: 9,
  // Maximum compression level
  threshold: 0,
  // Compress all responses, no size threshold
  filter: (req, res) => {
    if (req.path.match(/\.(jpg|jpeg|png|gif|webp|ico|svg)$/)) {
      return false;
    }
    return true;
  },
  // Cache compression for better performance
  cache: true,
  // Prefer gzip over deflate for better browser support
  strategy: 1
  // Use RLE strategy (1) for better compression ratio at the expense of speed
}));
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const path3 = req.path;
  if (!path3.includes(".") && path3 !== "/" && !path3.startsWith("/api/")) {
    if (path3.endsWith("/")) {
      return res.status(403).send("Forbidden");
    }
  }
  next();
});
app.use((req, res, next) => {
  const path3 = req.path;
  if (!path3.includes(".") && path3 !== "/") {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
  } else if (path3.endsWith(".html")) {
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Expires", new Date(Date.now() + 864e5).toUTCString());
  } else if (path3.match(/\.(js|css|min\.js|min\.css)$/)) {
    res.setHeader("Cache-Control", "public, max-age=31536000");
    res.setHeader("Expires", new Date(Date.now() + 6048e5).toUTCString());
  } else if (path3.match(/\.(jpg|jpeg|png|gif|ico|svg|webp|avif)$/)) {
    res.setHeader("Cache-Control", "public, max-age=31536000");
    res.setHeader("Expires", new Date(Date.now() + 2592e6).toUTCString());
  } else if (path3.match(/\.(woff|woff2|ttf|otf|eot)$/)) {
    res.setHeader("Cache-Control", "public, max-age=31536000");
    res.setHeader("Expires", new Date(Date.now() + 31536e6).toUTCString());
  }
  res.setHeader("X-DNS-Prefetch-Control", "on");
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
