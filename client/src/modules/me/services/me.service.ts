import { authFetch } from "@/src/utils/authFetch"
import { GetCurrentUserResponse } from "../types/me"

// Récupérer les informations de l'utilisateur actuel
export const getCurrentUser = async () => {
   const res = await authFetch<GetCurrentUserResponse>("/me")
   return res.payload
}