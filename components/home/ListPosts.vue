<template>
  <div>
    <h2 class="text-3xl font-semibold text-center pb-3">
      {{ $t('home.lastPosts') }}
    </h2>
    <nuxt-link
      v-for="post in posts"
      :key="post.slug"
      :to="post.path"
      class="link flex justify-start mb-4 rounded p-2 hover:bg-green-main-700-40"
    >
      <img
        :src="`https://res.cloudinary.com/de5xzoviz/image/upload/q_55/${post.image}`"
        :alt="post.title"
        class="rounded mr-3 w-auto"
        loading="lazy"
      />
      <h4 class="text-left">{{ post.title }}</h4>
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
