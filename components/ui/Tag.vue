<template>
  <span :class="tagClasses" class="tag select-none" @click="emitEvent">
    <img class="w-5 mr-1" :src="getTagUrl(tag)" loading="lazy" :alt="tag" />
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
    getTagUrl(tag) {
      return require(`@/assets/icons/${tag}.png`)
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  transition: background-color 0.5s ease;
  background-color: var(--tag-bg);

  @apply flex items-center py-1 px-2 border rounded-lg cursor-pointer;

  &:hover {
    background-color: var(--tag-bg-hover);

    @apply font-semibold;
  }

  &-selected {
    background-color: var(--tag-bg-hover);

    @apply font-semibold;
  }
}
</style>
