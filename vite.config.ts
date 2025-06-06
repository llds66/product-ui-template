import { resolve } from 'node:path'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
// animation
import MotionResolver from 'motion-v/resolver'

// UI
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
// analyzer
import { analyzer } from 'vite-bundle-analyzer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      dts: true,
      resolvers: [PrimeVueResolver(), MotionResolver()],
    }),
    analyzer({
      analyzerMode: 'static',
      fileName: 'analyzer',
      openAnalyzer: process.env.ANALYZE === 'true',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/common/components'),
      '@composables': resolve(__dirname, 'src/common/composables'),
      '@assets': resolve(__dirname, 'src/common/assets'),
      '@apis': resolve(__dirname, 'src/common/apis'),
      '@http': resolve(__dirname, 'src/common/http'),
      '@utils': resolve(__dirname, 'src/common/utils'),
      '@pinia': resolve(__dirname, 'src/pinia'),
    },
  },
})
