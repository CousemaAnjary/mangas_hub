import "dotenv/config"
import { Pool } from "../../node_modules/@types/pg/index.js"
import { DATABASE_URL } from "./database.js"
// import * as schema from "../models/index"
import { drizzle } from "drizzle-orm/node-postgres"

const pool = new Pool({
  connectionString: DATABASE_URL,
})
export const db = drizzle(pool /* , { schema } */)

export default db
