<template>
  <div class="rounded-2xl course-item">
    <img :src="item.image" :alt="item.alt" class="course-item-img" />
    <h2 class="text-xl p-4">{{ item.title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'CoursesListItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.course-item {
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  background-color: var(--bg-card);
  color: var(--color);

  &-img {
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    object-fit: cover;
    max-height: calc(max(10rem, 30vh));
    aspect-ratio: 4/3;
  }
}
</style>
