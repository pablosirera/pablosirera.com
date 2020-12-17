<template>
  <div class="min-h-screen px-3 main-container">
    <TheHeader />
    <main class="pt-4 container">
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
