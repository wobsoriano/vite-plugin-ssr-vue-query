import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'
import { QueryClient } from 'vue-query'
export type PageProps = {
  vueQueryState: QueryClient | undefined
}
export type Component = any
export type PageContext = PageContextBuiltIn & {
  Page: any
  pageProps?: PageProps
  documentProps?: {
    title?: string
    description?: string
  }
}