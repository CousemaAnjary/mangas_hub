"use client"
import { useState } from "react"
import SearchButton from "./SearchButton"
import NotificationMenu from "./NotificationMenu"
import CommandMenuSearch from "./CommandMenuSearch"
import UserMenu from "@/src/modules/me/components/UserMenu"


export default function RightMenu() {
  /**
   * ! STATE (état, données) de l'application
   */
  const [openCommand, setOpenCommand] = useState(false)
  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <div className="flex items-center gap-4">
      {/* Barre de recherche stylisée */}
      <SearchButton onClick={() => setOpenCommand(true)} />

      <div className="flex items-center gap-2">
        <NotificationMenu />
      </div>

      <UserMenu />
      <CommandMenuSearch open={openCommand} setOpen={setOpenCommand} />
    </div>
  )
}
