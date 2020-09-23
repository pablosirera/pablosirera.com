<template>
  <ul class="p-3">
    <li
      v-for="link of content"
      :key="link.id"
      :class="{ 'parent-toc': link.depth === 2, 'child-toc': link.depth === 3 }"
    >
      <NuxtLink class="flex" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ContentTable',
  props: {
    content: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.parent-toc {
  @apply border-t py-1;

  &:first-child {
    border: 0;
  }
}

.child-toc {
  padding-left: 10px;

  @apply pb-1 text-sm;
}

.parent-toc,
.child-toc {
  &:hover {
    @apply text-primary font-bold;
  }

  a {
    @apply p-1;
  }

  .nuxt-link-exact-active {
    @apply bg-green-main-700-40 rounded;
  }
}
</style>
