<template>
  <div class="card">
    <new-card-image
        v-if="image"
        :image="image"
        :code="code"
    />

    <div
        class="card_content__container"
        :class="{
          'card_content__new': !!image,
          'card_content__press': !image,
        }"
    >
      <new-card-date :date="date" />
      <new-card-title
          :title="name"
          :link="link"
      />
      <new-card-description :description="previewText"/>
      <new-card-tab :type="type" />
    </div>
  </div>
</template>

<script>
import NewCardImage from './components/NewCardImage.vue';
import NewCardDate from './components/NewCardDate.vue';
import NewCardTitle from './components/NewCardTitle.vue';
import NewCardDescription from './components/NewCardDescription.vue';
import NewCardTab from './components/NewCardTab.vue';

export default {
  components: {
    NewCardImage,
    NewCardDate,
    NewCardTitle,
    NewCardDescription,
    NewCardTab,
  },
  props: [
    'name',
    'code',
    'previewText',
    'type',
    'date',
    'link',
    'image',
  ]
}
</script>

<style>
.card {
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card_content__container {
  padding: 32px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card_content__new {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  border-left: 1px solid #0F62FE;
  border-bottom: 1px solid #0F62FE;
  border-right: 1px solid #0F62FE;
}

.card_content__press{
  border-radius: inherit;
  border: 1px solid #0F62FE;
}
</style>