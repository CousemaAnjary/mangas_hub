import "dotenv/config"
import { defineConfig } from "drizzle-kit"
import { DATABASE_URL } from "./src/configs/database.js"

export default defineConfig({
  out: "./src/database/migrations",
  schema: "./src/models/index.js",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
})
