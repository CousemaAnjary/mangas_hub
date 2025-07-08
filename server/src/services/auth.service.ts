import type z from "zod"
import type { registerSchema } from "../validations/auth.validation"

export const registerService = async (data: z.infer<typeof registerSchema>) => {}

export const loginService = () => {}
