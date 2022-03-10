import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'
import type { QueryClient } from 'vue-query'
export interface PageProps {
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
