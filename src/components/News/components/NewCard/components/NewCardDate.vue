<template>
  <div class="card_date__container">
    <span class="card_date__day">
      {{ day }}
    </span>

    <span class="card_date__month">
      {{ month }}
    </span>

    <span class="card_date__year">
      {{ year }}
    </span>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['date'],
  data() {
    return {
      day: null,
      month: null,
      year: null,
    }
  },
  mounted() {
    const date = moment(new Date(this.date * 1000))

    this.day = date.date()
    this.month = date.format('MMMM')
    this.year = date.year()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,400;6..12,700&display=swap');

.card_date__container {
  display: grid;
  grid-template-columns: 44px 62px;
  grid-template-rows: repeat(2, 18px);
  grid-template-areas:
      "D M"
      "D Y";
}

.card_date__day {
  grid-area: D;
  text-align: center;
  font-family: Nunito Sans;
  color: #A1A7B5;
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
}

.card_date__month {
  grid-area: M;
  font-family: Nunito Sans;
  color: #A1A7B5;
  font-size: 15px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: -0.01em;
}

.card_date__year {
  grid-area: Y;
  font-family: Nunito Sans;
  color: #A1A7B5;
  font-size: 15px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: -0.01em;
}
</style>