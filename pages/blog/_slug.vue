<template>
  <article class="mb-20">
    <h1 class="text-4xl">{{ doc.title }}</h1>
    <p>
      <span>🗓 {{ $d(new Date(doc.date), 'short') }}</span>
      -
      <span>⏱ {{ doc.timeToRead }} {{ $tc('posts.minute', 2) }}</span>
    </p>
    <div class="mt-4 flex">
      <Tag
        v-for="(tag, index) in doc.tags"
        :key="index"
        :tag="tag"
        class="mr-4"
      />
    </div>
    <div class="divider" />
    <nuxt-content :document="doc" />
    <CoffeeWidget />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`blog/${params.slug}`).fetch()
    return { doc }
  },
  head() {
    return {
      title: `${this.doc.title} | Pablo Sirera 👨🏼‍💻`,
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
          content: `${this.doc.title} | Pablo Sirera 👨🏼‍💻`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: process.env.APP_DESC,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.doc.title} | Pablo Sirera 👨🏼‍💻`,
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

<style scoped>
.divider {
  @apply border-4 border-primary w-16 rounded mt-4 mb-8;
}
</style>
