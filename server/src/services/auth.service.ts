import type z from "zod"
import { hashPassword } from "../utils/hash"
import { findUserByEmail } from "../repositories/auth.repository"
import type { registerSchema } from "../validations/auth.validation"


export const registerService = async (data: z.infer<typeof registerSchema>) => {

  // Destructuration des données validées
  const { name, email, password } = data

  // Vérification si l'utilisateur existe déjà
  const existingUser = await findUserByEmail(email)
  if (existingUser) throw new Error("cet email est déjà utilisé")

  // Hachage du mot de passe
  const hashedPassword = await hashPassword(password)

  // Création de l'utilisateur 
}

export const loginService = () => {}
