import type { Context } from "hono"
import type { Payload } from "../types/auth"

export const getCurrentUserService = async (c: Context): Promise<Payload> => {
  const payload = c.get("user") as Payload
  if (!payload) throw new Error("Utilisateur non trouvé")
  return payload
}
