<template>
  <a
    class="link cursor-pointer"
    :class="`link-${$colorMode.preference}`"
    @click="goToUrl"
  >
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
    isLocalRoute: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goToUrl() {
      if (this.isLocalRoute) {
        this.$router.push(this.url)
        return
      }

      window.open(this.url, '_blank')
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

  @apply text-green-main-800 font-bold;

  &-dark {
    @apply text-primary;

    &:hover {
      border-color: theme('colors.primary');
    }
  }

  &:hover {
    opacity: 0.8;
    border-bottom: solid 1px theme('colors.green-main.800');
  }
}
</style>
