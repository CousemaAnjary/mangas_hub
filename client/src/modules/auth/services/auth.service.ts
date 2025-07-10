import z from "zod"
import { LoginResponse } from "../types/auth"
import { authFetch } from "@/src/utils/authFetch"
import { loginSchema } from "@/src/validations/auth.validation"


// Fonction pour connecter un utilisateur
export const loginUser = async (data: z.infer<typeof loginSchema>) => {
  return await authFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

// Fonction pour déconnecter un utilisateur
export const logoutUser = async () => {
   return await authFetch<LoginResponse>("/auth/logout", {
    method: "POST",
  })
}
