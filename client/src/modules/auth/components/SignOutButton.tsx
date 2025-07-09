"use client"

import { useState } from "react"
import { LogOut } from "lucide-react"
import { BsEmojiTear } from "react-icons/bs"
import { DropdownMenuItem } from "@/src/components/ui/dropdown-menu"


export default function SignOutButton() {
  /**
   * ! STATE (état, données) de l'application
   */
  // const router = useRouter()
  // const { mutate: logout } = useLogout()
  const [isHovered, setIsHovered] = useState(false)

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  // const handleSignOut = async () => {
  //   logout(undefined, { onSuccess: () => { router.push("/login") } })
  // }

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <DropdownMenuItem
      className="hover:cursor-pointer font-spaceGrotesk"
      // onClick={handleSignOut}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <BsEmojiTear
          size={18}
          className="mr-1  text-pink-700"
          aria-hidden="true"
        />
      ) : (
        <LogOut size={18} className="mr-1  text-pink-700" aria-hidden="true" />
      )}
      <span>Déconnexion</span>
    </DropdownMenuItem>
  )
}
