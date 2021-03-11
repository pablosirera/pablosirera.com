<template>
  <section class="text-center flex flex-col justify-center items-center">
    <h2>¿En qué te puedo ayudar?</h2>
    <!-- TODO: create component with form -->
    <form
      ref="contactForm"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="text-left w-full md:w-8/12 mt-5"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <!-- TODO: crear un baseinput con el label e input -->
      <p class="flex flex-col mt-2">
        <label class="font-bold mb-1">Nombre</label>
        <input
          v-model="form.name"
          type="text"
          name="name"
          class="border rounded py-1 px-2 dark:bg-gray-main-750"
        />
      </p>
      <p class="flex flex-col mt-2">
        <label class="font-bold mb-1">Email</label>
        <input
          v-model="form.email"
          type="email"
          name="email"
          class="border rounded py-1 px-2 dark:bg-gray-main-750"
        />
      </p>
      <p class="flex flex-col mt-2">
        <label class="font-bold mb-1">Mensaje</label>
        <textarea
          v-model="form.message"
          rows="5"
          name="message"
          class="border rounded py-1 px-2 dark:bg-gray-main-750"
        />
      </p>
      <p class="mt-6">
        <BaseButton type="submit">Enviar mensaje</BaseButton>
      </p>
    </form>
  </section>
</template>

<script>
import BaseButton from '~/components/ui/BaseButton.vue'

export default {
  name: 'ContactMe',
  components: {
    BaseButton,
  },
  data() {
    return {
      form: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    async handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }

      try {
        await this.$axios.$post(
          'https://www.pablosirera.com/',
          this.encode({
            'form-name': 'contact',
            ...this.form,
          }),
          axiosConfig
        )
        console.log('tuto benne')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
