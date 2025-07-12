"use client"

import z from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useLogin } from "../hooks/useLogin"
import { Input } from "@/src/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import LoadingButton from "@/src/components/LoadingButton"
import { AtSign, Eye, EyeOff, LockKeyhole } from "lucide-react"
import { loginSchema } from "@/src/validations/auth.validation"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form"


export default function LoginForm() {
  /**
   * ! STATE (état, données) de l'application
   */
  const { mutate: login, isPending } = useLogin()
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  
  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  const handleLogin = async (data: z.infer<typeof loginSchema>) => {
    login(data)
  }
  
  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
     <div className="relative w-full max-w-md p-8">
      <h1 className="mb-2  font-spaceGrotesk text-2xl font-medium">
        Se connecter
      </h1>
      <p className="mb-4 font-spaceGrotesk text-muted-foreground">
        Connectez-vous à votre compte pour accéder à votre espace personnel
      </p>
      {/* <p className="mb-4 font-spaceGrotesk  text-sm text-muted-foreground">
      Vous n&apos;avez pas de compte ? Inscrivez-vous en cliquant{" "}
        <Link href="/register" className="text-cyan-700 underline ">
          ici
        </Link>
      </p> */}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-spaceGrotesk text-base">
                      Adresse email{" "}
                    </FormLabel>
                    <FormControl>
                      {/* Conteneur pour l'input et l'icône */}
                      <div className="relative ">
                        <Input
                          type="email"
                          {...field}
                          placeholder="exemple@gmail.com"
                          className="bg-white ps-10 font-spaceGrotesk placeholder:text-muted-foreground dark:bg-zinc-950 max-md:text-sm"
                        />
                        {/* Icône */}
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/95 peer-disabled:opacity-50">
                          <AtSign
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="font-spaceGrotesk" />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-spaceGrotesk text-base">
                      Mot de passe
                    </FormLabel>
                    <FormControl>
                      {/* Conteneur pour l'input et l'icône */}
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          {...field}
                          placeholder="Entrez votre mot de passe"
                          className="bg-white ps-10 font-spaceGrotesk placeholder:text-muted-foreground dark:bg-zinc-950 max-md:text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                        >
                          {showPassword ? (
                            <Eye size={18} />
                          ) : (
                            <EyeOff size={18} />
                          )}
                        </button>

                        {/* Icône */}
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/95 peer-disabled:opacity-50">
                          <LockKeyhole
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="font-spaceGrotesk" />
                  </FormItem>
                )}
              />
            </div>

          
            <div className="grid">
              <LoadingButton
                type="submit"
                loading={isPending}
                className="w-full font-spaceGrotesk "
              >
                Connexion
              </LoadingButton>
            </div>
            <div className="relative">
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 font-inter text-muted-foreground">
                  Ou continuer avec
                </span>
              </div>
            </div>

            {/* <Social /> */}
          </div>
        </form>
      </Form>
    </div>
  )
}