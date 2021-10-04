import { PageContext } from "../../renderer/types"
import { getCharacters, initialPage } from "./characterData"

export { onBeforeRender }

async function onBeforeRender(_pageContext: PageContext) {
    const initialData = await getCharacters(initialPage)

    return {
        pageContext: {
            pageProps: {
                initialData
            }
        }
    }
}