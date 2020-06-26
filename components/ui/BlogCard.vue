<template>
  <div class="post" @click="selectPost">
    <h1 class="font-semibold text-2xl text-blue-main-700">
      {{ title }}
    </h1>
    <div class="bottom-post">
      <span class="date">{{ getDate(date) }}</span>
      <span class="clock-icon flex items-center">
        <fa icon="clock" class="icon mr-1" />
        {{ getTimeToReadText(timeToRead) }}
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
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
      ]
      // TODO: integrate translations
      // return [
      //   this.$t('months.january'),
      //   this.$t('months.february'),
      //   this.$t('months.march'),
      //   this.$t('months.april'),
      //   this.$t('months.may'),
      //   this.$t('months.june'),
      //   this.$t('months.july'),
      //   this.$t('months.august'),
      //   this.$t('months.september'),
      //   this.$t('months.october'),
      //   this.$t('months.november'),
      //   this.$t('months.december'),
      // ]
    },
  },
  methods: {
    getTimeToReadText(timeToRead) {
      // TODO: integrate translations
      // const keyTranslateText = timeToRead > 1 ? 'minutes' : 'minute'
      // const translateText = this.$i18n.t(`posts.${keyTranslateText}`)
      return `${timeToRead} minutos`
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

  @apply flex flex-col cursor-pointer mb-4;
}

.post:hover {
  box-shadow: 4px 10px 20px #dadada80;
  transform: translate3d(0, -3px, 0);
}

.bottom-post {
  padding-top: 5px;

  @apply flex items-center opacity-50;

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
