"use client"

import { Button } from "@/src/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import { updateUserSchema } from "@/src/validations/me.validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { EditProfileDialogProps } from "../types/me"
import { useCurrentUser } from "../queries/useCurrentUser"

export default function EditProfileDialog({
  open,
  onOpenChange,
}: EditProfileDialogProps) {
  /**
   * ! STATE (état, données) de l'application
   */
const { data: payload } = useCurrentUser()

  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: payload?.name ,
      image: undefined,
    },
  })

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  const onSubmit = () => {}

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="font-spaceGrotesk">
                Modifier le profil
              </DialogTitle>
              <DialogDescription className="font-spaceGrotesk">
                Modifiez les informations de votre profil
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              {/* Champ nom */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom complet</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Champ image (visible) */}
              <div className="flex flex-col gap-2">
               <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image de profile</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            field.onChange(file)
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Annuler
                </Button>
              </DialogClose>
              <Button type="submit">Enregistrer</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  )
}
