import { Hono } from "hono"
import meRoutes from "./secure/me.route.js"
import authRoutes from "./public/auth.route.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"


// Groupe de routes PUBLIC
const publicRoutes = new Hono()
  .route("/auth", authRoutes)

// Groupe de routes SÉCURISÉ
const secureRoutes = new Hono().use("*", authMiddleware)
  .route("/me", meRoutes)

// Montage des routes
const router = new Hono()
  .route("/", publicRoutes)
  .route("/", secureRoutes)

export default router
