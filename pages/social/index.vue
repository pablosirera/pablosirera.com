<template>
  <div class="flex flex-col items-center">
    <nuxt-link to="/" class="items-center flex flex-col">
      <Logo />
      <span>pablosirera.com</span>
      <SocialIcons class="mt-2" />
    </nuxt-link>
    <section class="my-8">
      <youtube-embed-lite
        class="yt-video rounded"
        :vid="videoId"
      ></youtube-embed-lite>
    </section>
    <section class="flex flex-col w-full text-center max-w-sm">
      <a
        v-for="(item, index) in items"
        :key="index"
        class="w-full bg-primary my-3 py-3 px-6 rounded cursor-pointer border hover:border-green-main-800 dark:bg-green-main-800"
        @click="goTo(item)"
      >
        {{ item.name }}
      </a>
    </section>
    <section class="mt-4">
      <nuxt-link
        :to="post.path"
        tag="div"
        class="flex flex-col items-center cursor-pointer"
      >
        <img
          class="w-64 rounded-t"
          :src="`${imageUrl}${post.image}`"
          :alt="post.title"
        />
        <p
          class="bg-primary relative px-3 py-2 w-64 rounded-b dark:bg-green-800"
        >
          {{ post.title }}
        </p>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import SocialIcons from '~/components/ui/SocialIcons.vue'
import { COMMON_POST_IMAGE_URL } from '~/constants/images'

export default {
  components: { SocialIcons },
  layout: 'social',
  async asyncData({ $content }) {
    const post = await $content('blog')
      .only(['title', 'path', 'image'])
      .sortBy('date', 'desc')
      .limit(1)
      .fetch()

    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUl41m8HBifhzM6Dh1V04wqA&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`,
    )
    const jsonVideos = await videosResponse.json()
    const videos = jsonVideos.items

    return { post: post[0], video: videos[0] }
  },
  data() {
    return {
      imageUrl: COMMON_POST_IMAGE_URL,
    }
  },
  computed: {
    videoId() {
      return this.video.snippet.resourceId.videoId
    },
    items() {
      return [
        {
          name: 'Subscríbete a mi canal de Youtube 📹',
          link: 'https://www.youtube.com/user/psirera4?sub_confirmation=1',
          isExternal: true,
        },
        {
          name: 'Únete al servidor de discord ✌️',
          link: 'https://discord.gg/DsvmWs8Ban',
          isExternal: true,
        },
        {
          name: 'Aprende gratis con mis cursos',
          link: 'https://pablosirera.com/cursos',
          isExternal: true,
        },
        {
          name: '🎙 Sígueme en los directos de twitch',
          link: 'https://twitch.tv/pablosirera',
          isExternal: true,
        },
        {
          name: '¿Me invitas a un café ☕️ ?',
          link: 'https://www.buymeacoffee.com/pablosirera',
          isExternal: true,
        },
        {
          name: '👨🏼‍💻 Visita mi sitio web',
          link: '/',
        },
      ]
    },
  },
  methods: {
    goTo(item) {
      if (item.isExternal) {
        window.open(item.link, '_blank')
      } else {
        this.$router.push({ path: item.link })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.yt-video {
  // TODO: tailwind tiene la clase w-80 pero no funciona (quizás por la versión)
  width: 24rem;
  & .thumb {
    border-radius: 5.25rem;
  }
}
</style>
