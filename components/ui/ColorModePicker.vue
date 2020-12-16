<template>
  <div>
    <ul class="flex items-center justify-center">
      <li v-if="isLightMode" @click="$colorMode.preference = 'light'">
        <IconSun :class="getClasses('light')" class="cursor-pointer" />
      </li>
      <li v-else @click="$colorMode.preference = 'dark'">
        <IconMoon :class="getClasses('dark')" class="cursor-pointer" />
      </li>
    </ul>
  </div>
</template>

<script>
import IconMoon from '~/components/icons/IconMoon.vue'
import IconSun from '~/components/icons/IconSun.vue'

export default {
  name: 'ColorModePicker',
  components: {
    IconMoon,
    IconSun,
  },
  computed: {
    isLightMode() {
      return this.$colorMode.preference !== 'light'
    },
  },
  methods: {
    getClasses(color) {
      if (this.$colorMode && this.$colorMode.unknown) {
        return {}
      }
      return {
        [this.$colorMode.value]: true,
        selected: color === this.$colorMode.value,
        'w-6 h-6': true,
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
