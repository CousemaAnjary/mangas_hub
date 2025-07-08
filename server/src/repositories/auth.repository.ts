import { eq } from "drizzle-orm"
import db from "../configs/drizzle"
import { users, type InsertUser, type User } from "../models"

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
  return user || null
}

export const createUser = async (userData: InsertUser): Promise<User> => {
  const [user] = await db.insert(users).values(userData).returning()
  return user
}
