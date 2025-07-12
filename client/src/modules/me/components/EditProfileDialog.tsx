"use client"

import z from "zod"
import { useForm } from "react-hook-form"
import { UserRoundCog } from "lucide-react"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUpdateUser } from "../hooks/useUpdateUser"
import { useCurrentUser } from "../queries/useCurrentUser"
import LoadingButton from "@/src/components/LoadingButton"
import { updateUserSchema } from "@/src/validations/me.validation"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/src/components/ui/dialog"



export default function EditProfileDialog() {
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
        form.reset()
      },
    })
  }
    /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-spaceGrotesk bg-pink-700 hover:bg-pink-800 text-white font-semibold">
          <UserRoundCog className="w-4 h-4" />
          Modifier le profil
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdateUser)} className="space-y-4">
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
              <LoadingButton type="submit" loading={isPending} className="font-spaceGrotesk font-semibold bg-pink-700 hover:bg-pink-800">Enregistrer</LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
