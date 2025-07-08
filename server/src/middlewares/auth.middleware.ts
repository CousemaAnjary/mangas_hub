import { verifyToken } from "../utils/jwt"
import type { MiddlewareHandler } from "hono"
import { getAccessTokenCookie } from "../utils/access_token"


export const authMiddleware: MiddlewareHandler = async (c, next) => {

  // Vérifie si le cookie d'accès existe
  const token = getAccessTokenCookie(c)
  if (!token) return c.json({ success: false, message: "Token manquant" }, 401)

  try {
    // Vérifie et décode le token
    const payload = await verifyToken(token)

    // Ajoute le payload au contexte pour les routes suivantes
    c.set("user", payload)

    // Continue vers la prochaine middleware ou route
    return next()
    
  } catch (error) {
    return c.json({ success: false, message: "Token invalide ou expiré" }, 401)
  }
}
