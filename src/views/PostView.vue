<template>
    <div class="page">
        <h1>Detail post</h1>
        <div class="detail">
            <div class="titlePost">
                <h2>{{ post.title}}</h2>
            </div>
            <div class="bodyPost">
                {{ post.body}}
            </div>
        </div>
        <h4>Liste des commentaires</h4>
        <div v-for="(comment, index) in comments" :key="index" class="comments">
            <div class="commentsCard">
                <div class="commentName">
                    <p>{{ comment.name }}</p>
                </div>
                <div class="commentBody">
                    <p>{{ comment.body }}</p>
                </div>
            </div>
        </div>
        <div class="btn-wrapper">
            <b-button class="btn" variant="secondary"  @click="changePage('prev')">Précédente</b-button>
            <div v-for="(pageNumber, index) in pagination" :key="index" class="pagination">
                <b-button :class="{activePagination : currentPage === pageNumber}" class="btn" variant="secondary" @click="goToSelectedPage(pageNumber)">{{ pageNumber }}</b-button>
            </div>
            <b-button class="btn" variant="secondary" @click="changePage('next')">suivante</b-button>
        </div>
        <div>
            <b-button class="btn" variant="secondary" @click="$router.go(-1)">Retour</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostView',
    data(){
        return {
            post: null,        //tableau d'objets des posts de l'api
            url:"http://jsonplaceholder.typicode.com/posts",
            comments:[],
            currentPage: 1,
            next: false,
            prev: false,
            pagination: [],
            pageNumber:1 ,
        } 
    },
    async mounted() {
        await this.getPostbyPosts();
        await this.getTotalComments();
        await this.getCommentsbyPage();
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
            await this.getCommentsbyPage();
        },
        //methode asynchrone si le bouton goToSelectedPage est cliqué il prend en paramètre la valeur page qui est elle meme égale a la current page se qui permet d'avoir le next et le prev mis a jour 
        async goToSelectedPage(page) {
            this.currentPage = page   
            await this.getCommentsbyPage();
        },
        //fonction qui permet d'aller chercher les posts de l'api par id de post(pour l'affichage du detail du post)
        async getPostbyPosts() {
            let response = await this.$axios.get(`${this.url}/${this.$route.query.id}`);
            //les posts = la requete http de l'api et les datas
            this.post = response.data;
        },
        //fonction qui permet d'aller chercher les comments de l'api par page via l'id de post
        async getCommentsbyPage() {
            let response = await this.$axios.get(`${this.url}/${this.$route.query.id}/comments?_page=${this.currentPage}`);
            //les comments = la requete http de l'api et les datas
            this.comments = response.data;
        },
        //fonction qui va chercher tout les commentaires de l'api par id de post
        async getTotalComments(){
            let response = await this.$axios.get(`${this.url}/${this.$route.query.id}/comments`);
            this.comments = response.data;
            //la constante totalComments est egale a la reponse de l'url+ data +longueur
            const totalComments = response.data.length;
            this.generatePagination(totalComments);
        },
        //fonction pour generer la pagination qui prend en paramètres le nombre total de comments et qui le divise en item par page
        generatePagination(totalComments){
            const commentPerPage = 5
            const totalPage = totalComments / commentPerPage
        //la pagination est un tableau de la longueur du totalPage avec l'index qui commence a 1 et pas 0
          this.pagination = Array.from({length: totalPage}, (_, i) => i + 1)
          console.log(this.pagination)
      },
    }
}
</script>

<style scoped>
h1 {
    padding:1rem;
    margin-top:1em;
}
.page {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.detail {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-self: center;
    width: 50em;
    max-height: 50em;
    padding-bottom:2em;
    margin:3em;
    align-self: center;
    background-color:#ece2e0 ;
    border-radius: 10px;
}
.titlePost {
    display: flex;
    justify-content: flex-start;
    max-width:40em;
    align-self: center;
    padding: 2em;
}
.bodyPost {
    display: flex;
    justify-content: center;
    max-width: 30em;
    align-self: center;
}
.btn {
    margin: 2em;
}
.comments{
    display:flex;
    flex-direction: column;
    background-color:#edeceb ;
    margin:0.5em;
    border-radius: 5px;
    padding:1em;
    width: 40em;
    max-width: 60em;
    text-align: start;
}
.commentName {
    font-weight: bold;
    font-size: 1.2em;
}
.pagination {
  display:inline-block;
}
.activePagination {
  background: #b3a09b;
}
</style>