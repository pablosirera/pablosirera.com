<template>
  <span :class="tag" class="tag" @click="emitEvent">
    <img class="w-5 mr-1" :src="`/images/icons/${tag}.png`" />
    {{ tag }}
  </span>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitEvent() {
      this.$emit('select', this.tag)
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  transition: background-color 0.5s ease;

  @apply flex items-center py-1 px-2 border rounded-lg cursor-pointer bg-white;

  &:hover {
    @apply bg-gray-main-100;
  }
}
</style>
