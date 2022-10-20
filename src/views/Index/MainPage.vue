<template>
  <div class="mainPage">
    <MainPageFilters />
    <mainPageContent />
  </div>
</template>
<script>
import MainPageFilters from '@/views/Index/MainPageFilters.vue';
import MainPageContent from '@/views/Index/MainPageContent.vue';
import { mapActions } from 'vuex';

export default {
  name: 'MainPage',
  components: { MainPageContent, MainPageFilters },
  methods: {
    ...mapActions(['loadData']),
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.mainPage {
  display: flex;
  flex-direction: row;

  @media (max-width: 1160px) {
    flex-direction: column;
  }
}
</style>
