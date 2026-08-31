"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.roleEnum = exports.db = void 0;
const serverless_1 = require("@neondatabase/serverless");
const neon_http_1 = require("drizzle-orm/neon-http");
const pg_core_1 = require("drizzle-orm/pg-core");
require("dotenv/config");
// 1. Establish the ONE connection
const sql = (0, serverless_1.neon)(process.env.DATABASE_URL);
exports.db = (0, neon_http_1.drizzle)(sql);
// 2. Define the Enums
exports.roleEnum = (0, pg_core_1.pgEnum)('role', ['STUDENT', 'COORDINATOR']);
// 3. Define the Tables
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    email: (0, pg_core_1.text)('email').notNull().unique(),
    password_hash: (0, pg_core_1.text)('password_hash').notNull(),
    role: (0, pg_core_1.text)('role').default('STUDENT').notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow().notNull(),
});
//# sourceMappingURL=schema.js.map