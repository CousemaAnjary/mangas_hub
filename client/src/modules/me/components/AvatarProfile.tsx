/* eslint-disable @next/next/no-img-element */
"use client"

import { XIcon } from "lucide-react"
import user from "@/public/images/user.png"
import { Button } from "@/src/components/ui/button"
import { useFileUpload } from "@/src/hooks/use-file-upload"


export default function AvatarProfile() {
  /**
   * ! STATE (état, données) de l'application
   */
  const [{ files }, { removeFile }] = useFileUpload({
      accept: "image/*",
  })

  const previewUrl = files[0]?.preview || null

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
        className="group relative size-full rounded-xl border-2 border-white p-0 shadow-md overflow-hidden bg-transparent hover:bg-transparent"
      >
        <div className="absolute inset-0">
          <img
            src={previewUrl ?? user.src}
            alt="Image de profil"
            className={`h-full w-full transition-all duration-200 group-hover:blur-sm ${
              previewUrl ? "object-cover" : "object-contain p-5"
            }`}
          />
        </div>
      </Button>

      {previewUrl && (
        <Button
          onClick={() => removeFile(files[0]?.id)}
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
