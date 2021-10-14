<template>
  <div class="min-h-screen">
    <BaseHeader />
    <main class="pt-4 main-wrapper container px-3">
      <nuxt />
    </main>
    <BaseFooter />
  </div>
</template>
<style scoped>
.main-wrapper {
  min-height: calc(100vh - 272px);
}
</style>
