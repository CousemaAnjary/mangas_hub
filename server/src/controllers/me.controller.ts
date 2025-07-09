import type { Context } from "hono"
import { getCurrentUserService } from "../services/me.service"
import { jsonError } from "../utils/jsonError"

// Récupérer les informations de l'utilisateur actuel
export const getCurrentUserController = async (c: Context) => {
  try {
    const payload = getCurrentUserService(c)
    return c.json({ success: true, message: "Utilisateur récupéré avec succès", payload }, 200)

  } catch (error) {
    return c.json(jsonError(error), 500)
  }
}
