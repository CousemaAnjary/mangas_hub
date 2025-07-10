import { Hono } from "hono"
import { loginController, logoutController, registerController } from "../../controllers/auth.controller"

const authRoutes = new Hono()
  .post("/register", registerController)
  .post("/login", loginController)
  .post("/logout", logoutController)

export default authRoutes
