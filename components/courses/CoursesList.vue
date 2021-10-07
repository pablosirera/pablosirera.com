<template>
  <section>
    <ul class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <nuxt-link
        v-for="(course, index) in courses"
        :key="index"
        class="cursor-pointer"
        tag="li"
        :to="course.route"
      >
        <CoursesListItem :item="course" />
      </nuxt-link>
    </ul>
  </section>
</template>

<script>
import CoursesListItem from '~/components/courses/CoursesListItem.vue'

export default {
  name: 'CoursesList',
  components: {
    CoursesListItem,
  },
  props: {
    courses: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
