import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../services/me.service"

export const useCurrentUser = () => {
  return useQuery({
    // Clé unique pour cette requête
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  })
}
