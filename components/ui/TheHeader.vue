<template>
  <header class="py-5">
    <div class="container flex justify-between items-center">
      <div class="flex items-center">
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
        <h1 class="secondary-title ml-4">
          Pablo Sirera
        </h1>
      </div>
      <div class="flex items-center">
        <ul class="text-center hidden sm:flex">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="px-2 border-r-2 links"
          >
            <nuxt-link class="link" :to="link.url">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
        <ColorModePicker class="hidden sm:block" />
        <Menu class="block sm:hidden" />
      </div>
    </div>
  </header>
</template>

<script>
import { NAV_LINKS } from '@/constants/navLinks'
import Logo from '~/components/Logo'

export default {
  name: 'TheHeader',
  components: {
    Logo,
  },
  computed: {
    links() {
      return NAV_LINKS
    },
  },
}
</script>

<style lang="scss" scoped>
.links:last-child {
  border: 0;
}

.link {
  color: var(--nav-links-color);

  @apply font-bold text-base;

  &.nuxt-link-active {
    color: var(--nav-link-active-color);

    @apply border-b-4 border-primary pb-2;
  }
}
</style>
