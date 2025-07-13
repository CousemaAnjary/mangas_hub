export type GetCurrentUserResponse = {
  success: boolean
  message: string
  user: User
}

type User = {
  id: number
  name: string
  email: string
  password: string
  image: string | null
  role: "user" | "admin"
  createdAt: Date
}

export type EditProfileDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export type UpdateUserResponse = {
  success: boolean
  message: string
  updateUser: UpdateUser
}

type UpdateUser = {
  id: number
  name: string
  image?: string
}
