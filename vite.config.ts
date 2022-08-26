import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    injectRegister: 'auto',
    includeAssets: ['/assets/whatsapp-icon.png'],
    manifest: {
      name: 'WhatsApp sin agendar',
      short_name: 'WhatsApp sin agendar',
      description: '¡Envía mensajes de WhatsApp sin agendar contactos!',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/assets/whatsapp-icon.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/assets/whatsapp-icon.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })]

})
