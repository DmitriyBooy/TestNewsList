<template>
  <img
    :src="image"
    class="card_image"
    :alt="`card-image-${code}`"
  />
</template>

<script>
export default {
  props: ['image', 'code'],
}
</script>

<style>
.card_image {
  height: 250px;
}
</style>