<template>
  <div class="cardFilter">
    <div class="title">
      <h3>{{name}}</h3>
      <button-filter @click="$emit('onReset')"/>
    </div>
    <PerfectScrollbar>
      <av-check-box
        class="checkbox"
        v-for='filter in filters'
        v-bind:key='`filter${filter.id}`'
        :modelValue="filter.value"
        @update:modelValue="$emit('changeFilter', {id:filter.id, value:$event})"
        >
        {{filter.label}}
      </av-check-box>
    </PerfectScrollbar>
  </div>
</template>

<script>
import ButtonFilter from '@/components/ButtonFilter.vue';
import AvCheckBox from '@/components/AvCheckBox.vue';

import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

export default {
  name: 'CardFilter',
  components: { AvCheckBox, ButtonFilter, PerfectScrollbar },
  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false,
      },
    };
  },
  props: {
    name: {
      type: String,
      require: true,
    },
    filters: {
      type: Array,
      validator() {
        // В норме тут надо прописать валидацию входного массива фильтров
        return true;
      },
    },
  },
};
</script>

<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css"/>
<style lang="scss" scoped>
  .cardFilter {
    background: $BgFilter;
    border-radius: 4px;
    padding: 12px 0 12px;
    min-width: 240px;
    max-height: 320px;
    @media (max-width: 900px) {
      min-width: 100%;
    }

    .title {
      display: flex;
      justify-content: space-between;
      padding: 0 12px;
      position: relative;
      h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
      }
      &:after {
        position: absolute;
        left:0;
        right: 0;
        top: 100%;
        height: 12px;
        content: '';
        z-index: 1;
        background: linear-gradient(180deg, $BgFilter 0%, $BgFilterTrans 100%);
      }
    }
    .checkbox {
      height: 32px;
      width: 100%;
      padding: 0 12px;
      align-items: center;

      &:hover {
        background: $LightGray;
      }
    }
  }
</style>
<style lang="scss">
    .ps {
      padding-top: 12px !important;
      max-height: 274px;
       > .ps__rail-y {
        z-index: 1;
        width: 2px;
        > .ps__thumb-y {
          z-index: 1;
          width: 2px;
        }
        &:hover > .ps__thumb-y {
          width: 2px;
        }
      }
    }
</style>
