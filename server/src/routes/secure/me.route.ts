import { Hono } from "hono"
import { getCurrentUserController, updateUserController } from "../../controllers/me.controller"

const meRoutes = new Hono()
  .get("/", getCurrentUserController)
  .patch("/updateUser", updateUserController)

export default meRoutes
