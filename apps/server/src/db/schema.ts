import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';


// Connect to your Neon database using the URL in your .env file
const sql = neon(process.env.DATABASE_URL || "paste_your_neon_url_here");
export const db = drizzle(sql);

// ... (keep all your existing roleEnum and users table code below this)
import { pgTable,pgEnum, serial, text, timestamp } from 'drizzle-orm/pg-core';
// Create an Enum for roles so a user can ONLY be one of these two
export const roleEnum = pgEnum('role', ['STUDENT', 'COORDINATOR']);

// Define the Users table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  password_hash: text('password_hash').notNull(),
  role: text('role').default('STUDENT').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});