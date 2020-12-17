<template>
  <section class="text-center flex flex-col justify-center items-center">
    <h2>¿En qué te puedo ayudar?</h2>
    <!-- TODO: create component with form -->
    <form name="contact" netlify class="text-left w-6/12 mt-5">
      <p class="flex flex-col mt-2">
        <label class="font-bold mb-1">Nombre</label>
        <input
          type="text"
          name="name"
          class="border rounded py-1 px-2 dark:bg-gray-main-750"
        />
      </p>
      <p class="flex flex-col mt-2">
        <label class="font-bold mb-1">Email</label>
        <input
          type="email"
          name="email"
          class="border rounded py-1 px-2 dark:bg-gray-main-750"
        />
      </p>
      <p class="flex flex-col mt-2">
        <label class="font-bold mb-1">Mensaje</label>
        <textarea
          rows="5"
          name="message"
          class="border rounded py-1 px-2 dark:bg-gray-main-750"
        />
      </p>
      <p class="mt-6">
        <BaseButton>Enviar mensaje</BaseButton>
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
}
</script>
