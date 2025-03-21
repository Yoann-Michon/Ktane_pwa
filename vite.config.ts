import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react(),VitePWA({
    manifest: {
    "name": "Ktane",
    "short_name": "Ktane",
    "theme_color": "#fff",
    "icons": [
      {
        "src": "/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      },
      {
        "src": "/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }})],
})
