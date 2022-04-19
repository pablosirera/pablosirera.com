<template>
  <section>
    <h1 class="title text-center">{{ $t('projects.title') }}</h1>
    <section class="grid col-gap-5 grid-cols-1 pt-8 md:grid-cols-2">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </section>
    <p class="text-center">
      {{ $t('projects.showMore') }}
      <TheLink url="https://github.com/pablosirera">
        {{ $t('projects.githubProfile') }}
      </TheLink>
    </p>
  </section>
</template>

<script>
import { PROJECTS } from '@/constants/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'

export default {
  name: 'ProjectsPage',
  components: {
    ProjectCard,
  },
  computed: {
    projects() {
      return PROJECTS
    },
  },
  head() {
    return {
      title: `Mis Proyectos | ${process.env.APP_TITLE}`,
      meta: [
        // TODO: improve descriptions
        {
          hid: 'description',
          name: 'description',
          content: process.env.APP_DESC,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Mis Proyectos | ${process.env.APP_TITLE}`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: process.env.APP_DESC,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Mis Proyectos | ${process.env.APP_TITLE}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: process.env.APP_DESC,
        },
      ],
    }
  },
}
</script>
