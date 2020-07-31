<template>
  <!-- TODO: improve this text -->
  <section>
    Soy Pablo Sirera, desarrollador web viviendo en Valencia. Me interesa todo
    aquello relacionado con el desarrollo web y móvil. Me gusta estar siempre en
    constante aprendizaje y poner en práctica los conocimientos adquiridos. En
    mi cuenta personal de
    <TheLink url="https://github.com/pablosirera">GitHub</TheLink>
    he creado un repositorio con un
    <TheLink url="https://github.com/pablosirera/My-Learning-Tracker"
      >Learning Tracker</TheLink
    >
    con información acerca de mi experiencia y mis conocimientos tecnológicos.
    También puedes seguirme en mi cuenta de
    <TheLink url="https://www.instagram.com/pablodeveloper">Instagram</TheLink>
    y en mi cuenta de
    <TheLink url="https://twitter.com/pablosirera">Twitter</TheLink>

    <section class="mt-6">
      <h2 class="secondary-title pb-3">Experiencia laboral 👨🏼‍💻</h2>
      <Timeline
        message-when-no-items="No hay datos"
        :timeline-items="timelineItems"
        :date-locale="$i18n.locale"
        order="desc"
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
export default {
  name: 'About',
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
