<template>
  <form
    ref="contactForm"
    name="contact"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="text-left w-full md:w-8/12 mt-5"
    @submit.prevent="handleSubmit"
  >
    <p class="hidden">
      <label>
        Don’t fill this out if you’re human:
        <input name="bot-field" />
      </label>
    </p>
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
</template>

<script>
import BaseButton from '~/components/ui/BaseButton.vue'

export default {
  name: 'ContactForm',
  components: {
    BaseButton,
  },
  data() {
    return {
      form: {},
    }
  },
  methods: {
    handleSubmit(event) {
      this.$emit('submit-form', {
        data: this.form,
        formName: event.target.getAttribute('name'),
      })
      this.form = {}
    },
  },
}
</script>
