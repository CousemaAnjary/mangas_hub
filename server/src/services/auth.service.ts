import type z from "zod"
import type { User } from "../models"
import type { Payload } from "../types/auth"
import { generateToken } from "../utils/jwt"
import { comparePassword, hashPassword } from "../utils/hash"
import { createUser, findUserByEmail } from "../repositories/auth.repository"
import type { loginSchema, registerSchema } from "../validations/auth.validation"


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

export const loginService = async(data: z.infer<typeof loginSchema>):Promise<{ accessToken: string }> => {

  // Destructuration des données validées
  const { email, password } = data

  // Vérification si l'utilisateur existe
  const user = await findUserByEmail(email)
  if (!user) throw new Error("Utilisateur non trouvé")

  // Vérification du mot de passe
  const isPasswordValid = await comparePassword(password, user.password)
  if (!isPasswordValid) throw new Error("Mot de passe incorrect")

  const payload :Payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image ?? undefined
  }

  // Génération du token d'accès
  const accessToken = await generateToken(payload, 60 * 15)

  // Retourne le token d'accès et l'utilisateur
  return { accessToken }
}
