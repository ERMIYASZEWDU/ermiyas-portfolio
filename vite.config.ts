import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.jpg', 'icon-192.jpg', 'icon-512.jpg', 'Ermiya_Resume.pdf'],
      manifest: {
        name: 'Ermiya Zewdu - AI Engineer Portfolio',
        short_name: 'Ermiya Portfolio',
        description: 'Professional portfolio of Ermiya Zewdu, AI Engineer and Machine Learning Developer',
        theme_color: '#0ea5e9',
        background_color: '#0a0a0f',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        id: '/',
        icons: [
          {
            src: 'icon-192.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
            purpose: 'any'
          },
          {
            src: 'icon-512.jpg', 
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any'
          },
          {
            src: 'favicon.jpg',
            sizes: '144x144',
            type: 'image/jpeg',
            purpose: 'any maskable'
          }
        ],
        categories: ['portfolio', 'business', 'productivity'],
        screenshots: [
          {
            src: 'icon-512.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
            form_factor: 'wide'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
      },
      devOptions: {
        enabled: true,
        type: 'module'
      }
    })
  ],
})
