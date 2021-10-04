import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { VUE_QUERY_STATE } from '../pages/characters/character.page.server'
import { createApp } from './app'
import { PageContext } from './types'

export { passToClient }
export { render }

const passToClient = ['pageProps', 'documentProps', 'urlPathname', 'routeParams']

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