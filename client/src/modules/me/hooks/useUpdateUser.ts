import { useMutation } from "@tanstack/react-query"
import { updateUser } from "../services/me.service"
import { toast } from "sonner"


export const useUpdateUser = () => {
   return useMutation({

    // Fonction de mutation pour connecter un utilisateur
    mutationFn: updateUser,

    // Gestion des erreurs et success
    onError: (error) => { toast.error(error.message) },
     onSuccess: (response) => {toast.success(response.message)},
  })
}