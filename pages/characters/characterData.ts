import type { Character, APIResponse } from "./types"
import type { InjectionKey } from "vue";
import type { QueryClient } from "vue-query";
import { $fetch } from 'ohmyfetch'

export const initialPage = 1

export const VUE_QUERY_STATE: InjectionKey<QueryClient | undefined> = Symbol('VUE_QUERY_STATE');

export async function getCharacter(id: string) {
    const character = await $fetch<Character>('https://rickandmortyapi.com/api/character/' + id)
    return character;
}
  
export async function getCharacters(page: number) {
    const characters = await $fetch<APIResponse>('https://rickandmortyapi.com/api/character?page=' + page)
    return characters;
}