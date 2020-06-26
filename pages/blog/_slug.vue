<template>
  <nuxt-content :document="doc" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`blog/${params.slug}`).fetch()
    return { doc }
  },
}
</script>
