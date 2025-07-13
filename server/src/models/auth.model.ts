import type { InferInsertModel, InferSelectModel } from "drizzle-orm"
import { pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const userRoleEnum = pgEnum("user_role", ["user", "admin"])

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  image: text("image"),
  role: userRoleEnum("role").notNull().default("user"),
  createdAt: timestamp("created_at").notNull().defaultNow(), 
})

// Type générés automatiquement par Drizzle
export type User = InferSelectModel<typeof users> 
export type InsertUser = InferInsertModel<typeof users>