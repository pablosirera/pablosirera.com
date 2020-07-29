<template>
  <div>
    <h2 class="text-center text-xl pb-3 font-semibold">
      {{ $t('home.lastPosts') }}
    </h2>
    <nuxt-link
      v-for="post in posts"
      :key="post.slug"
      :to="post.path"
      class="link flex justify-end mb-4 rounded p-2 hover:bg-green-main-700-40"
    >
      <h4 class="pr-3 text-right">{{ post.title }}</h4>
      <img
        :src="`https://res.cloudinary.com/de5xzoviz/image/upload/q_68/${post.image}`"
        :alt="post.title"
        class="rounded"
      />
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
    width: 160px;
    max-height: 120px;
  }
}
</style>
