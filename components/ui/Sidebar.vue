<template>
  <aside class="flex flex-col items-center">
    <Logo />
    <h1 class="title text-center">
      Pablo Sirera
    </h1>
    <ul class="text-center">
      <li v-for="(link, index) in links" :key="index">
        <nuxt-link
          class="link font-bold text-base text-blue-main-800"
          :to="link.url"
        >
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  name: 'Sidebar',
  components: {
    Logo,
  },
  data: () => ({
    links: [
      {
        url: '/',
        name: 'Home',
      },
      {
        url: '/blog',
        name: 'Blog',
      },
      {
        url: '/projects',
        name: 'Projects',
      },
      {
        url: '/about',
        name: 'About',
      },
    ],
  }),
}
</script>

<style scoped>
.link.nuxt-link-exact-active {
  @apply text-blue-main-400;
}
</style>
