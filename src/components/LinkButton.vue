<template>
 <button class="link-button" @click="$emit('click')">
   <slot />
 </button>
</template>

<script>
export default {
  name: 'LinkButton',
};
</script>

<style lang="scss" scoped>
button.link-button {
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: $BottomBlue;
  display: flex;
  align-self: flex-start;
  border-bottom: 1px dashed $BottomBlue;
}
</style>
