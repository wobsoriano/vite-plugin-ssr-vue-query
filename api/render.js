import { createPageRenderer } from 'vite-plugin-ssr'
// We load `importBuild.js` so that the worker code can be bundled into a single file
import '../dist/server/importBuild.js'

const renderPage = createPageRenderer({ isProduction: true })

export default async(req, res) => {
  const { url } = req
  const pageContextInit = { url }
  const pageContext = await renderPage(pageContextInit)
  const { httpResponse } = pageContext
  if (!httpResponse) {
    res.statusCode = 200
    res.end()
  }
  else {
    const { body, statusCode, contentType } = httpResponse

    res.statusCode = statusCode
    res.setHeader('content-type', contentType)
    res.end(body)
  }
}
