<template>
  <div class="min-h-screen px-3">
    <TheHeader />
    <main class="pt-4 container">
      <nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '~/components/ui/TheHeader.vue'

export default {
  components: {
    TheHeader,
  },
}
</script>
