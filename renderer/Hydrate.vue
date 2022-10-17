<script setup lang="ts">
import { inject } from 'vue'
import { hydrate, useQueryClient } from '@tanstack/vue-query'
import { VUE_QUERY_STATE } from '../pages/characters/characterData'

const vueQueryState = inject(VUE_QUERY_STATE)
if (vueQueryState) {
  const queryClient = useQueryClient()
  hydrate(queryClient, vueQueryState)
}
</script>

<template>
  <slot />
</template>
