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
      pageTitle: 'Cursos sobre desarrollo web gratis - Pablo Sirera',
      pageDesc:
        'Comparto mis conocimientos sobre desarrollo web en diferentes cursos 100% gratis. Cursos sobre Vue, Nuxt, Storybook, Firebase, Tailwindcss y mucho más',
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pageDesc,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.pageTitle,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.pageDesc,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://pablosirera.com/courses',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.pageTitle,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.pageDesc,
        },
      ],
    }
  },
}
</script>
