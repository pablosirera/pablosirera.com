<template>
  <div>
    <h1 class="title">Blog</h1>
    <div class="flex flex-col m-auto pt-8">
      <BlogCard
        v-for="(post, index) in posts"
        :key="index"
        v-bind="post"
        @select="goToPost(post.path)"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from '@/components/blog/BlogCard'

export default {
  scrollToTip: true,
  name: 'Blog',
  components: {
    BlogCard,
  },
  async asyncData({ $content }) {
    const posts = await $content('blog')
      .without(['body', 'toc'])
      .sortBy('date', 'desc')
      .fetch()
    return { posts }
  },
  methods: {
    goToPost(path) {
      this.$router.push({ path })
    },
  },
}
</script>
