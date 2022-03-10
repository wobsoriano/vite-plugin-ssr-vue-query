import { useClientRouter } from 'vite-plugin-ssr/client/router'
import NProgress from 'nprogress'
import { VUE_QUERY_STATE } from '../pages/characters/characterData'
import { createApp } from './app'
import type { PageContext } from './types'

import 'nprogress/nprogress.css'

let app: ReturnType<typeof createApp>
const { hydrationPromise } = useClientRouter({
  render(pageContext: PageContext) {
    if (!app) {
      app = createApp(pageContext)
      app.provide(VUE_QUERY_STATE, pageContext.pageProps?.vueQueryState)
      app.mount('#app')
    }
    else {
      app.changePage(pageContext)
    }
  },
  ensureHydration: true,
  prefetchLinks: true,
  onTransitionStart,
  onTransitionEnd,
})

hydrationPromise.then(() => {
  // eslint-disable-next-line no-console
  console.log('Hydration finished; page is now interactive.')
})

function onTransitionStart() {
  NProgress.start()
}
function onTransitionEnd() {
  NProgress.done()
}
