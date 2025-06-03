import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // CORREÇÃO FINAL AQUI:
  // Se o Document Root do Plesk aponta DIRETAMENTE para a pasta 'dist',
  // o caminho base relativo à URL do site é a raiz '/'
  base: mode === 'development' ? '/' : '/ripiiaia-nexus-platform/', // <--- ESTA LINHA FOI CORRIGIDA

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    // Removido: componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // As configurações de build já estão corretas para a saída em 'dist'
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
}));