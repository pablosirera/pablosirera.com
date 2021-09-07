<template>
  <div class="px-6 py-5 bg-primary fixed bottom-0 w-full flex justify-between">
    <nuxt-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      class="font-bold text-blue-main-800 cursor-pointer flex flex-col items-center"
    >
      <component :is="link.icon" />
      <span>{{ link.name }}</span>
    </nuxt-link>
  </div>
</template>

<script>
import { NAV_LINKS } from '~/constants/navLinks'
import IconBookOpen from '~/components/icons/IconBookOpen.vue'
import IconBriefcase from '~/components/icons/IconBriefcase.vue'
import IconIdentification from '~/components/icons/IconIdentification.vue'

export default {
  name: 'BaseTabs',
  components: {
    IconBookOpen,
    IconBriefcase,
    IconIdentification,
  },
  data() {
    return {
      links: NAV_LINKS,
    }
  },
}
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  @apply text-gray-main-400;
}
</style>
