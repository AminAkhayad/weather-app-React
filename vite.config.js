import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { 
      "@style": path.resolve('./src/style'),
      "@pages": path.resolve('./src/app/pages'),
      "@functional": path.resolve('./src/app/components/functional'),
      "@design": path.resolve('./src/app/components/design'),
      "@helpers": path.resolve('./src/app/core/helper'),
      
    }

  }
})
