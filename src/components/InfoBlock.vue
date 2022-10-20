<template>
  <div class="info">
    <div class="mainLine">
      <div class="airline">
        <img :src="`https://aviata.kz/static/airline-logos/80x80/${data.validating_carrier}.png`" alt="" class="logo">
        <div class="label">{{getAirlines[data.validating_carrier]}}</div>
      </div>
      <DateTime :date="new Date(data.itineraries[0][0].dep_date)" class="startTime"/>
      <RouteLine :route="data.itineraries[0][0]" class="route"/>
      <DateTime :date="new Date(data.itineraries[0][0].arr_date)" class="finishTime"/>
    </div>
    <div class="subLine">
      <link-button class="linkBtn">Детали перелета</link-button>
      <link-button class="linkBtn">Условия тарифа</link-button>
      <div class="type">
        <icon-circle-not class="icon"/>
        <div class="label">{{data.itineraries[0][0].refundable ? 'возвратный':'невозвратный'}}</div>
      </div>
    </div>
    <div class="mobileBaggage">Нет багажа</div>
  </div>
</template>

<script>
import DateTime from '@/components/DateTime.vue';
import LinkButton from '@/components/LinkButton.vue';
import IconCircleNot from '@/components/icons/IconCircleNot.vue';
import RouteLine from '@/components/RouteLine.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'InfoBlock',
  components: {
    RouteLine, IconCircleNot, LinkButton, DateTime,
  },
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(['getAirlines']),
  },
};
</script>

<style lang="scss" scoped>
  .info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    .mainLine {
      display: flex;
      align-items: center;
      flex-grow: 1;
      padding: 40px 94px 40px 40px;
      justify-content: end;
      .airline {
        display: flex;
        justify-self: start;
        flex-grow: 1;
        .logo {
          height: 20px;
          margin-right: 10px;
        }
        .label {
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
        }
      }
      .startTime {
        margin-right: 18px;
      }
      .route {
          margin-right: 31px;
      }
    }
    .subLine {
      display: flex;
      position: relative;
      width: 100%;
      padding: 8px 0px 18px 23px;
      .linkBtn {
        margin-left: 22px;
      }
      .type {
        position: absolute;
        display: flex;
        left: 80px;
        right: 0;
        bottom: 10px;
        width: 100px;
        margin: 0 auto;
        .icon {
          height: 20px;
          position: relative;
          bottom: 4px;
          right: 4px;
        }
        .label {
          font-family: 'Arial';
          font-size: 12px;
          line-height: 14px;
          text-align: center;
          display: block;
          color: $Gray;
        }
      }
    }
    .mobileBaggage {
      display: none;
    }
    @media (max-width: 900px) {
      width: 100%;
      .subLine {
        display: none;
      }
      .mainLine {
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        padding: 18px 20px;
        align-items: flex-start;
        .airline {
          flex-grow: 0;
        }
        .route {
          order: 3;
          width: 100%;
        }
        .startTime {
          position: absolute;
          top: 70px;
        }
        .finishTime {
          position: absolute;
          top: 70px;
          right: 10px;
        }
      }
      .mobileBaggage {
        display: block;
        position: absolute;
        top: 19px;
        right: 22px;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
</style>
