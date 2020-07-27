<template>
  <div>
    <ul class="flex items-center">
      <li v-for="color of colors" :key="color">
        <component
          :is="`icon-${color}`"
          :class="getClasses(color)"
          class="cursor-pointer"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  name: 'ColorModePicker',
  components: {
    IconLight,
    IconDark,
  },
  data: () => ({
    colors: ['light', 'dark'],
  }),
  methods: {
    getClasses(color) {
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      }
    },
    getIconPath(color) {
      return require(`@/assets/icons/${color}.svg`)
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
  }
}
</style>
