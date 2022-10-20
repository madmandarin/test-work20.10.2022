<template>
  <div class="route">
    <div class="line">
      <div class="from airport">{{ originCode }}</div>
      <div class="time">{{ inTravel.hr }} ч {{ inTravel.min }} м</div>
      <div class="to airport">{{ destCode }}</div>
    </div>
    <svg viewBox="0 0 173 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_8591_243)">
      <path d="M2.43792 2.5L170.438 2.5" stroke="#B9B9B9"/>
      <circle cx="169.938" cy="2.5" r="2" fill="white" stroke="#B9B9B9"/>
      <circle cx="2.93796" cy="2.5" r="2" fill="white" stroke="#B9B9B9"/>
      </g>
      <circle cx="83.938" cy="2.5" r="2" fill="white" stroke="#B9B9B9"/>
      <defs>
      <clipPath id="clip0_8591_243">
      <rect width="172" height="5" fill="white" transform="translate(0.437958)"/>
      </clipPath>
      </defs>
    </svg>
    <div v-for="(inter, i) in intermediates"
         v-bind:key="`inter${i}`"
         class="through">через {{inter.name}}, {{inter.time.hr}} ч {{inter.time.min}} м</div>
  </div>
</template>

<script>
export default {
  name: 'RouteLine',
  props: {
    route: {
      type: Object,
      require: true,
    },
  },
  computed: {
    inTravel() {
      return {
        hr: Math.floor(this.route.traveltime / 60 / 60),
        min: Math.floor(this.route.traveltime / 60) % 60,
      };
    },
    originCode() {
      return this.route.segments[0].origin_code;
    },
    destCode() {
      return this.route.segments[this.route.segments.length - 1].dest_code;
    },
    intermediates() {
      const res = [];
      if (this.route.segments.length > 1) {
        for (let i = 1; i < this.route.segments.length; i += 1) {
          const waiting = ((new Date(this.route.segments[i].dep_time_iso))
            - (new Date(this.route.segments[i - 1].arr_time_iso))) / 1000;
          res.push({
            name: this.route.segments[i].airport_dest,
            time: {
              hr: Math.floor(waiting / 60 / 60),
              min: Math.floor(waiting / 60) % 60,
            },
          });
        }
      }
      return res;
    },
  },
};
</script>

<style lang="scss" scoped>
.route {
  display: flex;
  flex-direction: column;
  .line {
    display: flex;
    justify-content: space-between;
    .airport {
      font-weight: 400;
      font-size: 10px;
      color: $Gray;
    }
    .from {
      text-align: start;
    }
    .to {
      text-align: end;
    }
    .time {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 3px;
      text-align: center;
    }
  }
  .through {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: $Orange;
    text-align: center;
  }
  svg {
    width: 173px;
  }
  @media (max-width: 900px) {
    svg {
      width: auto;
      margin: 18px 0;
    }
    .through {
      margin-bottom: 6px;
    }
  }
}
</style>
