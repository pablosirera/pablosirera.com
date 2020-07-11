<template>
  <span>{{ tag }}</span>
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
}
</script>
