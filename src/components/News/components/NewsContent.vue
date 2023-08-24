<template>
  <div
      class="new_content__container"
      :class="{'mb': !loadIsPossible}"
  >
    <new-card
      v-for="item in items"
      v-bind="item"
      :key="item.code"
    />
  </div>
</template>

<script>
import NewCard from './NewCard/NewCard.vue'

export default {
  name: 'news-content',
  props: ['items', 'loadIsPossible'],
  components: {
    NewCard
  },
}
</script>

<style>
.new_content__container {
  flex-grow: 1;
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 64px;
  padding: 0 100px;
}

.mb {
  margin-bottom: 72px;
}
</style>