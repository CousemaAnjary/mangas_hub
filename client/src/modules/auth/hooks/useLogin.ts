import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../services/auth.service"


export const useLogin = () => {
  const router = useRouter()

  return useMutation({
    // Fonction de mutation pour connecter un utilisateur
    mutationFn: loginUser,

    // Gestion des erreurs et success
    onSuccess: (response) => {
      toast.success(response.message)
      router.push("/profile")
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
