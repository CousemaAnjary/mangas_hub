import type { Context } from "hono"
import { jsonError } from "../utils/jsonError"
import { setAccessTokenCookie } from "../utils/access_token"
import { loginService, registerService } from "../services/auth.service"
import { loginSchema, registerSchema } from "../validations/auth.validation"



export const registerController = async (c: Context) => {

  // Validation les données d'entrée (body)
  const validated = registerSchema.safeParse(await c.req.json())
  if (!validated.success) return c.json({ success: false, message: validated.error.message }, 400)

  try {
    const newUser = await registerService(validated.data)
    return c.json({ success: true, message: "Utilisateur créé avec succès", newUser },201)

  } catch (error) {
    return c.json(jsonError(error), 500)
  }
}

export const loginController = async (c: Context) => {

  // Validation les données d'entrée (body)
  const validated = loginSchema.safeParse(await c.req.json())
  if (!validated.success) return c.json({ success: false, message: validated.error.message }, 400)

  try {
    const { accessToken, user } = await loginService(validated.data)
    setAccessTokenCookie(c, accessToken)
    return c.json({ success: true, message: "Connexion réussie", user }, 200)

  } catch (error) {
    return c.json(jsonError(error), 500)
  }
}
