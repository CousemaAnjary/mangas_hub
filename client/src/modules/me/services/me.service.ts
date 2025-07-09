import { authFetch } from "@/src/utils/authFetch"
import { GetCurrentUserResponse } from "../types/me"


export const getCurrentUser = async () => {
   const res = await authFetch<GetCurrentUserResponse>("/me")
   return res.payload
}