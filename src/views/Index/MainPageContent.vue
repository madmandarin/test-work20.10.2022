<template>
  <div class="content" v-if="filterFlights.length">
    <TicketCard
      v-for="flight in filterFlights"
      v-bind:key="flight.id"
      :data="flight"/>
  </div>
  <div class="content clear" v-else>
    <div class="card">
      <h1>Ничего не найденно</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TicketCard from '@/components/TicketCard.vue';

export default {
  name: 'MainPageContent',
  components: { TicketCard },
  computed: {
    ...mapGetters(['filterFlights']),
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-left: 20px;
  &.clear .card {
    display: flex;
    width: 880px;
    background: $White;
    box-shadow: 0 2px 4px $Shadow;
    border-radius: 4px;
    overflow: hidden;
    text-align: center;
    padding: 40px;
    font-size: 28px;

    @media (max-width: 900px) {
      width: 100%;
      flex-direction: column;
    }
  }
  @media (max-width: 1160px) {
    margin-left: 0;
  }
  .card {
    margin-top: 12px;
    &:first-of-type {
      margin-top: 0;
    }
  }
}
</style>
