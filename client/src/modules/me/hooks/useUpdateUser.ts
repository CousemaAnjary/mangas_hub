import { toast } from "sonner"
import { updateUser } from "../services/me.service"
import { useMutation } from "@tanstack/react-query"
import { queryClient } from "@/src/lib/react-query"


export const useUpdateUser = () => {
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
