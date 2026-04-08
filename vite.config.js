import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'robots.txt', 'icongrande.png', 'logo.png'],
      manifest: {
        name: 'DineroSmart',
        short_name: 'DineroSmart',
        description: 'App de gestión financiera de gastos diarios',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',

        screenshots: [
          {
            src: "/img/icongrande.png",
            sizes: "1200x581",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/img/icongrande.png",
            sizes: "1200x581",
            type: "image/png",
            form_factor: "wide",
          }
        ],

        icons: [
          {
            src: '/img/logo.png',
            sizes: '192x192',
            type: 'image/png',
            form_factor: "wide",
          },
          {
            src: '/img/logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })],
})