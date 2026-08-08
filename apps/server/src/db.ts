import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

// Load the environment variables from your .env file
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Initialize Drizzle with your PostgreSQL connection
export const db = drizzle(pool);