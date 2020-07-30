<template>
  <section>
    <section class="pb-10 items-center md:grid md:grid-cols-2">
      <div>
        <!-- TODO: translate and change this text -->
        <h1 class="text-3xl font-semibold">Hola 👋, soy Pablo Sirera</h1>
        <div class="h-2 w-24 bg-primary my-3 rounded" />
        <p>
          Soy Senior Frontend y actualmente estoy enfocado al mundo del
          desarrollo web con Vue, Nuxt, JavaScript y Jest, entre otros. Además
          también he hecho proyectos con Ionic, Angular, React, TypeScript.
        </p>
        <br />
        <p>
          En mis ratos libres creo proyectos open source (los podéis encontrar
          en mi cuenta de github) y comparto conocimiento en twitch y youtube.
          De vez en cuando también escribo artículos en mi blog.
        </p>
        <p>
          Si quieres saber más sobre mi y mi trabajo, puedes seguirme por las
          redes que dejo 👇👇
        </p>
        <!-- TODO: add social links -->
        <div class="mt-4 mb-8 md:mb-0">
          <SocialIcons />
        </div>
      </div>
      <!-- TODO: translate this text -->
      <div class="image-wrapper">
        <img
          class="image"
          src="https://res.cloudinary.com/de5xzoviz/image/upload/v1596104201/desarrollador-web-setup.jpg"
          alt="desarrollador web valencia"
          loading="lazy"
        />
      </div>
    </section>
    <section class="md:grid md:grid-cols-2 md:gap-8">
      <YoutubeVideos />
      <ListPosts :posts="posts" />
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

    return {
      posts,
    }
  },
}
</script>

<style scoped lang="scss">
.image-wrapper {
  @apply rounded flex justify-center;

  .image {
    width: 385px;
    height: 510px;
    box-shadow: 0.5rem 0.5rem 0 theme('colors.primary');

    @apply rounded;
  }
}
</style>
