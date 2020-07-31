<template>
  <div>
    <h1 class="title text-center">Blog</h1>
    <div class="mt-4 flex justify-center flex-wrap">
      <Tag
        v-for="(tag, index) in cleanTags"
        :key="index"
        :tag="tag"
        :is-selected="selectedTag === tag"
        class="m-2"
        @select="selectTag(tag)"
      />
    </div>
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
    const tags = await $content('blog').only(['tags']).fetch()
    return { posts, tags }
  },
  data: () => ({
    selectedTag: null,
  }),
  computed: {
    cleanTags() {
      if (this.tags.length) {
        let tags = this.tags.map((tag) => tag.tags)
        tags = [].concat(...tags)
        return [...new Set(tags)]
      }
      return []
    },
  },
  methods: {
    goToPost(path) {
      this.$router.push({ path })
    },
    async selectTag(tag) {
      if (this.selectedTag === tag) {
        this.selectedTag = null
        this.posts = await this.$content('blog')
          .without(['body', 'toc'])
          .sortBy('date', 'desc')
          .fetch()
        return
      }

      this.selectedTag = tag
      this.posts = await this.$content('blog')
        .where({ tags: { $contains: [tag] } })
        .without(['body', 'toc'])
        .sortBy('date', 'desc')
        .fetch()
    },
  },
  head() {
    return {
      title: `Blog | ${process.env.APP_TITLE}`,
      meta: [
        // TODO: improve descriptions
        {
          hid: 'description',
          name: 'description',
          content: process.env.APP_DESC,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Blog | ${process.env.APP_TITLE}`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: process.env.APP_DESC,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Blog | ${process.env.APP_TITLE}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: process.env.APP_DESC,
        },
      ],
    }
  },
}
</script>
