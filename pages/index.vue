<template>
  <section>
    <section class="pb-10 items-center md:grid md:grid-cols-2">
      <div>
        <!-- TODO: translate and change this text -->
        <h1 class="text-3xl font-semibold">¡Hola 👋! soy Pablo Sirera.</h1>
        <div class="h-2 w-24 bg-primary my-3 rounded" />
        <p>
          Soy Senior Frontend Developer actualmente enfocado al mundo del
          desarrollo web con Vue, Nuxt, JavaScript y Jest, entre otros.
        </p>
        <br />
        <p>
          Mi actual objetivo es que puedas aprender fácil y mejorar día a día en
          el desarrollo frontend.
        </p>
        <br />
        <p>
          Si quieres saber más sobre mí y sobre mi trabajo, puedes visitar mi
          blog, mi página sobre mí o seguirme por las redes sociales que dejo
          aquí bajo 👇👇
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
.blog-button {
  @apply bg-primary px-4 py-2 rounded-lg text-xl font-bold text-white mx-2;
}

.about-button {
  @apply border border-primary px-4 py-2 rounded-lg text-xl font-bold mx-2;
}

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
