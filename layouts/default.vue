<template>
  <div class="main-container container min-h-screen">
    <Sidebar class="sidebar" />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/ui/Sidebar.vue'

export default {
  components: {
    Sidebar,
  },
}
</script>

<style>
.main-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
