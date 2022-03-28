<template>
  <div class="home">
      <h1>Page d'accueil</h1>
      <div id="app">
        {{ info }}
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      info: null
    }  
  },
  mounted() {
    this.$axios.get(
      'https://jsonplaceholder.typicode.com/posts')
      .then(response => (this.info = response))
  }  
}
</script>

<style scoped>

h1 {
  color:rgb(70, 20, 20);
}
</style>
