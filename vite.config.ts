import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Serves api/chat.ts during `npm run dev`; on Vercel it runs as a serverless function.
const devApi = (): Plugin => ({
  name: 'dev-api',
  configureServer(server) {
    server.middlewares.use('/api/chat', async (req, res) => {
      const chunks: Buffer[] = []
      for await (const chunk of req) chunks.push(chunk)
      const { POST } = await server.ssrLoadModule('/api/chat.ts')
      const response: Response = await POST(new Request('http://localhost/api/chat', { method: 'POST', body: Buffer.concat(chunks) }))
      res.statusCode = response.status
      response.headers.forEach((value, key) => res.setHeader(key, value))
      if (response.body) for await (const chunk of response.body) res.write(chunk)
      res.end()
    })
  },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), 'ANTHROPIC_'))
  return { plugins: [react(), tailwindcss(), devApi()] }
})
