<template>
  <div class="post" @click="selectPost">
    <h1 class="third-title">
      {{ title }}
    </h1>
    <div class="bottom-post">
      <span class="date">🗓 {{ getDate(date) }}</span>
      <span class="clock-icon flex items-center">
        ⏱ {{ getTimeToReadText(timeToRead) }}
      </span>
    </div>
    <p class="pt-2">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    timeToRead: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  computed: {
    monthNames() {
      return [
        this.$t('months.january'),
        this.$t('months.february'),
        this.$t('months.march'),
        this.$t('months.april'),
        this.$t('months.may'),
        this.$t('months.june'),
        this.$t('months.july'),
        this.$t('months.august'),
        this.$t('months.september'),
        this.$t('months.october'),
        this.$t('months.november'),
        this.$t('months.december'),
      ]
    },
  },
  methods: {
    getTimeToReadText(timeToRead) {
      const keyTranslateText = timeToRead > 1 ? 2 : 1
      const translateText = this.$i18n.tc('posts.minute', keyTranslateText)
      return `${timeToRead} ${translateText}`
    },
    getDate(date) {
      const newDate = new Date(date)
      const year = newDate.getFullYear()
      const month = this.monthNames[newDate.getMonth()]
      return `${month}, ${year}`
    },
    selectPost() {
      this.$emit('select')
    },
  },
}
</script>

<style scoped lang="scss">
$mobile: var(--mobile);

.post {
  transition: box-shadow 0.5s ease, transform 0.5s ease;
  padding: 10px;

  @apply flex flex-col cursor-pointer mb-4 border border-gray-main-300 rounded-md;
}

.post:hover {
  box-shadow: 4px 10px 20px var(--blog-card-shadow);
  transform: translate3d(0, -3px, 0);
}

.bottom-post {
  padding-top: 5px;

  @apply flex items-center;

  & span:first-child {
    @apply pr-4;
  }
}

@media (max-width: $mobile) {
  .post:hover {
    box-shadow: unset;
  }
}
</style>
