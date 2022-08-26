// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
var vite_config_default = defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    devOptions: {
      enabled: true
    },
    injectRegister: "auto",
    includeAssets: ["assets/whatsapp-icon.png"],
    manifest: {
      name: "WhatsApp sin agendar",
      short_name: "WhatsApp sin agendar",
      description: "\xA1Env\xEDa mensajes de WhatsApp sin agendar contactos!",
      theme_color: "#ffffff",
      icons: [
        {
          src: "assets/whatsapp-icon.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "assets/whatsapp-icon.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    }
  })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxuYWh1ZVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXE5BSFVFTFxcXFx3aGF0c2FwcC1oZWxwZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG5haHVlXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcTkFIVUVMXFxcXHdoYXRzYXBwLWhlbHBlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbmFodWUvT25lRHJpdmUvRGVza3RvcC9OQUhVRUwvd2hhdHNhcHAtaGVscGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCksIFZpdGVQV0Eoe1xyXG4gICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgICBkZXZPcHRpb25zOiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbmplY3RSZWdpc3RlcjogJ2F1dG8nLFxyXG4gICAgaW5jbHVkZUFzc2V0czogWydhc3NldHMvd2hhdHNhcHAtaWNvbi5wbmcnXSxcclxuICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgIG5hbWU6ICdXaGF0c0FwcCBzaW4gYWdlbmRhcicsXHJcbiAgICAgIHNob3J0X25hbWU6ICdXaGF0c0FwcCBzaW4gYWdlbmRhcicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnXHUwMEExRW52XHUwMEVEYSBtZW5zYWplcyBkZSBXaGF0c0FwcCBzaW4gYWdlbmRhciBjb250YWN0b3MhJyxcclxuICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgaWNvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdhc3NldHMvd2hhdHNhcHAtaWNvbi5wbmcnLFxyXG4gICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdhc3NldHMvd2hhdHNhcHAtaWNvbi5wbmcnLFxyXG4gICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfSldXHJcblxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtXLFNBQVMsb0JBQW9CO0FBQy9YLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRO0FBQUEsSUFDekIsY0FBYztBQUFBLElBQ2QsWUFBWTtBQUFBLE1BQ1YsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLElBQ2hCLGVBQWUsQ0FBQywwQkFBMEI7QUFBQSxJQUMxQyxVQUFVO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDLENBQUM7QUFFSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
