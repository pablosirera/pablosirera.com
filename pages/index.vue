<template>
  <section>
    <section class="pb-10 items-center md:grid md:grid-cols-2 md:gap-4">
      <div>
        <!-- TODO: translate and change this text -->
        <h1 class="text-3xl font-semibold">
          Hola <span class="salute">👋</span>
        </h1>
        <div class="h-2 w-24 bg-primary my-3 rounded" />
        <p>
          Soy Senior Frontend Developer 👨🏼‍💻 actualmente enfocado al mundo del
          desarrollo web con Vue, Nuxt, JavaScript y Jest, entre otros 💚.
        </p>
        <br />
        <p>
          Mi actual objetivo es que podáis aprender fácil 🤓 y mejorar día a día
          📈 en el desarrollo frontend a través de mis videos, directos y
          artículos.
        </p>
        <br />
        <p>
          Si queréis saber más sobre mí, puedes hacer un tour por esta web o
          seguirme por las redes sociales que dejo aquí bajo 👇👇
        </p>
        <div class="flex justify-center my-4">
          <nuxt-link to="/blog" class="blog-button hover:opacity-75">
            Blog
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="about-button hover:bg-primary hover:text-white"
          >
            Sobre mí
          </nuxt-link>
        </div>
        <div class="mt-4 mb-8 flex justify-center md:mb-0">
          <SocialIcons />
        </div>
      </div>
      <!-- TODO: translate this text -->
      <div class="image-wrapper">
        <img
          class="image"
          src="https://res.cloudinary.com/de5xzoviz/image/upload/q_60/v1597688488/setup-desarrollador-web.jpg"
          alt="setup desarrollador web valencia"
          loading="lazy"
        />
      </div>
    </section>
    <section class="mt-12 md:grid md:grid-cols-2 md:gap-4">
      <YoutubeVideos :videos="videos" />
      <ListPosts :posts="posts" />
    </section>
    <section class="mt-12 text-center">
      Si te gusta mi contenido y quieres apoyarme 💪 puedes invitarme a un ☕️ o
      subscribirte gratis con Amazon Prime en mi canal de
      <TheLink url="https://twitch.tv/pablosirera">Twitch</TheLink>.
      <div class="flex justify-center mt-4">
        <CoffeeWidget />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  async asyncData({ $content }) {
    const posts = await $content('blog')
      .only(['title', 'slug', 'path', 'image'])
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()

    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUl41m8HBifhzM6Dh1V04wqA&maxResults=3&key=${process.env.YOUTUBE_API_KEY}`
    )
    const jsonVideos = await videosResponse.json()
    const videos = jsonVideos.items

    return {
      posts,
      videos,
    }
  },
}
</script>

<style scoped lang="scss">
.blog-button {
  @apply bg-primary px-4 py-2 rounded-lg text-xl font-bold text-white mx-2;
}

.about-button {
  @apply border border-primary px-4 py-2 rounded-lg text-xl font-bold mx-2;
}

.image-wrapper {
  @apply rounded flex justify-center;

  .image {
    @apply rounded w-full h-full;
  }
}

.salute {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}
</style>
