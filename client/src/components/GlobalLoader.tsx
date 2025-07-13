"use client"

import "@/src/styles/nprogress.css"
import { useIsFetching } from "@tanstack/react-query"
import { usePathname, useSearchParams } from "next/navigation"
import NProgress from "nprogress"
import { useEffect, useLayoutEffect, useRef } from "react"

export default function GlobalLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFetching = useIsFetching()

  const isRouteChanging = useRef(false)

  // Configure une seule fois
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 200,
      speed: 300,
      minimum: 0.1,
    })
  }, [])

  // Démarre sur changement de route
  useEffect(() => {
    isRouteChanging.current = true
    NProgress.start()

    const timer = setTimeout(() => {
      isRouteChanging.current = false
      if (isFetching === 0) {
        NProgress.done()
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname, searchParams, isFetching])

  // Gère la fin des requêtes si pas en navigation
  useLayoutEffect(() => {
    if (!isRouteChanging.current) {
      if (isFetching > 0) {
        NProgress.start()
      } else {
        NProgress.done()
      }
    }
  }, [isFetching])

  return null
}
