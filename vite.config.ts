import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    vue(),
    ssr()
  ],
  optimizeDeps: {
    exclude: ['@nuxtjs/composition-api']
  },
}

export default config
