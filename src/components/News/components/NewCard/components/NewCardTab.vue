<template>
  <div class="card_tab">
    <span class="card_tab__text">
      {{ type.value }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style>
.card_tab {
  margin-right: auto;
  padding: 4px 16px;
  background-color: #F0F6FE;
  border-radius: 360px;
}

.card_tab__text {
  font-family: Nunito Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #00133A;
}
</style>