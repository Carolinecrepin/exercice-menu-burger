<template>
  <div class="home">
      <h1>Page d'accueil avec les posts</h1>
      <div id="app">
        <div class="cards">
          <!-- carte de post -->
          <b-card v-for="(post, index) in posts" :key="index"
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
            <!--bouton voir plus avec la methode push qui dirige vers l'id du post en question-->
            <b-button variant="secondary" @click="pushToPost(post)">voir plus</b-button>
          </b-card>
        </div>
        <!--ajout d'un post via le bouton-->
        <div class="ajoutPost">
            <router-link to="/PostForm">
                <b-button id="AddPost" class="btn">Ajouter un post</b-button>
            </router-link>
        </div>
        <div class="btn-wrapper">
          <!-- bouton qui change la page au clic pour decrémenté -->
          <b-button class="btn" variant="secondary"  @click="changePage('prev')">Précédente</b-button>
          <!-- bouton de numéro de page -->
          <!-- le v-for prend en parametre le pageNumber et l'index dans la pagination avec la clé index et la class pagination -->
          <div v-for="(pageNumber, index) in pagination" :key="index" class="pagination">
          <!-- quand la class est active donc quand le bouton est cliqué donc la currentpage === a la pageNumber alors le css change et on a la class : activePagination qui change de couleur -->  
            <b-button :class="{activePagination : currentPage === pageNumber}" class="btn" variant="secondary" @click="goToSelectedPage(pageNumber)">{{ pageNumber }}</b-button>
          </div>
          <!-- bouton qui change la page au clic pour incrémenté -->
          <b-button class="btn" variant="secondary"  @click="changePage('next')">Suivante</b-button>
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
      posts: [],        //tableau d'objets des posts de l'api
      url:"http://jsonplaceholder.typicode.com/posts",
      currentPage: 1,   //page courante
      next: false,      //page suivante initialisée a false
      prev: false,       //page précédente initialisée a false
      pagination: [],     //tableau d'object avec toutes les pages
      pageNumber : 1,      //numéro de page
    } 
  },
  async mounted() {
      //il va changer le nombre total de posts
        await this.getTotalPosts();
      //il va chercher les posts par page
        await this.getPostsbyPage();
  },
  methods: {
    //methode asynchrone si le bouton est de value increment alors la current page s'incrémente sinon elle décrémente
   async changePage(value) {
        switch(value){
            case"next":
              this.currentPage++;
            break;
            case"prev":
              this.currentPage--;
            break;
        }
        await this.getPostsbyPage();
      },
      //methode asynchrone si le bouton goToSelectedPage est cliqué il prend en paramètre la valeur page qui est elle meme égale a la current page se qui permet d'avoir le next et le prev mis a jour 
      async goToSelectedPage(page) {
        this.currentPage = page   //mettre current page = page car on ne peut pas reprendre sur la getPostByPage
         await this.getPostsbyPage();
      },
      async goToSelectedPost(post) {
        this.posts = post   
         await this.getPostsbyPage();
      },
      //fonction qui permet d'aller chercher les posts de l'api par page
      async getPostsbyPage() {
        let response = await this.$axios.get(`${this.url}?_page=${this.currentPage}`);
        //les posts = la requete http de l'api et les datas
        this.posts = response.data;
      },
      //fonction permettant de recuperer tout les posts
      async getTotalPosts(){
        let response = await this.$axios.get(this.url);
      //la constante totalPosts est egales a la reponse de l'url+ data +longueur
        const totalPosts = response.data.length;
        this.generatePagination(totalPosts);
        
      },
      //fonction pour generer la pagination qui prend en paramètres le nombre total de post se qui donne 10 page de 10 posts
      generatePagination(totalPosts){
          const itemPerPage = 10
          const totalPage = totalPosts / itemPerPage
      //la pagination est un tableau de la longueur du totalPage avec l'index qui commence a 1 et pas 0
          this.pagination = Array.from({length: totalPage}, (_, i) => i + 1)
      },
      
      //fonction qui permet quand on clique sur le bouton router.push d'aller sur la page de detail du post
      pushToPost(post) {
      this.$router.push({ path: "/post", query: { id: post.id } });
    },
  }
};

</script>

<style scoped>
h1 {
  padding: 1em;;
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
.pagination {
  display:inline-block;
}
.activePagination {
  background: #b3a09b;
}
</style>
