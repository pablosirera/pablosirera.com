<template>
  <footer class="text-center p-16">
    Hecho con mucho 💚 por
    <TheLink url="https://twitter.com/pablosirera">Pablo Sirera</TheLink> ©
    {{ year }}
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    year() {
      const date = new Date()
      return date.getFullYear()
    },
  },
}
</script>
