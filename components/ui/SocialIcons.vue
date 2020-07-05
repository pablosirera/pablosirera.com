<template>
  <div class="flex items-center">
    <a
      v-for="(social, index) in socials"
      :key="index"
      :href="social.href"
      class="mr-3"
      target="_blank"
      :aria-label="social.ariaLabel"
    >
      <img class="w-8" :src="social.src" :alt="social.alt" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  data: () => ({
    // TODO: translate this texts and add alt
    socials: [
      {
        href: 'https://twitter.com/pablosirera',
        src: '/images/icons/twitter.svg',
        alt: '',
        ariaLabel: 'Sígueme en twitter',
      },
      {
        href: 'https://twitch.tv/pablosirera',
        src: '/images/icons/twitch.svg',
        alt: '',
        ariaLabel: 'Sígueme en twitch',
      },
      {
        href: 'https://instagram.com/pablodeveloper',
        src: '/images/icons/instagram.svg',
        alt: '',
        ariaLabel: 'Sígueme en instagram',
      },
      {
        href: 'https://youtube.com/user/psirera4',
        src: '/images/icons/youtube.svg',
        alt: '',
        ariaLabel: 'Subscríbete a mi canal de youtube',
      },
    ],
  }),
}
</script>
