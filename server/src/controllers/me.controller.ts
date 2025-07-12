import type { Context } from "hono"
import { jsonError } from "../utils/jsonError"
import { formDataToObject } from "../utils/formDataToObject"
import { updateUserSchema } from "../validations/me.validation"
import { getCurrentUserService, updateUserService } from "../services/me.service"


// Utility function to convert FormData to a plain object


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
   // Validation les données d'entrée (body)
    const formData = await c.req.formData()
    const data = formDataToObject(formData)

    const validated = updateUserSchema.safeParse(data)
    if (!validated.success) return c.json({ success: false, message: validated.error.message }, 400)
      
  try {
    const updateUser = await updateUserService(validated.data, c)
    return c.json({ success: true, message: "Utilisateur mis à jour avec succès", updateUser }, 200)

  }catch (error) {
    return c.json(jsonError(error), 500)
  }
}
