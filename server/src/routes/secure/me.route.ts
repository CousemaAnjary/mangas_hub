import { Hono } from "hono"
import { getCurrentUserController } from "../../controllers/me.controller"

const meRoutes = new Hono()
  .get("/", getCurrentUserController)

export default meRoutes
