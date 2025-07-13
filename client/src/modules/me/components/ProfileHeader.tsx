"use client"

import Image from "next/image"
import AvatarProfile from "./AvatarProfile"
import EditProfileDialog from "./EditProfileDialog"
import { useCurrentUser } from "../queries/useCurrentUser"
import profileCover from "@/public/images/profile-cover.jpg"


export default function ProfileHeader() {
  /**
   * ! STATE (état, données) de l'application
   */

  const { data: currentUser ,isLoading, isError} = useCurrentUser()

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
   if (isLoading) {
    return <p className="p-6 text-gray-500">Chargement du profil...</p>
  }

  if (isError || !currentUser) {
    return <p className="p-6 text-red-600">Erreur : utilisateur introuvable.</p>
  }

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <div className="mx-auto overflow-hidden rounded-md bg-white shadow">
      <div className="relative h-72 w-full">
        <Image
          src={profileCover}
          alt="Cover"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative -mt-20 flex flex-col items-start px-6 pb-6">
        <AvatarProfile />

        <h2 className="mt-2 font-spaceGrotesk text-lg font-semibold text-gray-800">
          {currentUser?.name}
        </h2>

        <div className="flex  w-full items-center justify-between gap-4 max-md:flex-col max-md:items-start max-md:gap-2">
          <p className="font-spaceGrotesk text-sm text-muted-foreground text-left">
            Fan de mangas, toujours à la recherche de nouvelles aventures à
            dévorer ✨
          </p>

          {/* 🧩 Dialogue d’édition */}
        <EditProfileDialog />
        </div>
      </div>

      
    </div>
  )
}
