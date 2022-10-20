<template>
  <div class="wrapper">
    <MainPage class="content"/>
  </div>
</template>

<script>
import MainPage from '@/views/Index/MainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
body {
  background: $BackgroundClr;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  @media (max-width: 900px) {
    padding: 16px;
    .content {
      width: 100%;
    }
  }
}
</style>
