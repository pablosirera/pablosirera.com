<template>
  <div class="project-card" :class="cardClasses">
    <div>
      <div class="wrapper-title">
        <RepoIcon class="icon" />
        <h1 class="title">
          <a :href="project.url" class="title-link" target="_blank">
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
      <a class="link" target="_blank" :href="`${project.url}/stargazers`">
        <StarIcon class="icon mr-1" /> {{ project.stars }}
      </a>
      <a class="link" target="_blank" :href="`${project.url}/network/members`">
        <ForkedIcon class="icon mr-1" /> {{ project.forks }}
      </a>
    </p>
  </div>
</template>

<script>
import RepoIcon from '@/assets/icons/repo.svg?inline'
import StarIcon from '@/assets/icons/star.svg?inline'
import ForkedIcon from '@/assets/icons/repo-forked.svg?inline'

export default {
  name: 'ProjectCard',
  components: {
    RepoIcon,
    StarIcon,
    ForkedIcon,
  },
  props: {
    project: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    cardClasses() {
      return this.$colorMode.preference
    },
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
  @apply flex flex-col justify-between text-sm border border-gray-main-200 p-4 mb-4 rounded-md;

  .wrapper-title {
    @apply flex items-center;

    .title {
      @apply text-sm ml-2 font-semibold;

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

      @apply relative inline-block w-3 h-3 mr-1;

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

      @apply text-gray-main-600 flex items-center;

      &:hover {
        text-decoration: underline;

        @apply text-blue-main-600;
      }

      img {
        padding-right: 3px;
      }
    }
  }

  &.dark {
    background-color: #a0aec02b;

    .icon {
      fill: var(--color);
    }

    .title-link {
      color: var(--color);
    }

    .info .link {
      color: var(--color);
    }
  }
}
</style>
