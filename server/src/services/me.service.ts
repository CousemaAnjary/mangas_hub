
import type z from "zod"
import path from "path"
import fs from "fs/promises"
import type { Context } from "hono"
import { randomUUID } from "crypto"
import type { User } from "../models"
import type { Payload } from "../types/auth"
import type { updateUserSchema } from "../validations/me.validation"
import { findUserById, updateUserById } from "../repositories/me.repository"


export const getCurrentUserService = async (c: Context): Promise<User> => {
  const payload = c.get("payload") as Payload
 
  // Récupère l'utilisateur en base
  const user = await findUserById(payload.sub)
  if (!user) throw new Error("Utilisateur non trouvé")
   
  // Retourne l'utilisateur
  return user
}


export const updateUserService = async (data: z.infer<typeof updateUserSchema>, c: Context) => {

  const payload = c.get("payload") as Payload
  const userId = payload.sub

  // Destructuration des données validées
  const { name, image } = data
  let imageUrl: string | undefined = undefined

  if (image) {
    // Lire le contenu binaire du fichier
    const buffer = await image.arrayBuffer()

    // Extension du fichier (ex: .jpg)
    const extension = image.name.split(".").pop()

     // Nom unique pour le fichier
    const uniqueFileName = `${randomUUID()}.${extension}`

    // Chemin de destination (à adapter selon ton infrastructure)
    const filePath = path.join("public/uploads", uniqueFileName)

    // Écrire le fichier sur le disque
    await fs.writeFile(filePath, Buffer.from(buffer))

    // construire l'URL de l'image
    imageUrl = `/uploads/${uniqueFileName}`
  }

  // Mettre à jour l'utilisateur dans la base de données
  const updatedUser = await updateUserById(userId, imageUrl, name)

  return updatedUser
}
