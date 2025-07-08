import { sign, verify } from "hono/jwt"
import type { JwtPayload, Payload } from "../types/auth.js"

const JWT_SECRET = process.env.JWT_SECRET as string

/**
 * Génère un token JWT signé
 * @param payload - Le contenu du token
 * @returns Le token signé
 */
export const generateToken = async (payload: Payload , expireIn: number): Promise<string> => {
  const now = Math.floor(Date.now() / 1000)
  return await sign(
    {
      ...payload,
      iat: now,
      exp: now + expireIn
    },
    JWT_SECRET
  )
}

/**
 * Vérifie et décode un token JWT
 * @param token - Le token à vérifier
 * @returns Le payload JWT si le token est valide
 * @throws Erreur si token invalide ou expiré
 */
export const verifyToken = async (token: string): Promise<JwtPayload> => {
  return await verify(token, JWT_SECRET) as JwtPayload
}
