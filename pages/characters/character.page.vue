<template>
    <div>
        <div>hello from character</div>
        <div v-if="data">{{data.name}}</div>
    </div>
</template>

<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getCharacter } from './character.page.server'

const props = defineProps(['characterId'])

const { data } = useQuery(['characters', props.characterId], () => getCharacter(props.characterId))
</script>