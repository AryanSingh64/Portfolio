import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Custom Vite plugin to intercept API requests and write to local JSON
function localMessageAPI() {
  return {
    name: 'local-message-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/message' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => { body += chunk.toString() })
          req.on('end', () => {
            try {
              const data = JSON.parse(body)
              const filePath = path.resolve(__dirname, 'messages.json')
              
              let messages = []
              if (fs.existsSync(filePath)) {
                try {
                  const fileContent = fs.readFileSync(filePath, 'utf-8')
                  messages = fileContent.trim() ? JSON.parse(fileContent) : []
                } catch (e) {
                  messages = []
                }
              }

              messages.push({
                text: data.text,
                timestamp: new Date().toISOString()
              })

              fs.writeFileSync(filePath, JSON.stringify(messages, null, 2))
              
              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: true }))
            } catch (err) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: err.message }))
            }
          })
        } else {
          next()
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    localMessageAPI()
  ],
})
