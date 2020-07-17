<template>
  <span :class="tagClasses" class="tag" @click="emitEvent">
    <img class="w-5 mr-1" :src="`/images/icons/${tag}.png`" loading="lazy" />
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
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tagClasses() {
      return {
        [this.tag]: true,
        'tag-selected': this.isSelected,
      }
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

  &-selected {
    @apply bg-gray-main-100;
  }
}
</style>
