import "dotenv/config"
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import router from './routes/index.js'
import { serve } from '@hono/node-server'


// App principale
const app = new Hono()

// Middleware CORS (autorise toutes les origines par défaut)
app.use('*', cors({
  origin: "http://localhost:3000",
  credentials: true, // Autorise les cookies 
}))


// Routes
app.route("/api", router)

serve({
  fetch: app.fetch,
  port: 4000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
