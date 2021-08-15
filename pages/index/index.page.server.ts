import { PageContext } from "../_default/types"

export { addPageContext }

async function addPageContext(_pageContext: PageContext) {
    const initialPage = 1
    const initialData = await getCharacters(initialPage)

    return {
        pageProps: {
            initialData
        }
    }
}

export interface Response {
    info: Info
    results: Character[]
}

export interface Info {
    count: number
    pages: number
    next: string
    prev: any
}

export interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Location
    image: string
    episode: string[]
    url: string
    created: string
}

export interface Origin {
    name: string
    url: string
}

export interface Location {
    name: string
    url: string
}
  
export async function getCharacters(page: number): Promise<Response> {
    const response = await fetch('https://rickandmortyapi.com/api/character?page=' + page)
    const characters = (await response.json())
    return characters;
}   