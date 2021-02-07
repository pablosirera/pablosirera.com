<template>
  <div class="flex justify-center flex-col items-center mt-8">
    <h2 class="pb-4 text-lg">¿Te gusta el contenido?</h2>
    <div class="flex justify-around flex-wrap w-full">
      <a
        target="_blank"
        :href="`https://twitter.com/intent/tweet?&text=He leído tu artículo 🤩&url=https://pablosirera.com/blog/${articleName}&screen_name=pablosirera`"
        class="twitter-button"
      >
        Comparte el artículo
        <IconTwitter class="w-8 h-8" />
      </a>

      <a href="https://www.buymeacoffee.com/pablosirera" target="_blank">
        <img
          src="https://img.buymeacoffee.com/button-api/?text=Invítame a un café&emoji=&slug=pablosirera&button_colour=81a78f&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
        />
      </a>
    </div>
  </div>
</template>

<script>
import IconTwitter from '~/components/icons/IconTwitter.vue'

export default {
  name: 'FooterBlog',
  components: {
    IconTwitter,
  },
  props: {
    articleName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.twitter-button {
  @apply flex justify-between items-center bg-primary rounded-xl p-4 font-bold text-lg text-black;

  height: 50px;
  width: 250px;
}
</style>
