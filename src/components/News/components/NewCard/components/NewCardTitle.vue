<template>
  <a
    target="_blank"
    :href="link"
    class="card_title"
  >
    {{ title }}
  </a>
</template>

<script>
export default {
  props: ['title', 'link']
}
</script>

<style>
.card_title {
  text-decoration: none;
  font-family: Nunito Sans;
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  color: #0C5BEF;
}

.card_title:hover {
  color: #0029A9
}
</style>