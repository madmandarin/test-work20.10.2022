<template>
  <div class="filters">
    <card-filter name="Опции тарифа"
                 :filters="filterOptions"
                 @changeFilter="setFilterOptions"
                 @onReset="resetFilterOptions"
    />
    <card-filter name="Авиакомпании"
                 :filters="filterAirlines"
                 @changeFilter="setFilterAirlines"
                 @onReset="resetFilterAirlines"
    />
    <link-button class="resetFilters" @click="reset">Сбросить все фильтры</link-button>
  </div>
</template>

<script>
import CardFilter from '@/components/CardFilter.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import LinkButton from '@/components/LinkButton.vue';

export default {
  name: 'MainPageFilters',
  components: { LinkButton, CardFilter },
  computed: {
    ...mapGetters(['filterOptions', 'filterAirlines']),
  },
  methods: {
    ...mapMutations([
      'setFilterOptions',
      'resetFilterOptions',
      'resetFilterAirlines',
    ]),
    ...mapActions(['setFilterAirlines']),
    reset() {
      this.resetFilterAirlines();
      this.resetFilterOptions();
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-direction: column;
  &>*{
    margin-top: 11px;
    &:first-child {
      margin-top: 0;
    }
  }
  @media(max-width: 1160px) {
    margin-bottom: 12px;
  }
  @media (min-width: 900px) and (max-width: 1160px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: flex-start;
    &>*{
      margin-top: 0;
      width: calc(50% - 10px);
    }
  }
  .resetFilters {
    /* Костыль, не надо так */
    @media (min-width: 900px) and (max-width: 1160px) {
      position: absolute;
      right: calc((100% - 880px) / 2);
      top: 210px;
      width: 136px;
    }
  }
}
</style>
