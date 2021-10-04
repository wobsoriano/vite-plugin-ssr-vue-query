import type { Character, APIResponse } from "./types"
import type { InjectionKey } from "vue";
import type { QueryClient } from "vue-query";

export const initialPage = 1

export const VUE_QUERY_STATE: InjectionKey<QueryClient | undefined> = Symbol('VUE_QUERY_STATE');

export async function getCharacter(id: string): Promise<Character> {
    const response = await fetch('https://rickandmortyapi.com/api/character/' + id)
    const characters = (await response.json())
    return characters;
}
  
export async function getCharacters(page: number): Promise<APIResponse> {
    const response = await fetch('https://rickandmortyapi.com/api/character?page=' + page)
    const characters = (await response.json())
    return characters;
}