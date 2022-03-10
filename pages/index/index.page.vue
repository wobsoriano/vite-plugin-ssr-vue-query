<template>
  <div>
    <h1>Home</h1>
    <p>This is an example of <a href="https://vite-plugin-ssr.com/">vite-plugin-ssr</a> and <a href="https://vue-query.vercel.app/">vue-query</a> integration.</p>
    <p>The <strong>/characters</strong> page uses <strong>addPageContext</strong> to prefetch data on the server and pass it in as <strong>initialData</strong> of the query.</p>
    <p>The <strong>/characters/:characterId</strong> uses <strong>addPageContext</strong> too and <strong>dehydrate/hyrate</strong> functions of vue-query.</p>
  </div>
</template>
