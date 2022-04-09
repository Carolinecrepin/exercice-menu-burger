<template>
    <div class="postForm-view">
        <form class="post-form" method="post">
            <h3>Formulaire d'ajout de post</h3>
                <!--verification des erreurs dans le formulaire-->
                <p v-if="errors.length" class="error">
                    <b>Merci de corriger vos erreurs:</b>
                <ul>
                    <li v-for="(error,index) in errors" :key="index" class="errors">{{ error }}</li>
                </ul>
                </p>
            <div class="formPost">
                <!--label et champs pour le nom-->
                <label for="name">Votre nom :</label>
                <input type="text" name="name" id="name" v-model="name">
                <!--label et champs pour le post-->
                <label for="post">Votre post :</label>
                <input class="post-text-field" type="text" name="post" id="post" v-model="post">
            </div>
            <div class="submit">
            <!--bouton submit-->
                <b-button @click="createPost()" value="submit" class="submit">Envoyer</b-button>
            <!-- bouton de retour a la page précédente-->
                <b-button class="submit" @click="$router.go(-1)">Retour</b-button>
            </div>
            <!-- si le form est bien envoyé on a un message de success -->
            <div v-if="successNotification">
                <p>votre post a été envoyé avec succès!</p>
            </div>
        </form> 
    </div>
</template>

<script>
export default {
    name:"PostForm",
    data() {
        return {
            url:"http://jsonplaceholder.typicode.com/posts",
            errors: [],
            name: null,
            post: null,
            userId:1,
            successNotification:false //notification de success initialisé a false 
        }
    },
    methods: {
        //si le formulaire est valide alors true sinon method setFormError qui va lister les erreurs
        isFormValid() {
            if (this.name && this.post) {
                return true;
            }
            this.setFormError()
        },
        //dans la methode createPost on verifie si le form est valide (l.52) et on post le titre, le body et le userId qui correspond aux datas d'un post
        async createPost(){
            if(this.isFormValid() === true){
                //si le form est valide il affiche le nouveau post et affiche un message de success
                try { 
                    await this.$axios.post(`${this.url}`,{title: this.name, body:this.post, userId:this.userId})
                    this.successNotification = true
                //sinon il liste les erreurs
                } catch(error) {
                    console.log(error)           }
            }
        },
        //methode pour securiser le formulaire en detectant les erreurs de saisies de champs 
        setFormError(){
            this.errors = [];
            if (!this.name) {
                this.errors.push('Votre nom est obligatoire');
            }
            if (!this.comment) {
                this.errors.push('Votre post est obligatoire');
            }
        }
    }
}
</script>

<style scoped>
.post-form {
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color:#ece2e0 ;
    padding: 1em;
    margin: 3em;
    border-radius: 10px;
    width: 60em;
    height: 28em;
    
}
.formPost {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin:1em;
    width: 30em;
    
}
.submit {
    margin-top: 1em;;
    margin-bottom: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;
}
.post-text-field {
    height: 8em;
    text-align:left;
}
label {
    text-align: left;
    margin-top:1em;
    font-weight: bold;
}
input {
    border-radius: 5px;
}
.error {
    color:red;
    font-weight: bolder;
}
.errors {
    color:red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size:small;
}
.postForm-view{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>