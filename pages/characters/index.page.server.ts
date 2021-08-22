import { PageContext } from "../_default/types"
import { Response } from "./types"

export { addPageContext }

export const initialPage = 1

async function addPageContext(_pageContext: PageContext) {
    const initialData = await getCharacters(initialPage)

    return {
        pageProps: {
            initialData
        }
    }
}
  
export async function getCharacters(page: number): Promise<Response> {
    const response = await fetch('https://rickandmortyapi.com/api/character?page=' + page)
    const characters = (await response.json())
    return characters;
}   