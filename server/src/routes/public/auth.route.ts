import { Hono } from "hono"
import { loginController, registerController } from "../../controllers/auth.controller"

const authRoutes = new Hono()
  .post("/register", registerController)
  .post("/login", loginController)

export default authRoutes
