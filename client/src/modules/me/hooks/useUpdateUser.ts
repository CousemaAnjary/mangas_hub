import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { updateUser } from "../services/me.service"


export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    // Fonction de mutation pour connecter un utilisateur
    mutationFn: updateUser,

    // Gestion des erreurs et success
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] })
      toast.success(response.message)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
