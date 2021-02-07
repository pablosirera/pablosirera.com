<template>
  <header class="py-5 px-3">
    <div class="container flex justify-between items-center">
      <nuxt-link to="/" class="flex items-center">
        <Logo />
        <h1 class="secondary-title ml-4">Pablo Sirera</h1>
      </nuxt-link>
      <div class="flex items-center">
        <ul class="text-center hidden sm:flex sm:items-center">
          <ColorModePicker class="hidden sm:block" />
          <li v-for="(link, index) in links" :key="index" class="px-2 links">
            <nuxt-link class="link" :to="link.url">
              {{ link.name }}
            </nuxt-link>
          </li>
          <ButtonLink type="outlined" path="/contact-me">Contáctame</ButtonLink>
        </ul>
        <Menu class="block sm:hidden" />
      </div>
    </div>
  </header>
</template>

<script>
import { NAV_LINKS } from '@/constants/navLinks'
import ButtonLink from '~/components/ui/ButtonLink.vue'
import Logo from '~/components/Logo.vue'

export default {
  name: 'TheHeader',
  components: {
    Logo,
    ButtonLink,
  },
  computed: {
    links() {
      return NAV_LINKS
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  color: var(--nav-links-color);

  @apply font-bold text-base;

  &:hover {
    @apply border-b-2 border-primary pb-2;
  }

  &.nuxt-link-active {
    color: var(--nav-link-active-color);

    @apply text-primary pb-2;
  }
}
</style>
