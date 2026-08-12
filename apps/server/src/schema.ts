import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  password_hash: text('password_hash').notNull(),
  role: text('role').default('STUDENT').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});