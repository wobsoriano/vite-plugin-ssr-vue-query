import { inject } from 'vue'
import { PageContextkey } from './app'

export function usePageContext() {
    const pageContext = inject(PageContextkey)
    if (!pageContext) {
        throw new Error('Could not resolve page context provider.');
    }
    return pageContext
}