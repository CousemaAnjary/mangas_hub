"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useIsFetching } from "@tanstack/react-query"
import NProgress from "nprogress"
import "@/src/styles/nprogress.css"

export default function GlobalLoader() {
  const pathname = usePathname()
  const isFetching = useIsFetching()

  // Démarre NProgress sur changement de page
  useEffect(() => {
    NProgress.start()
    const timeout = setTimeout(() => {
      NProgress.done()
    }, 300)

    return () => clearTimeout(timeout)
  }, [pathname])

  
  // Démarre aussi si des requêtes React Query sont actives
  useEffect(() => {
    if (isFetching > 0) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [isFetching])

  return null
}
