import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { db } from './db';
import { users } from './schema';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check & Database Test Route
app.get('/api/health', async (req, res) => {
  try {
    const allUsers = await db.select().from(users);
    res.json({ 
      status: 'success', 
      message: 'Server is running and connected to Neon PostgreSQL!', 
      users: allUsers 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Database query failed', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 HireSphere server is live on http://localhost:${PORT}`);
});