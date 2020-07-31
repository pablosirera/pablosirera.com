<template>
  <div class="flex items-center flex-col">
    <div class="flex justify-center flex-wrap">
      <span
        v-for="(skill, index) in skills"
        :key="index"
        class="p-4 flex flex-col items-center"
      >
        <component :is="skill.component" class="w-12 h-12" />
        {{ skill.name }}
      </span>
    </div>
    <h4 class="text-xl font-semibold">Otros</h4>
    <p class="text-center">
      Vuex - Mobile First - Netlify - Prettier - Github - VS Code - Command Line
    </p>
  </div>
</template>

<script>
import { SKILLS } from '@/constants/skills'

export default {
  name: 'TechSkills',
  computed: {
    skills() {
      return SKILLS
    },
  },
}
</script>
