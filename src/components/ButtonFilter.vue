<template>
  <div class="btnReset">
    <button class="icon-icon-close-filter" />
    <span class="hint">Сбросить&nbsp;выбор</span>
  </div>

</template>

<script>
export default {
  name: 'ButtonFilter',
};
</script>

<style lang="scss" scoped>
.btnReset {
  position: relative;
}
button {
  &.icon-icon-close-filter {
    cursor: pointer;
    transition: color 300ms;
    color: $FilterIcon;
    font-size: 20px;
    line-height: 20px;
    position: relative;
  }
  &.icon-icon-close-filter:hover {
    color: $BottomBlue;
  }
  & ~ span {
    display: none;
    background: $White;
    border: 1px solid $MiddleGray;
    border-radius: 6px;
    position: absolute;
    width: auto;
    top: -50px;
    left: -56px;
    padding: 12px;
    line-height: 17px;
    font-size: 12px;
    @media (max-width: 900px) {
      left: -90px;
      &:after {
        right: 0;
      }
    }
    &:after {
      content: '';
      background: $White;
      border-left: 1px solid $MiddleGray;
      border-bottom: 1px solid $MiddleGray;
      width: 10px;
      height: 10px;
      position: absolute;
      bottom: -6px;
      right: calc(50% - 5px);
      transform: rotate(-45deg);
      @media (max-width: 900px) {
        right: 16px;
      }
    }
  }
  &:hover ~ span {
    display: block;
  }
}

</style>
