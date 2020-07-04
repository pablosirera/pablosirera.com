<template>
  <header class="py-5">
    <div class="container flex justify-between items-center">
      <div class="flex items-center">
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
        <h1 class="text-blue-main-700 text-3xl text-center ml-4">
          Pablo Sirera
        </h1>
      </div>
      <ul class="text-center flex">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="px-2 border-r-2 links"
        >
          <nuxt-link
            class="link font-bold text-base text-blue-main-800"
            :to="link.url"
          >
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  name: 'TheHeader',
  components: {
    Logo,
  },
  data: () => ({
    links: [
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
.links:last-child {
  border: 0;
}

.link.nuxt-link-active {
  @apply text-gray-main-600 border-b-4 border-primary pb-2;
}
</style>
