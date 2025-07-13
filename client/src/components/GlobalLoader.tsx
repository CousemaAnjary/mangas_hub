"use client"
import NProgress from "nprogress"
import { useIsFetching } from "@tanstack/react-query"
import { useEffect } from "react"

export default function GlobalLoader() {
  /**
   * ! STATE (état, données) de l'application
   */
  const isFetching = useIsFetching()
  
  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  useEffect(() => {
    if (isFetching > 0) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [isFetching])
  
  /**
   * ! AFFICHAGE (render) de l'application
   */
   return null
}