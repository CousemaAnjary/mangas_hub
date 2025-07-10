"use client"

import React from "react"
import { DialogTitle } from "../ui/dialog"
import { CommandMenuProps } from "@/src/types/globale"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { CommandDialog, CommandEmpty, CommandInput, CommandList } from "../ui/command"


export default function CommandMenuSearch({ open, setOpen }: CommandMenuProps) {
  /**
   * ! STATE (état, données) de l'application
   */

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setOpen])

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Quel manga voulez-vous lire aujourd’hui ?"
        className="font-spaceGrotesk"
      />
      <VisuallyHidden>
        <DialogTitle>Recherche</DialogTitle>
      </VisuallyHidden>
      <CommandList>
        <CommandEmpty className="text-center p-8 font-spaceGrotesk">
          Aucun résultat trouvé.
        </CommandEmpty>
        {/* <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup> */}
      </CommandList>
    </CommandDialog>
  )
}
