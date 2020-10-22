<template>
  <div>
    <h2 class="text-3xl font-semibold text-center pb-3">
      {{ $t('home.lastPosts') }}
    </h2>
    <nuxt-link
      v-for="post in posts"
      :key="post.slug"
      :to="post.path"
      class="link flex md:justify-end mb-4 rounded p-2 hover:bg-green-main-700-40"
    >
      <h4 class="hidden md:block pr-3 text-right">{{ post.title }}</h4>
      <img
        :src="`https://res.cloudinary.com/de5xzoviz/image/upload/q_68/${post.image}`"
        :alt="post.title"
        class="rounded mr-3 md:mr-0"
      />
      <h4 class="block md:hidden text-left">{{ post.title }}</h4>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ListPosts',
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  img {
    min-width: 160px;
    max-width: 160px;
    max-height: 120px;
  }
}
</style>
