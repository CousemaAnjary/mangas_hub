"use client"
import NProgress from "nprogress"
import "@/src/styles/nprogress.css"
import { useLayoutEffect } from "react"
import { useIsFetching } from "@tanstack/react-query"



export default function GlobalLoader() {
  /**
   * ! STATE (état, données) de l'application
   */
  const isFetching = useIsFetching()
  
  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
    useLayoutEffect(() => {
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