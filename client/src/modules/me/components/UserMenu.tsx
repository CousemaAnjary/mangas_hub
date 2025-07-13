
"use client"
import user from "@/public/images/user.png"

import { Button } from "../../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { useCurrentUser } from "../queries/useCurrentUser"
import Link from "next/link"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import ThemeSwitcher from "./ThemeSwitcher"
import SignOutButton from "../../auth/components/SignOutButton"
import { backendUrl } from "@/src/lib/api"
import Image from "next/image"

export default function UserMenu() {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Image
            src={ previewUrl ?? user}
            width={24}
            height={24}
            alt="Image de profil par défaut"
            
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3 w-72" align="end">
        <DropdownMenuItem className="flex w-full items-start gap-2 px-3 py-2 cursor-pointer" asChild>
          <Link href="/profile">
            <div className="min-w-0 flex flex-col overflow-hidden">
              <span className="truncate text-sm font-medium text-foreground font-spaceGrotesk">
                {currentUser?.name || "Nom d’utilisateur"}
              </span>
              <span className="truncate text-xs text-muted-foreground font-normal font-spaceGrotesk">
                {currentUser?.email || "email@example.com"}
              </span>
            </div>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className="space-y-3 p-2">
          <div className="flex items-center justify-between">
            <span className="font-spaceGrotesk text-sm">Thème</span>
            <ThemeSwitcher />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-spaceGrotesk text-sm">Langue</span>
            <Select defaultValue="fr">
              <SelectTrigger className="h-7 w-[130px] font-spaceGrotesk">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="font-spaceGrotesk">
                  <SelectItem value="fr">🇫🇷 Français</SelectItem>
                  <SelectItem value="en">🇬🇧 English</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
