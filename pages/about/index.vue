<template>
  <!-- TODO: improve this text -->
  <section>
    <p>
      ¡Hola 👋! soy <b>Pablo Sirera</b>, desarrollador web viviendo en Valencia.
    </p>
    <br />
    <p>
      Personalmente me considero una persona que no le gusta estarse quieta,
      intento estar siempre actualizado (no es tarea fácil 😅). Cómo me gusta
      tanto estar actualizado y seguir formándome decidí intentar formar yo con
      los conocimientos que tengo actualmente e intento actualizar día a día.
    </p>
    <br />
    <p>
      De vez en cuando escribo artículos en mi
      <TheLink :is-local-route="true" url="/blog">blog</TheLink>, hago directos
      en
      <TheLink url="https://twitch.tv/pablosirera">Twitch</TheLink>
      aprendiendo en vivo o subo vídeos a
      <TheLink url="https://youtube.com/psirera4?sub_confirmation=1">
        Youtube </TheLink
      >.
    </p>
    <br />
    <p>
      Considero que es muy importante que compartamos el conocimiento adquirido
      para que no quede en el olvido y así podamos ayudar 🤝 a los demás.
    </p>
    <br />
    <p>
      En mi cuenta personal de
      <TheLink url="https://github.com/pablosirera">GitHub</TheLink>
      podéis encontrar todo mi trabajo personal que realizo en open source.
      También podéis seguirme en mi cuenta de
      <TheLink url="https://www.instagram.com/pablodeveloper">
        Instagram
      </TheLink>
      en la que suelo subir fotos bien postureras 🤳 o en mi cuenta de
      <TheLink url="https://twitter.com/pablosirera">Twitter</TheLink>
    </p>

    <section class="mt-6">
      <h2 class="secondary-title pb-3">Experiencia laboral 👨🏼‍💻</h2>
      <Timeline
        message-when-no-items="No hay datos"
        :timeline-items="timelineItems"
        :date-locale="$i18n.locale"
        order="desc"
        class="timeline"
      />
    </section>

    <section class="mt-6 mb-6">
      <h2 class="secondary-title pb-3">
        Skills Tecnológicos & Herramientas 🔧
      </h2>
      <TechSkills />
    </section>
  </section>
</template>

<script>
import TechSkills from '@/components/about/TechSkills.vue'

export default {
  name: 'About',
  components: {
    TechSkills,
  },
  computed: {
    timelineItems() {
      return [
        {
          from: new Date(2019, 9),
          title: 'Deka Software Labs',
          description: `<b class="font-bold">Senior frontend</b> desarrollando aplicaciones RWD (Responsive Web Design) con VueJS, Nuxt, HTML, SASS.`,
        },
        {
          from: new Date(2017, 2),
          title: 'Sopra Steria',
          description: `<b class="font-bold">Desarrollador frontend</b> tanto de aplicaciones para web como para móvil con VueJS, Angular, HTML, CSS, SASS, Ionic.`,
        },
        {
          from: new Date(2015, 5),
          title: 'Eco Bon Profit',
          description: `<b class="font-bold">Gestor e-commerce</b> en una empresa de la industria cárnica.`,
        },
      ]
    },
  },
  head() {
    return {
      title: `Sobre mi | ${process.env.APP_TITLE}`,
      meta: [
        // TODO: improve descriptions
        {
          hid: 'description',
          name: 'description',
          content: process.env.APP_DESC,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Sobre mi | ${process.env.APP_TITLE}`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: process.env.APP_DESC,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Sobre mi | ${process.env.APP_TITLE}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: process.env.APP_DESC,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.timeline {
  color: var(--color);
}
</style>
