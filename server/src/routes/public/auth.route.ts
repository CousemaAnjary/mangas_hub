import { Hono } from "hono"
import { registerController } from "../../controllers/auth.controller"

const authRoutes = new Hono()
  .post("/register", registerController)

export default authRoutes
