"use client"

import Image from "next/image"
import { XIcon } from "lucide-react"
import { backendUrl } from "@/src/lib/api"
import user from "@/public/images/user.png"
import { Button } from "@/src/components/ui/button"
import { useCurrentUser } from "../queries/useCurrentUser"


export default function AvatarProfile() {
  /**
   * ! STATE (état, données) de l'application
   */
  const { data: currentUser } = useCurrentUser()
  const previewUrl = currentUser?.image ? `${backendUrl}${currentUser.image}` : null

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <div className="relative size-36">
         <Button
        variant="outline"
        className="group relative size-full rounded-xl border-2 border-white p-0 shadow-md overflow-hidden bg-transparent hover:bg-transparent cursor-default"
      >
        <div className="absolute inset-0">
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="Image de profil"
              fill
              className="object-cover"
              sizes="144px"
            />
          ) : (
            <Image
              src={user}
              alt="Image de profil par défaut"
              fill
              className="object-contain p-5"
              sizes="144px"
            />
          )}
        </div>
      </Button>

      {previewUrl && (
        <Button
          size="icon"
          className="border-background focus-visible:border-background absolute -top-2 -right-2 size-6 rounded-full border-2 shadow-none"
          aria-label="Remove image"
        >
          <XIcon className="size-3.5" />
        </Button>
      )}
    </div>
  )
}
