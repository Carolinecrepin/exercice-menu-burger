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
        <div class="comments">
            <h4>Liste des commentaires</h4>
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
        } 
    },
    async mounted() {
        await this.getPostbyPosts();
    },
    methods: {
      //fonction qui permet d'aller chercher les posts de l'api par id de post
      async getPostbyPosts() {
        let response = await this.$axios.get(`${this.url}/${this.$route.query.id}`);
        //les posts = la requete http de l'api et les datas
        this.post = response.data;
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
</style>