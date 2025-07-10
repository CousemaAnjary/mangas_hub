import { authFetch } from "@/src/utils/authFetch"
import { updateUserSchema } from "@/src/validations/me.validation"
import z from "zod"
import { GetCurrentUserResponse } from "../types/me"

// Récupérer les informations de l'utilisateur actuel
export const getCurrentUser = async () => {
   const res = await authFetch<GetCurrentUserResponse>("/me")
   return res.payload
}

export const updateUser = async (data: z.infer<typeof updateUserSchema>) => {
   await authFetch("/me/updateUser", {

   })
}