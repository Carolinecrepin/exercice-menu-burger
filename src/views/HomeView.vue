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
        <PaginationCards
          :totalPage="10"
          :perPage="10"
          :currentPage="currentPage"
          @pagechanged="onPageChange"
        />
      </div>
  </div>
</template>

<script>
import PaginationCards from '@/components/PaginationCards.vue'
export default {
  name: 'HomeView',
  components: {
    PaginationCards
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
    } 
  },
  methods: {
    onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    }
  },
  mounted() {
    this.$axios.get(
     'https://jsonplaceholder.typicode.com/posts')
      .then(response => this.posts = response.data)
  }  
}
</script>

<style scoped>
.home {

}

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

.pagination {
  justify-content: center;
}
</style>
