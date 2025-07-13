export type Payload = {
  sub: number
}

export type JwtPayload = Payload & {
  exp: number
}
