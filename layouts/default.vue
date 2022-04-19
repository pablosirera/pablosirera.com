<template>
  <div class="min-h-screen">
    <BaseHeader />
    <main class="pt-4 main-wrapper container px-3">
      <nuxt />
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '~/components/ui/BaseHeader.vue'
import BaseFooter from '~/components/ui/BaseFooter.vue'

export default {
  components: {
    BaseHeader,
    BaseFooter,
  },
}
</script>

<style scoped>
.main-wrapper {
  min-height: calc(100vh - var(--header-footer-height));
}
</style>
