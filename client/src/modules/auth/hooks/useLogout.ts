import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { logoutUser } from "../services/auth.service"


export const useLogout = () => {
  return useMutation({

    // Fonction de mutation pour connecter un utilisateur
    mutationFn: logoutUser,

    // Gestion des erreurs et success
    onError: (error) => { toast.error(error.message) },
    onSuccess: (response) => {toast.success(response.message)},
  })
}
