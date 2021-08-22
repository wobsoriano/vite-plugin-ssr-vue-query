<template>
  <div class="layout">
    <div class="navigation">
      <a href="/" class="logo">
        <img src="./logo.svg" height="64" width="64" alt="logo" />
      </a>
      <a class="navitem" href="/">Home</a>
      <a class="navitem" href="/characters">Characters</a>
    </div>
    <div class="content">
      <Hydrate>
        <slot />
      </Hydrate>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQueryProvider } from 'vue-query'
import Hydrate from '../_components/Hydrate.vue'

useQueryProvider()
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>

<style scoped>
.layout {
  display: flex;
  max-width: 900px;
  margin: auto;
}
.content {
  padding: 20px;
  border-left: 2px solid #eee;
  padding-bottom: 50px;
  min-height: 100vh;
}
.navigation {
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8em;
}
.logo {
  margin-top: 20px;
  margin-bottom: 10px;
}
.navitem {
  padding: 3px;
}
</style>
