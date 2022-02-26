import { createApp } from './app'
import { useClientRouter } from 'vite-plugin-ssr/client/router'
import { PageContext } from './types'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { VUE_QUERY_STATE } from '../pages/characters/characterData'

let app: ReturnType<typeof createApp>
const { hydrationPromise } = useClientRouter({
  render(pageContext: PageContext) {
    if (!app) {
      app = createApp(pageContext)
      app.provide(VUE_QUERY_STATE, pageContext.pageProps?.vueQueryState)
      app.mount('#app')
    } else {
      app.changePage(pageContext)
    }
  },
  ensureHydration: true,
  prefetchLinks: true,
  onTransitionStart,
  onTransitionEnd,
})

hydrationPromise.then(() => {
  console.log('Hydration finished; page is now interactive.')
})

function onTransitionStart() {
  NProgress.start()
}
function onTransitionEnd() {
  NProgress.done()
}
