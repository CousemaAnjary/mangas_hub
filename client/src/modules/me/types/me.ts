export type GetCurrentUserResponse = {
  success: boolean
  message: string
  payload: payload
}

type payload = {
  id: number
  email: string
  name: string
  image?: string
}

export type EditProfileDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export type UpdateUserResponse = {
  success: boolean
  message: string
  updateUser : UpdateUser
}

type UpdateUser = {
  id: number
  name: string
  image?: string
}