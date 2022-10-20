<template>
  <div class="card">
    <InfoBlock :data="data"/>
    <BuyBlock :data="data"/>
  </div>
</template>

<script>
import BuyBlock from '@/components/BuyBlock.vue';
import InfoBlock from '@/components/InfoBlock.vue';

export default {
  name: 'TicketCard',
  components: {
    InfoBlock,
    BuyBlock,
  },
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  width: 880px;
  height: 168px;
  background: $White;
  box-shadow: 0 2px 4px $Shadow;
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    height: 408px;
  }
}
</style>
