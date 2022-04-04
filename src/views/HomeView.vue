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
          <!-- bouton qui change la page au clic pour decrémenté -->
          <b-button class="btn" variant="secondary"  @click="changePage('prev')">Precedente</b-button>
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
      url:"http://jsonplaceholder.typicode.com/posts?_page=",
      currentPage: 1,   //page courante
      next: false,      //page suivante initialisée a false
      prev: false       //page précédente initialisée a false
    } 
  },
  methods: {
    //si le bouton est de type increment alors la current page s'incrémente sinon elle décrémente
    changePage(type) {
        switch(type){
            case"next":
              this.currentPage++;
            break;
            case"prev":
              this.currentPage--;
            break;
            default:
              this.currentPage = type;
            break;
        }
        this.getPosts(this.currentPage);
      },
      //fonction qui permet d'aller chercher les posts de l'api via l'url et la currentPage
      async getPosts() {
        let response = await this.$axios.get(this.url + this.currentPage);
        //les posts = la requete http de l'api et les datas
        this.posts = response.data;
        //le headerLink est la response de la requête du header dans la fonction getResponseHeader (qui recupère le lien)
        let headerLink = response.request.getResponseHeader('link')
        
        //une fois le lien interprété on déclare une variable parsedLink de parseLink qui prend en paramètre le link du header
        let parsedLink = this.parseLink(headerLink)

        //l'url est un nouvel objet instancié de la last page parsé concaténé au search param 
        let urlLastPage = new URL(parsedLink.last);
        let nbLastPage = urlLastPage.searchParams;
        let nbPage = nbLastPage.get('_page');
        let parsedInt = parseInt(nbPage);

        this.next = undefined !== parsedInt.next;
        this.prev = undefined !== parsedInt.prev;

      },
      //fonction pour interprêter le link du header link 
      parseLink(headerLink) {
        const output = {};
        const regex = /<([^>]+)>; rel="([^"]+)"/g; 
        
          let m;
          // eslint-disable-next-line
            while (m = regex.exec(headerLink)) {
          // eslint-disable-next-line
              const [_, v, k] = m;
              output[k] = v;      //k : key v: value
            }

            return output;
      },
      mounted() {
      //il va chercher les posts
        this.getPosts();
      }  
  }
};

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
