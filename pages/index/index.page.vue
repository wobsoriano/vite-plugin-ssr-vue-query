<template>
  <div>
    <h1>Rick and Morty Characters</h1>
    <button @click="refetch()" :disabled="isFetching">{{ isFetching ? 'Refetching...' : 'Refetch' }}</button>
    <div v-if="isLoading">loading...</div>
    <div v-else>
      <ul>
        <li v-for="char in characters" :key="char.id">{{ char.name }} - {{ char.status }}</li>
      </ul>
    </div>
    <button v-show="hasNextPage" @click="fetchNextPage()">{{ isFetchingNextPage ? 'Fetching next page...' : 'Fetch next page' }}</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useInfiniteQuery } from 'vue-query'
import { Response, initialPage, getCharacters } from './index.page.server'

const props = defineProps<{
  initialData: Response
}>()

const {
  data,
  isLoading,
  refetch,
  isFetching,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage
} = useInfiniteQuery('characters', ({ pageParam }) => getCharacters(pageParam), {
  initialData: {
    pages: [props.initialData],
    pageParams: [initialPage]
  },
  getNextPageParam: (lastPage) => {
    const nextUrl = lastPage.info.next
    if (nextUrl) {
      // Return next page number
      return Number(nextUrl.charAt(nextUrl.length - 1))
    }
    // Return false means no next page
    return false
  }
})

const characters = computed(() => {
  return data.value!.pages.flat().map((char) => {
    return char.results
  }).flat()
})
</script>

<style>
h1,
p {
  color: green;
}
</style>
