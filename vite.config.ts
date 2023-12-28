import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import 'main';\n`
      }
    }
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar(),
  ],
})
