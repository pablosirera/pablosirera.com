<template>
  <picture>
    <source
      type="image/avif"
      srcset="
        https://res.cloudinary.com/de5xzoviz/image/upload/c_scale,w_640,f_avif/v1592684920/pablosirera.avif
      "
    >
    <source
      type="image/webp"
      srcset="
        https://res.cloudinary.com/de5xzoviz/image/upload/c_scale,q_65,w_640/v1592684920/pablosirera.webp
      "
    >
    <img
      class="w-20 h-20 rounded-full nuxt-logo border-6 border-primary"
      src="https://res.cloudinary.com/de5xzoviz/image/upload/c_scale,q_50,w_640/v1592684920/pablosirera.jpg"
      :alt="$t('general.altLogo')"
      loading="lazy"
    >
  </picture>
</template>

<style>
.nuxt-logo {
  animation: 2s appear;
}
</style>
