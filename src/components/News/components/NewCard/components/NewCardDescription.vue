<template>
  <div class="card_description__container">
    <p
        class="card_description__text"
        v-html="description"
    />
  </div>
</template>

<script>
export default {
  props: ['description']
}
</script>

<style>
.card_description__container {
  flex-grow: 1;
}

.card_description__text {
  font-family: Nunito Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
}
</style>