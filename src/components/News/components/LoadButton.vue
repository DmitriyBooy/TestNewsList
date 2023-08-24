<template>
  <div
      v-if="loadIsPossible"
      class="load_button__container"
  >
    <button
        class="load_button__button"
        @click="$emit('button-click')"
    >
      Загрузить еще
    </button>
  </div>
</template>

<script>
export default {
  props: ['loadIsPossible']
}
</script>

<style>
.load_button__container {
  width: 100%;
  padding: 72px 0;
  display: flex;
  justify-content: center;
}

.load_button__button {
  padding: 16px 32px;
  border: 1px solid #002DBF;
  border-radius: 8px;
  background-color: transparent;
  color: #002DBF;
  font-family: Nunito Sans;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
}
</style>