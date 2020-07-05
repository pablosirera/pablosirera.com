<template>
  <section class="grid grid-cols-2 items-center">
    <div>
      <!-- TODO: translate and change this text -->
      <h1 class="text-3xl font-semibold">Hola 👋, soy Pablo Sirera</h1>
      <div class="divider h-2 w-24 bg-primary my-3" />
      <p>
        Soy Senior Frontend y actualmente estoy enfocado al mundo del desarrollo
        web con Vue, Nuxt, JavaScript y Jest, entre otros. Además también he
        hecho proyectos con Ionic, Angular, React, TypeScript.
      </p>
      <br />
      <p>
        En mis ratos libres creo proyectos open source (los podéis encontrar en
        mi cuenta de github) y comparto conocimiento en twitch y youtube. De vez
        en cuando también escribo artículos en mi blog.
      </p>
      <p>
        Si quieres saber más sobre mi y mi trabajo, puedes seguirme por las
        redes que dejo 👇👇
      </p>
      <!-- TODO: add social links -->
      <div class="mt-4">
        <SocialIcons />
      </div>
    </div>
    <!-- TODO: translate this text -->
    <div class="image-wrapper relative">
      <img
        class="image"
        src="/images/desarrollador-web-setup.jpg"
        alt="desarrollador web valencia"
      />
      <div class="bg-image absolute" />
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
}
</script>

<style scoped lang="scss">
$widthImage: 385px;
$heigthImage: 510px;

.image-wrapper {
  justify-self: center;

  .bg-image {
    width: $widthImage;
    height: $heigthImage;
    top: -20px;
    right: -20px;
    z-index: -1;

    @apply bg-primary;
  }

  .image {
    width: $widthImage;
    height: $heigthImage;
  }
}
</style>
