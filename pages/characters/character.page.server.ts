import type { InjectionKey } from "vue";
import { dehydrate, QueryClient } from "vue-query"
import { PageContext } from "../../renderer/types"
import { Character } from "./types"

export { addPageContext }

export const VUE_QUERY_STATE: InjectionKey<QueryClient | undefined> = Symbol('VUE_QUERY_STATE');

async function addPageContext(pageContext: PageContext) {
    const { characterId } = pageContext.routeParams
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['characters', characterId], () => getCharacter(characterId));

    const vueQueryState = dehydrate(queryClient)

    return {
        pageProps: {
            vueQueryState,
            characterId
        }
    }
}
  
export async function getCharacter(id: string): Promise<Character> {
    const response = await fetch('https://rickandmortyapi.com/api/character/' + id)
    const characters = (await response.json())
    return characters;
}   