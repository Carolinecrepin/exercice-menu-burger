<template>
  <div class="home">
      <h1>Page d'accueil</h1>
      <div id="app">
        <div class="cards">
          <b-card v-for="post in posts" :key="post"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
            <b-card-title>
              {{ post.title }}
            </b-card-title>
            <b-card-text>
              {{ post.body}}
            </b-card-text>
          </b-card>
        </div>
        <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        ></b-pagination>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      posts: []
    }  
  },
  mounted() {
    this.$axios.get(
     'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10')
      .then(response => this.posts = response.data)
  }  
}
</script>

<style scoped>

h1 {
  color:rgb(70, 20, 20);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
