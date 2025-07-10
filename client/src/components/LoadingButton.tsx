"use client"

import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { Loader } from "lucide-react"
import { LoadingButtonProps } from "../types/globale"


export default function LoadingButton({ loading = false, children, loadingText = "Veuillez patienter", className, ...props }: LoadingButtonProps) {
  /**
   * ! STATE (état, données) de l'application
   */

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <Button
      className={cn("bg-blue-900 hover:bg-blue-950 dark:bg-white", className)}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader className="mr-2 size-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  )
}
