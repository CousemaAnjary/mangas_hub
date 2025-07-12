import type { Context } from "hono"
import type z from "zod"
import type { Payload } from "../types/auth"
import type { updateUserSchema } from "../validations/me.validation"


export const getCurrentUserService = async (c: Context): Promise<Payload> => {
  const payload = c.get("payload") as Payload
  if (!payload) throw new Error("Utilisateur non trouvé")
  return payload
}

export const updateUserService = async (data: z.infer<typeof updateUserSchema>, c: Context) => {

  const user = c.get("payload") as Payload
  const userId = user.id

  // Destructuration des données validées
  const { name, image } = data

  // Lire le contenu binaire du fichier
  const buffer = image?.arrayBuffer()

  // Re
}
