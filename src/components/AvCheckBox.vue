<template>
  <button @click="$emit('update:modelValue', !modelValue)">
    <div class="icon-accept" :class="{selected: modelValue}"></div>
    <span><slot /></span>
  </button>
</template>

<script>
export default {
  name: 'AvCheckBox',
  props: {
    modelValue: {
      require: true,
      type: Boolean,
    },

  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  user-select: none;
  display: flex;
  transition: all 300ms;
  .icon-accept {
    color: transparent;
    background: white;
    display: block;
    width: 12px;
    height: 12px;
    border: 1px solid $Gray;
    border-radius: 2px;
    font-size: 12px;
    line-height: 12px;
    transition: all 300ms;

    &.selected {
      color: $White !important;
      border: 1px solid transparent;
      background: $Green;
    }
    &:before {

    position: relative;
    top: -1px;
    left: -1px;
    }
  }
  &:hover .icon-accept{
    color: $Gray;
  }
  span {
    margin-left: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
