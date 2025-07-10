"use client"

import Image from "next/image"
import { useState } from "react"
import { UserRoundCog } from "lucide-react"
import AvatarProfile from "./AvatarProfile"
import { Button } from "@/src/components/ui/button"
import { useCurrentUser } from "../queries/useCurrentUser"
import profileCover from "@/public/images/profile-cover.jpg"
import EditProfileDIalog from "./EditProfileDIalog"



export default function ProfileHeader() {
  /**
   * ! STATE (état, données) de l'application
   */

  const { data: payload } = useCurrentUser()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

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
          {payload?.name}
        </h2>

        <div className="flex  w-full items-center justify-between gap-4 max-md:flex-col max-md:items-start max-md:gap-2">
          <p className="font-spaceGrotesk text-sm text-muted-foreground text-left">
            Fan de mangas, toujours à la recherche de nouvelles aventures à
            dévorer ✨
          </p>

          <Button 
            className="font-spaceGrotesk bg-pink-700 text-white font-semibold"
            onClick={() => setIsDialogOpen(true)}
          >
            <UserRoundCog className="w-4 h-4" />
            Modifier Profile
          </Button>
        </div>
      </div>

      {/* 🧩 Dialogue d’édition */}
      <EditProfileDIalog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}
