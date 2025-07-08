import type { InsertUser, User } from "../models"

export const findUserByEmail = async (email: string): Promise<User | null> => {}

export const createUser = async (user: InsertUser): Promise<User> => {}
