<template>
  <article class="mb-20 w-full max-w-3xl mx-auto">
    <h1 class="text-5xl mb-6 font-bold course-title">{{ courseTitle }}</h1>

    <blockquote class="course-description mb-10">
      <p>{{ courseDescription }}</p>
    </blockquote>

    <h2 class="text-4xl">📹 Primer paso</h2>
    <p class="text-xl mb-6">
      Suscríbete a mi canal de
      <the-link url="https://youtube.com/pablosirera?sub_confirmation=1">
        Youtube
      </the-link>
      y <the-link url="https://twitch.tv/pablosirera">Twitch</the-link> para no
      perderte ningún video.
    </p>
    <p class="flex justify-center mb-10">
      <YoutubeSubscribeButton
        identifier="my-subscribe-button"
        :channelid="channelId"
        layout="full"
        theme="dark"
      />
    </p>

    <h2 class="text-4xl">🍿 Segundo paso</h2>
    <p class="mb-10 text-xl">
      Disfruta de los {{ totalChapters }} videos del curso y cualquier feedback
      será bienvenido ✌️.
    </p>

    <YoutubeVideos
      v-if="videos.length"
      img-size="big"
      :has-title="false"
      :videos="videos"
      :is-responsive="true"
    />
  </article>
</template>

<script>
import { CHANNEL_ID, COURSES } from '~/constants/courses'

export default {
  name: 'CourseDetail',
  async asyncData({ params }) {
    const playlistId = COURSES[params.name].playlistId
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=30&key=${process.env.YOUTUBE_API_KEY}`
    )
    const jsonVideos = await videosResponse.json()
    const videos = jsonVideos.items

    return {
      videos,
    }
  },
  data() {
    return {
      channelId: CHANNEL_ID,
    }
  },
  computed: {
    courseName() {
      return this.$route.params.name
    },
    courseTitle() {
      return COURSES[this.$route.params.name].title
    },
    courseDescription() {
      return COURSES[this.$route.params.name].description
    },
    totalChapters() {
      return this.videos.length
    },
    courseImage() {
      return COURSES[this.$route.params.name].image
    },
  },
  head() {
    return {
      title: this.courseTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.courseDescription,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.courseTitle,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.courseDescription,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://pablosirera.com${this.$route.path}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.courseTitle,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.courseDescription,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.courseImage,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image',
          content: this.courseImage,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: `${this.courseTitle} | Pablo Sirera - Desarrollador Web`,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.course-title {
  color: var(--title-color);
}
.course-description {
  border-left: 4px solid theme('colors.gray-main.400');
  padding: 8px 12px;
}
</style>
