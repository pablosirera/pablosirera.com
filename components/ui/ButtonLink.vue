<template>
  <router-link :class="buttonClasses" :to="path">
    <slot />
  </router-link>
</template>

<script>
// TODO: sacar a un mixin lo común entre este componente y BaseButton
export default {
  name: 'ButtonLink',
  props: {
    path: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'normal',
      validate: (value) => ['normal', 'outlined'].includes(value),
    },
    size: {
      type: String,
      default: 'medium',
      validate: (value) => ['medium'].includes(value),
    },
  },
  computed: {
    buttonClasses() {
      return [this.size, this.type]
    },
  },
}
</script>

<style scoped>
.normal {
  @apply bg-primary text-white;
}

.medium {
  @apply px-4 py-2 rounded-lg text-base font-bold mx-2;
}

.medium:hover {
  @apply opacity-75;
}

.outlined {
  @apply bg-transparent border-primary border;
}

.outlined:hover {
  @apply bg-primary opacity-100 text-white;
}
</style>
