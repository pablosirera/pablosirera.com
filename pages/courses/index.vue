<template>
  <section>
    <h1 class="title text-center mb-4">Cursos</h1>
    <CoursesList :courses="courses" />
  </section>
</template>

<script>
import { COURSES } from '~/constants/courses'

export default {
  name: 'CoursesPage',
  data() {
    return {
      courses: COURSES,
    }
  },
}
</script>
