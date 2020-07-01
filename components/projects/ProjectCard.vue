<template>
  <div class="project-card">
    <div>
      <div class="wrapper-title">
        <img src="@/assets/icons/repo.svg" :alt="$t(project.description)" />
        <h1 class="title">
          <a :href="project.url" class="title-link">
            {{ project.name }}
          </a>
        </h1>
      </div>
      <p class="description">{{ $t(project.description) }}</p>
    </div>
    <p class="info">
      <span v-if="project.language" class="language mr-4">
        <span class="dot-language" :class="dotLanguageClasses" />
        <span class="language-text">{{ project.language }}</span>
      </span>
      <a class="link" :href="`${project.url}/stargazers`">
        <img src="@/assets/icons/star.svg" :alt="$t(project.description)" />
        {{ project.stars }}
      </a>
      <a class="link" :href="`${project.url}/network/members`">
        <img
          src="@/assets/icons/repo-forked.svg"
          :alt="$t(project.description)"
        />
        {{ project.forks }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    dotLanguageClasses() {
      return {
        'dot-language-vue': this.project.language === 'Vue',
        'dot-language-js': this.project.language === 'JavaScript',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.project-card {
  @apply flex flex-col justify-between text-sm border border-gray-main-200 p-4 mb-4 rounded-sm;

  .wrapper-title {
    @apply flex;

    .title {
      @apply text-sm ml-2;

      &-link {
        text-decoration: none;

        @apply text-blue-main-600 font-semibold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .description {
    @apply mt-2 mb-4 text-xs;
  }

  .info {
    @apply text-xs flex;

    .dot-language {
      top: 1px;
      border-radius: 50%;
      margin-right: 3px;

      @apply relative inline-block w-3 h-3;

      &-vue {
        @apply bg-blue-main-800;
      }

      &-js {
        @apply bg-yellow-main-500;
      }
    }

    .link {
      text-decoration: none;
      margin-right: 24px;

      @apply text-gray-main-600 flex items-start;

      &:hover {
        text-decoration: underline;

        @apply text-blue-main-600;
      }

      img {
        padding-right: 3px;
      }
    }
  }
}
</style>
