import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/landing-cesarvivaldi/', // Ajoute ici le chemin correspondant à ton dépôt GitHub
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
