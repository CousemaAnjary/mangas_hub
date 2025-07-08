import "dotenv/config"
import { defineConfig } from "drizzle-kit"
import { DATABASE_URL } from "./src/configs/database"

export default defineConfig({
  out: "./src/database/migrations",
  schema: "./src/models/index",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
})
