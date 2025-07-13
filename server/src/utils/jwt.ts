import { sign, verify } from "hono/jwt"
import type { Payload } from "../types/auth.js"

const JWT_SECRET = process.env.JWT_SECRET as string

/**
 * Génère un token JWT signé
 * @param payload - Le contenu du token
 * @returns Le token signé
 */
export const generateToken = async (payload: Payload): Promise<string> => {
  return await sign(payload, JWT_SECRET)
}

/**
 * Vérifie et décode un token JWT
 * @param token - Le token à vérifier
 * @returns Le payload JWT si le token est valide
 * @throws Erreur si token invalide ou expiré
 */
export const verifyToken = async (token: string): Promise<Payload> => {
  return await verify(token, JWT_SECRET) as Payload
}
