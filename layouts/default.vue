<template>
  <div class="min-h-screen">
    <BaseHeader />
    <main class="pt-4 container px-3 min-h-main">
      <nuxt />
    </main>
    <BaseFooter />
  </div>
</template>

<style lang="scss" scoped>
.min-h-main {
  min-height: 54vh;
}
</style>
