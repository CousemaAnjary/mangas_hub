import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,                // ❌ Pas de nouvelle tentative en cas d'erreur
      refetchOnWindowFocus: false, // ❌ Pas de requête quand tu reviens sur l'onglet
      gcTime: 1000 * 60 * 30,      // ✅ Même si données "périmées", elles restent 30 min en cache (pour être utilisées plus tard si besoin) : Background Re-fetch
    },
    mutations: {
      retry: false,                // ❌ Pas de tentative multiple sur erreur de mutation
    },
  },
})
