import { PageContext } from "../_default/types"

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

export interface Response {
    info: {
        count: number
        pages: number
        next: string
        prev: any
    }
    results: Character[]
}

export interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: {
        name: string
        url: string
    }
    location: {
        name: string
        url: string
    }
    image: string
    episode: string[]
    url: string
    created: string
}
  
export async function getCharacters(page: number): Promise<Response> {
    const response = await fetch('https://rickandmortyapi.com/api/character?page=' + page)
    const characters = (await response.json())
    return characters;
}   