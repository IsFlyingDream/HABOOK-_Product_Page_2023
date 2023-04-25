import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 設置 'vue' 別名，讓 TypeScript 編譯器能夠找到它的類型聲明文件
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
    extensions: ['.ts', '.js', '.vue']
  }
})
