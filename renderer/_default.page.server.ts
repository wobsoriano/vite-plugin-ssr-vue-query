import { renderToString } from '@vue/server-renderer'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr'
import { VUE_QUERY_STATE } from '../pages/characters/characterData'
import { createApp } from './app'
import type { PageContext } from './types'

export { passToClient }
export { render }

const passToClient = ['pageProps', 'documentProps', 'routeParams']

async function render(pageContext: PageContext) {
  const app = createApp(pageContext)
  app.provide(VUE_QUERY_STATE, pageContext.pageProps?.vueQueryState)
  const appHtml = await renderToString(app)

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
}
