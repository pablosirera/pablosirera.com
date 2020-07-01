<template>
  <section>
    <h1 class="title">{{ $t('projects.title') }}</h1>
    <section class="grid col-gap-5 grid-cols-1 pt-8 md:grid-cols-2">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </section>
  </section>
</template>

<script>
import { PROJECTS } from '@/constants/projects'

export default {
  computed: {
    projects() {
      return PROJECTS
    },
  },
}
</script>
