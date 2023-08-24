<template>
  <div class="footer">
    <div>
      <img
          src="../assets/footer-img.png"
          alt="footer-image"
          class="footer_image"
      />
    </div>

    <span class="footer_text">
      © alpha, 2023
    </span>
  </div>
</template>

<script setup>

</script>

<style>
.footer {
  padding-left: 100px;
  min-height: 200px;
  background-color: #F0F6FE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
}

.footer_image {
  height: 32px;
}

.footer_text {
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}
</style>