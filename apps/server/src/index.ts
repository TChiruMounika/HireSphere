import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import { registerUser, loginUser } from './modules/users/user.controller';

const app = express();
const PORT = process.env.PORT || 5000;

// Global Middleware
app.use(cors());
app.use(express.json());

// Database Initialization
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing in environment variables');
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });

// API Routes
app.post('/api/auth/register', registerUser);
app.post('/api/auth/login', loginUser);

app.listen(PORT, () => {
  console.log(`🚀 HireSphere server is live on http://localhost:${PORT}`);
});