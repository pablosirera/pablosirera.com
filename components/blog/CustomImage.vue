<template>
  <span class="image">
    <img v-bind="$attrs" loading="lazy" />
  </span>
</template>

<script>
export default {
  name: 'CustomImage',
}
</script>

<style scoped lang="scss">
/* TODO: integrate tailwind */
.image {
  display: flex;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;

  img {
    border-radius: 5px;
    max-width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 0 32px 32px 0,
      rgba(0, 0, 0, 0.15) 0 16px 16px 0, rgba(0, 0, 0, 0.15) 0 8px 8px 0,
      rgba(0, 0, 0, 0.15) 0 4px 4px 0;
  }
}
</style>
