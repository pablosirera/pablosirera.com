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
}
</script>

<style scoped>
.divider {
  @apply border-4 border-primary w-16 rounded mt-4 mb-8;
}
</style>
