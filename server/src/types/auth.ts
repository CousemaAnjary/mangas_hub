export type Payload = {
  id: number
  email: string
  name: string
  image?: string
}

export type JwtPayload = Payload & {
  iat: number
  exp: number
}
