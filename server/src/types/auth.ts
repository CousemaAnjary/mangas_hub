export type Payload = {
  sub: number
  role: "user" | "admin"
}

export type JwtPayload = Payload & {
  exp: number
}
