import type z from "zod"
import type { User } from "../models"
import { hashPassword } from "../utils/hash"
import type { registerSchema } from "../validations/auth.validation"
import { createUser, findUserByEmail } from "../repositories/auth.repository"



export const registerService = async (data: z.infer<typeof registerSchema>):Promise<User> => {

  // Destructuration des données validées
  const { name, email, password } = data

  // Vérification si l'utilisateur existe déjà
  const existingUser = await findUserByEmail(email)
  if (existingUser) throw new Error("cet email est déjà utilisé")

  // Hachage du mot de passe
  const hashedPassword = await hashPassword(password)

  // Création de l'utilisateur 
  const newUser = await createUser({ name, email, password: hashedPassword })

  // retourne l'utilisateur créé
  return newUser
}

export const loginService = () => {}
