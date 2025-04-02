import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertBookingSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
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

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
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

  // Meeting booking endpoint
  app.post("/api/bookings", async (req, res) => {
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

  // Get all bookings (for admin purposes)
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to retrieve bookings",
        error: error instanceof Error ? error.message : "Unknown error"  
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
