<template>
  <div>
    <h1 class="title">Blog</h1>
    <div class="flex flex-col m-auto pt-8">
      <BlogCard
        v-for="(post, index) in posts"
        :key="index"
        v-bind="post"
        @select="goToPost(post.name)"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from '@/components/ui/BlogCard'

export default {
  scrollToTip: true,
  name: 'Blog',
  components: {
    BlogCard,
  },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    return { posts }
  },
  methods: {
    goToPost(name) {
      this.$router.push({ path: `/blog/${name}` })
    },
  },
}
</script>
