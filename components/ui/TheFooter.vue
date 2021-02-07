<template>
  <footer class="container text-center py-16 px-3">
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
