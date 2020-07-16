<template>
  <div class="flex items-center justify-center md:justify-start">
    <a
      v-for="(social, index) in socials"
      :key="index"
      :href="social.href"
      class="mr-3"
      target="_blank"
      :aria-label="social.ariaLabel"
    >
      <img class="w-6" :src="social.src" :alt="social.alt" />
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
        href: 'https://instagram.com/pablodeveloper',
        src: '/images/icons/instagram.svg',
        alt: '',
        ariaLabel: 'Sígueme en instagram',
      },
      {
        href: 'https://twitch.tv/pablosirera',
        src: '/images/icons/twitch.svg',
        alt: '',
        ariaLabel: 'Sígueme en twitch',
      },
      {
        href: 'https://youtube.com/user/psirera4',
        src: '/images/icons/youtube.svg',
        alt: '',
        ariaLabel: 'Subscríbete a mi canal de youtube',
      },
      {
        href: 'https://www.linkedin.com/in/pablosireramata',
        src: '/images/icons/linkedin.svg',
        alt: '',
        ariaLabel: 'Sígueme en linkedin',
      },
      {
        href: 'https://github.com/pablosirera',
        src: '/images/icons/github.svg',
        alt: '',
        ariaLabel: 'Sígueme en github',
      },
    ],
  }),
}
</script>
