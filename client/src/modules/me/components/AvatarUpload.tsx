/* eslint-disable @next/next/no-img-element */
"use client"

import { Pencil, XIcon } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { useFileUpload } from "@/src/hooks/use-file-upload"


export default function AvatarUpload() {
  /**
   * ! STATE (état, données) de l'application
   */
  const [{ files }, { removeFile, openFileDialog, getInputProps }] = useFileUpload({
      accept: "image/*",
  })

  const file = files[0] || null
  const previewUrl = file.preview

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
        onClick={openFileDialog}
      >
        <div className="absolute inset-0">
          <img
            src={previewUrl ?? "/default-avatar.png"}
            alt="Image de profil"
            className={`h-full w-full transition-all duration-200 group-hover:blur-sm ${
              previewUrl ? "object-cover" : "object-contain p-5"
            }`}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <Pencil className="size-7 text-white drop-shadow-lg" />
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
      <input
        {...getInputProps()}
        className="sr-only"
        aria-label="Uploader un fichier image"
        tabIndex={-1}
      />
    </div>
  )
}
