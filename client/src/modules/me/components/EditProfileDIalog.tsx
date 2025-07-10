"use client"

import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { EditProfileDialogProps } from "../types/me"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/src/components/ui/dialog"


export default function EditProfileDIalog({ open, onOpenChange }: EditProfileDialogProps) {
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
     <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Modifier le profil</DialogTitle>
            <DialogDescription>
              Fais tes modifications ici. Clique sur enregistrer quand tu as terminé.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" name="name" defaultValue="Pedro Duarte" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="username">Nom d&lsquo;utilisateur</Label>
              <Input id="username" name="username" defaultValue="@peduarte" />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Annuler</Button>
            </DialogClose>
            <Button type="submit">Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
