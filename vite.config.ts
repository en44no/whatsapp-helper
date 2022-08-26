import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      mode: "development",
      base: "/",
      srcDir: "src",
      filename: "sw.ts",
      includeAssets: ["/assets/whatsapp-icon.png"],
      strategies: "injectManifest",
      manifest: {
        name: "Test Project",
        short_name: "Test",
        theme_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "/assets/whatsapp-icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/whatsapp-icon.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/whatsapp-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),]
})
