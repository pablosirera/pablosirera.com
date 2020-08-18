<template>
  <span class="image">
    <img v-bind="$attrs" loading="lazy" :class="classes" />
  </span>
</template>

<script>
export default {
  name: 'CustomImage',
  props: {
    classes: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
/* TODO: integrate tailwind */
.image {
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;

  @apply block bg-transparent w-full h-full;

  img {
    margin: 0 auto;
    border-radius: 5px;
    max-width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 0 32px 32px 0,
      rgba(0, 0, 0, 0.15) 0 16px 16px 0, rgba(0, 0, 0, 0.15) 0 8px 8px 0,
      rgba(0, 0, 0, 0.15) 0 4px 4px 0;
  }
}
</style>
