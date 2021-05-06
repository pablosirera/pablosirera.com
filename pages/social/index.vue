<template>
  <div class="flex flex-col items-center">
    <nuxt-link to="/" class="items-center flex flex-col">
      <Logo />
      <span>pablosirera.com</span>
    </nuxt-link>
    <section class="mt-6 flex flex-col w-full text-center max-w-sm">
      <a
        v-for="(item, index) in items"
        :key="index"
        class="w-full bg-primary my-3 py-3 px-6 rounded cursor-pointer hover:bg-green-main-800"
        @click="goTo(item)"
      >
        {{ item.name }}
      </a>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'social',
  async asyncData({ $content }) {
    const post = await $content('blog')
      .only(['title', 'path'])
      .sortBy('date', 'desc')
      .limit(1)
      .fetch()

    return { post }
  },
  computed: {
    items() {
      return [
        {
          name: 'Únete al servidor de discord ✌️',
          link: 'https://discord.gg/DsvmWs8Ban',
          isExternal: true,
        },
        {
          name: '👨🏼‍💻 Pásate por mi nuevo sitio web',
          link: '/',
        },
        {
          name: 'Subscríbete a mi canal de Youtube 📹',
          link: 'https://www.youtube.com/user/psirera4?sub_confirmation=1',
          isExternal: true,
        },
        {
          name: `Último artículo✏️: ${this.post[0].title}`,
          link: this.post[0].path,
        },
        {
          name: '🎙 Pásate por mis directos en twitch',
          link: 'https://twitch.tv/pablosirera',
          isExternal: true,
        },
        {
          name: '🐤 Háblame por Twitter',
          link: 'https://twitter.com/pablosirera',
          isExternal: true,
        },
        {
          name: '📸 Sígueme en Instagram',
          link: 'https://instagram.com/pablodeveloper',
          isExternal: true,
        },
        {
          name: '¿Me invitas a un café ☕️ ?',
          link: 'https://www.buymeacoffee.com/pablosirera',
          isExternal: true,
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
