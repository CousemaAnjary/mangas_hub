import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { updateUser } from "../services/me.service"
import { queryClient } from "@/src/lib/react-query"

export const useUpdateUser = () => {
  return useMutation({
    // Fonction de mutation pour connecter un utilisateur
    mutationFn: updateUser,

    // Gestion des erreurs et success
    onSuccess: (response) => {
      toast.success(response.message)
      queryClient.invalidateQueries({ queryKey: ['currentUser'] })
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
