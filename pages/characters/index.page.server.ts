import { PageContext } from "../../renderer/types"
import { Response } from "./types"

export { onBeforeRender }

export const initialPage = 1

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
  
export async function getCharacters(page: number): Promise<Response> {
    const response = await fetch('https://rickandmortyapi.com/api/character?page=' + page)
    const characters = (await response.json())
    return characters;
}   