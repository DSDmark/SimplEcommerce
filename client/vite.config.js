import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      // add the MIME type for your data files
      "text/plain": ["json"]
    },
    port: 8080,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    }
  }
})
