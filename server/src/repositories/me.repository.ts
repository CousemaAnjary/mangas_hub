import { eq } from "drizzle-orm"
import db from "../configs/drizzle"
import { users } from "../models"

export const updateUserById = async (userId:number, imageUrl?:string, name?:string) => {
  await db
    .update(users)
    .set({ image: imageUrl, name })
    .where(eq(users.id, userId))
    .returning()

  const [updated] = await db
    .select({
      id: users.id,
      name: users.name,
      image: users.image,
    })
    .from(users)
    .where(eq(users.id, userId))

  return updated
}