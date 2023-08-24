<template>
  <div class="news_header__container">
    <img
        class="news_header__image"
        src="../../../assets/NewHeader.png"
        alt="new-header-image"
    />

    <span class="news_header__title">
      Новости
    </span>
  </div>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,700&display=swap');

.news_header__container {
    position: relative;
}

.news_header__image {
  width: 100%;
}

.news_header__title {
  left: 100px;
  bottom: 20%;
  position: absolute;
  font-family: Nunito Sans;
  font-size: 40px;
  font-weight: 700;
}
</style>
