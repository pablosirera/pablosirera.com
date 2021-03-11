<template>
  <button :class="buttonClasses" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    theme: {
      type: String,
      default: 'normal',
      validate: (value) => ['normal', 'outlined'].includes(value),
    },
    size: {
      type: String,
      default: 'medium',
      validate: (value) => ['medium'].includes(value),
    },
    type: {
      type: String,
      default: 'button',
      validate: (value) => ['button', 'submit', 'reset'].includes(value),
    },
  },
  computed: {
    buttonClasses() {
      return [this.size, this.theme]
    },
  },
}
</script>

<style scoped>
.normal {
  @apply bg-primary text-white;
}

.medium {
  @apply px-4 py-2 rounded-lg text-base font-bold;
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
