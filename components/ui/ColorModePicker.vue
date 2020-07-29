<template>
  <div>
    <ul class="flex items-center justify-center">
      <li v-if="$colorMode.preference !== 'light'">
        <IconLight
          :class="getClasses('light')"
          class="cursor-pointer"
          @click="$colorMode.preference = 'light'"
        />
      </li>
      <li v-else>
        <IconDark
          :class="getClasses('dark')"
          class="cursor-pointer"
          @click="$colorMode.preference = 'dark'"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ColorModePicker',
  components: {
    IconLight: () => import('@/assets/icons/light.svg?inline'),
    IconDark: () => import('@/assets/icons/dark.svg?inline'),
  },
  methods: {
    getClasses(color) {
      if (this.$colorMode && this.$colorMode.unknown) {
        return {}
      }
      return {
        [this.$colorMode.value]: true,
        selected: color === this.$colorMode.value,
      }
    },
    selectColor(color) {
      this.$colorMode.preference = color
    },
  },
}
</script>

<style scoped lang="scss">
ul {
  @apply m-0 p-0 list-none;

  li {
    @apply inline-block px-1;

    .dark {
      fill: theme('colors.white');
    }
  }
}
</style>
