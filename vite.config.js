import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',  // Indique que ton site sera hébergé dans le sous-dossier 'Portfolio'
})
