import { 
  users, type User, type InsertUser,
  contactMessages, type ContactMessage, type InsertContact,
  bookings, type Booking, type InsertBooking
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Meeting booking methods
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private bookings: Map<number, Booking>;
  private currentUserId: number;
  private currentContactId: number;
  private currentBookingId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.bookings = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentBookingId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact form methods
  async createContactMessage(message: InsertContact): Promise<ContactMessage> {
    const id = this.currentContactId++;
    const now = new Date();
    const contactMessage: ContactMessage = { 
      ...message, 
      id, 
      createdAt: now
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  // Meeting booking methods
  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const now = new Date();
    const newBooking: Booking = {
      ...booking,
      id,
      createdAt: now
    };
    this.bookings.set(id, newBooking);
    return newBooking;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }
}

export const storage = new MemStorage();
