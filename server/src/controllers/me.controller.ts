import type { Context } from "hono"
import { jsonError } from "../utils/jsonError"
import { getCurrentUserService } from "../services/me.service"


// Récupérer les informations de l'utilisateur actuel
export const getCurrentUserController = async (c: Context) => {
  try {
    const payload = await getCurrentUserService(c)
    return c.json({ success: true, message: "Utilisateur récupéré avec succès", payload }, 200)

  } catch (error) {
    return c.json(jsonError(error), 500)
  }
}

// Mettre à jour les informations de l'utilisateur
export const updateUserController = async (c: Context) => {
  try {
    const updateUser = await updateUserService(c)
    return c.json({ success: true, message: "Utilisateur mis à jour avec succès", updateUser }, 200)

  }catch (error) {
    return c.json(jsonError(error), 500)
  }
}
