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
            <b-button href="#" variant="secondary">voir plus</b-button>
          </b-card>
        </div>
        <div class="btn-wrapper">
          <b-button class="btn" variant="secondary"  @click="changePage('decrement')">Precedente</b-button>
          <b-button class="btn" variant="secondary"  @click="changePage('increment')">Suivante</b-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
    } 
  },
  methods: {
    changePage(type) {
      if ('increment' === type) {
        this.currentPage++;
      } else {
        this.currentPage--;
      }

      this.getPosts(this.currentPage);
    },
    async getPosts(page) {
      let response = await this.$axios.get(
        "https://jsonplaceholder.typicode.com/posts?_page=" +
          page +
          "&_limit=10"
      );
      console.log(response);
      this.posts = response.data;
    },
  },
 
mounted() {
    this.getPosts();
  },  
}
</script>

<style scoped>
h1 {
  color:rgb(39, 38, 38);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.card {
  position: inherit!important;
}
.btn-secondary {
  margin:0.5em;
}
.btn-wrapper {
  padding: 1em;
}
</style>
