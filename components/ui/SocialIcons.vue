<template>
  <div class="flex items-center justify-center md:justify-start">
    <a
      v-for="(social, index) in socials"
      :key="index"
      :href="social.href"
      class="mr-3 w-6 h-6"
      target="_blank"
      :aria-label="social.ariaLabel"
    >
      <component :is="`social-${social.name}`" class="social-icon" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  components: {
    SocialTwitter: () => import('@/assets/icons/twitter.svg?inline'),
    SocialInstagram: () => import('@/assets/icons/instagram.svg?inline'),
    SocialTwitch: () => import('@/assets/icons/twitch.svg?inline'),
    SocialYoutube: () => import('@/assets/icons/youtube.svg?inline'),
    SocialLinkedin: () => import('@/assets/icons/linkedin.svg?inline'),
    SocialGithub: () => import('@/assets/icons/github.svg?inline'),
  },
  data: () => ({
    // TODO: translate this texts and add alt
    socials: [
      {
        href: 'https://twitter.com/pablosirera',
        name: 'twitter',
        ariaLabel: 'Sígueme en twitter',
      },
      {
        href: 'https://instagram.com/pablodeveloper',
        name: 'instagram',
        ariaLabel: 'Sígueme en instagram',
      },
      {
        href: 'https://twitch.tv/pablosirera',
        name: 'twitch',
        ariaLabel: 'Sígueme en twitch',
      },
      {
        href: 'https://youtube.com/psirera4?sub_confirmation=1',
        name: 'youtube',
        ariaLabel: 'Subscríbete a mi canal de youtube',
      },
      {
        href: 'https://www.linkedin.com/in/pablosireramata',
        name: 'linkedin',
        ariaLabel: 'Sígueme en linkedin',
      },
      {
        href: 'https://github.com/pablosirera',
        name: 'github',
        ariaLabel: 'Sígueme en github',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.social-icon {
  color: var(--icons-color);

  @apply w-6 h-6;
}
</style>
