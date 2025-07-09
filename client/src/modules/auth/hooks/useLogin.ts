import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../services/auth.service"


export const useLogin = () => {
  return useMutation({

    // Fonction de mutation pour connecter un utilisateur
    mutationFn: loginUser,

    // Gestion des erreurs et success
    onError: (error) => { toast.error(error.message) },
     onSuccess: (response) => {toast.success(response.message)},
  })
}
