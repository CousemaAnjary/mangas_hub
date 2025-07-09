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
