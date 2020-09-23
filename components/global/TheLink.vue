<template>
  <a class="link" target="_blank" :href="url">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'TheLink',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  opacity: 1;
  border-bottom: solid 1px transparent;
  -webkit-transition: opacity 0.2s ease-out, border-bottom-color 0.2s ease-out;
  -moz-transition: opacity 0.2s ease-out, border-bottom-color 0.2s ease-out;
  -ms-transition: opacity 0.2s ease-out, border-bottom-color 0.2s ease-out;
  -o-transition: opacity 0.2s ease-out, border-bottom-color 0.2s ease-out;
  transition: opacity 0.2s ease-out, border-bottom-color 0.2s ease-out;

  @apply text-blue-main-300 font-bold;

  &:hover {
    opacity: 0.8;
    border-bottom: solid 1px #1f8ed5;
  }
}
</style>
