import { authFetch } from "@/src/utils/authFetch"
import { GetCurrentUserResponse, UpdateUserResponse } from "../types/me"

// Récupérer les informations de l'utilisateur actuel
export const getCurrentUser = async () => {
  const res = await authFetch<GetCurrentUserResponse>("/me")
  return res.payload
}

// Mettre à jour les informations de l'utilisateur
export const updateUser = async (data: FormData) => {
  return await authFetch<UpdateUserResponse>("/me/updateUser", {
    method: "PATCH",
    body: data,
  })
}
