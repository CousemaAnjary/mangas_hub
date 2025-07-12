import { queryClient } from "@/src/lib/react-query"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { logoutUser } from "../services/auth.service"

export const useLogout = () => {
  const router = useRouter()

  return useMutation({
    // Fonction de mutation pour connecter un utilisateur
    mutationFn: logoutUser,

    // Gestion des erreurs et success
    onSuccess: () => {
      queryClient.clear()
      router.push("/login")
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
