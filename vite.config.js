import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/photo-portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
})
