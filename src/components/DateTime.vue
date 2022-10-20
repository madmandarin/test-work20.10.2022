<template>
  <div class="dateTime">
    <div class="date">{{date.getDate()}} {{day}}</div>
    <div class="time">{{time}}</div>
  </div>
</template>

<script>
export default {
  name: 'DateTime',
  data() {
    return {
      options: {
        month: 'short',
        weekday: 'short',
      },
    };
  },
  props: {
    date: {
      type: Date,
      require: true,
    },
  },
  computed: {
    day() {
      return new Intl.DateTimeFormat('ru-KZ', this.options).format(this.date);
    },
    time() {
      return this.date.toLocaleTimeString('ru-KZ').slice(0, -3);
    },
  },
};
</script>

<style lang="scss" scoped>
.dateTime {
  display: flex;
  flex-direction: column;
  width: 70px;
  .date {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
  .time {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
