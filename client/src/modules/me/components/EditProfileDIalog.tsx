"use client"

import z from "zod"
import { useForm } from "react-hook-form"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { EditProfileDialogProps } from "../types/me"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCurrentUser } from "../queries/useCurrentUser"
import LoadingButton from "@/src/components/LoadingButton"
import { updateUserSchema } from "@/src/validations/me.validation"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/src/components/ui/dialog"
import { useUpdateUser } from "../hooks/useUpdateUser"


export default function EditProfileDialog({ open, onOpenChange }: EditProfileDialogProps) {
  /**
   * ! STATE (état, données) de l'application
   */
  const { data: payload } = useCurrentUser()
  const {mutate:updateUser, isPending} = useUpdateUser()

  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: "",
      image: undefined,
    },
  })

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  const handleUpdateUser = async (data: z.infer<typeof updateUserSchema>) => {
    const formData = new FormData()
    formData.append("name", data.name ?? "")
    if (data.image instanceof File) formData.append("image", data.image)

    updateUser(formData, {
      onSuccess: () => {
        console.log("✅ Mise à jour réussie")
        onOpenChange(false)
        form.reset()
      },
    })
  }
  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleUpdateUser)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="font-spaceGrotesk">
                Modifier le profile
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
                    <FormLabel className="font-spaceGrotesk">
                      Nom complet
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={payload?.name}
                        {...field}
                        className="placeholder:font-spaceGrotesk font-spaceGrotesk"
                      />
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
                          className="font-spaceGrotesk"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            field.onChange(file ?? undefined)
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
                <Button type="button" variant="outline" className="font-spaceGrotesk font-semibold">
                  Annuler
                </Button>
              </DialogClose>
              <LoadingButton loading={isPending} className="font-spaceGrotesk font-semibold bg-pink-700 hover:bg-pink-800">Enregistrer</LoadingButton>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  )
}
