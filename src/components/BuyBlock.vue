<template>
  <div class="buyBlock">
    <div class="cost">{{data.price}} ₸</div>
    <button class="buyButton">Выбрать</button>
    <div class="label">Цена за всех пассажиров</div>
    <div class="baggage">
      <div class="weight">{{baggage}}</div>
      <button class="addBaggage">+ Добавить багаж</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyBlock',
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    baggage() {
      let res = 'Нет багажа';
      if (Object.keys(this.data.services).filter((item) => item === '0PC').length) {
        res = 'Нет багажа';
      }
      Object.keys(this.data.services).forEach((service) => {
        res = this.data.services[service].value;
      });
      return res;
    },
  },
};
</script>

<style lang="scss" scoped>
  .buyBlock {
    position: relative;
    background: $CardBuyBg;
    width: 240px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px 20px;
    .cost {
      font-family: 'Arial';
      font-size: 24px;
      line-height: 28px;
      text-align: center;
    }
    .buyButton {
      cursor: pointer;
      background: $Green;
      border-radius: 4px;
      width: 200px;
      height: 40px;
      align-self: center;
      justify-self: center;
      color: $White;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      margin-top: 10px;
    }
    .label {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: $Dark;
      margin-top: 10px;
    }
    .baggage {
      display: flex;
      margin-top: 12px;
      .weight {
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        align-items: center;
        text-align: center;
        width: 66px;
      }
      .addBaggage {
        cursor: pointer;
        color: $Blue;
        background: $LightBlue;
        padding: 3px 8px;
        line-height: 18px;
        font-weight: 600;
        font-size: 12px;
      }
    }
    .mobileBaggage {
      display: none;
    }
    @media (max-width: 900px) {
      width: 100%;
      height: 148px;
      .cost {
        font-size: 26px;
        line-height: 28px;
        text-align: center;
        margin-top: 8px;
      }
      .buyButton {
        margin-top: 14px;
        padding: 7px;
      }
      .label {
        margin-top: 14px;
      }
      .baggage {
        display: none;
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
</style>
