<template>
  <div class="news_container">
    <news-header />
    <news-content
        :items="store.items"
        :load-is-possible="store.loadIsPossible"
    />
    <load-button
        @button-click="() => store.send()"
        :load-is-possible="store.loadIsPossible"
    />
    <footer-page />
  </div>
</template>

<script>
import NewsHeader from './News/components/NewsHeader.vue';
import NewsContent from './News/components/NewsContent.vue'
import LoadButton from './News/components/LoadButton.vue'
import FooterPage from './FooterPage.vue'
import ImprovisedStore from '../logic/ImprovisedStore'

export default {
  name: 'page-content',
  components: {
    NewsHeader,
    NewsContent,
    LoadButton,
    FooterPage
  },
  data() {
    return {
      store: new ImprovisedStore(),
    }
  },
  methods: {
    test() {
      console.log('TEST')
    },
  },
  mounted() {
    this.store.send()
  }
}
</script>

<style>
.news_container {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
}
</style>