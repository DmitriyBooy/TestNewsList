<template>
  <div class="container">
    <header-page />
    <page-content />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import PageContent from './components/Content.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    PageContent,
  }
}
</script>

<style>
body {
  margin: 0 !important;
}

.container {
  position: relative;
  height: 100vh;
  display: grid;
  grid-template-rows: 123px 1fr;
}
</style>
