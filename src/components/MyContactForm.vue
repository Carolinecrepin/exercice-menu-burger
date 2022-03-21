<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <div v-on:click="toggleModale" class="btn-modale">X</div>
        <div>
          <form @submit="checkForm" id="myContactForm" action="" method="" novalidate="true">
            <!--verification des erreurs dans le formulaire-->
            <p v-if="errors.length" class="errors">
              <b>Merci de corriger les erreurs :</b>
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </p>
            <div slot="header">
                <p class="contactUs">Contactez-nous</p>
            </div>
            <div slot="content" class="content">
                <label for="lastname">Votre nom :</label>
                <input type="text" name="lastname" id="lastname" placeholder="Nom" v-model="lastname">

                <label for="firstname">Votre prénom :</label>
                <input type="text" name="firstname" id="firstname" placeholder="Prénom" v-model="firstname">

                <label for="email">Votre Email :</label>
                <input type="text" name="email" id="email" placeholder="Email" v-model="email">

                <label for="select"> Merci de choisir une option :</label>
                <select name="select" id="select" v-model="select">
                    <option value="doc">Je souhaite recevoir de la documentation</option>
                    <option value="job">Je souhaite candidater à un poste</option>
                    <option value="other">Autre</option>
                </select>
            </div>
            <div slot="submit">
                <button @click="submitted" value="submit" class="submit">Envoyer</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import {mapActions, mapState} from 'vuex';
export default {
  name: "MyContactForm",
  data() {
    return {
      errors:[],
      lastname: null,
      firstname: null,
      email: null,
      select:null,
    };
  },

  mounted(){
    this.lastname = this.form.lastname
    this.firstname = this.form.firstname
    this.email = this.form.email
    this.select = this.form.select
  },

  computed:{
    ...mapState(['form'])
  },
  methods: {
    ...mapActions(['setForm']),
    checkForm: function (e) {
      this.errors = [];
      if (!this.lastname) {
        this.errors.push("Votre Nom est obligatoire");
      }
      if (!this.firstname) {
        this.errors.push("Votre prénom est obligatoire");
      }
      if (!this.email) {
        this.errors.push("Votre Email est obligatoire");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Votre Email n'est pas valide");
      }
      if (!this.select) {
        this.errors.push("Le sujet est obligatoire");
      }
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
      submitted(){
        const form = {firstname: this.firstname, lastname: this.lastname, email: this.email, select: this.select}
        this.setForm(form)
        this.$emit('submited', false);
      }
  },
  props: [
    "revele",
    "toggleModale"
  ],
};
</script>


<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modale {
  background: #f1f1f1;
  color: #333;
  padding: 30px;
  position: fixed;
  top: 30%;
}
.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
}
form {
    display: flex;
    flex-direction: column;
    background-color: rgb(238, 231, 231);
    padding:2.5em;
    border-radius: 3px;
}
.contactUs {
    font-size: 1.5em;
    font-weight: bolder;
}
label {
    font-weight: bolder;
    padding: 0.5em;
    text-align: start;
}
input, select {
    size: 90%;
    margin-bottom:1em;
}
.buttonModal {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.submit {
    width: 100px;
    height: 40px;
    border-radius: 2px;
    background-color: #ffbebe;
    margin-top: 0.5em;
    align-self:center;
    border-radius: 10px;
}
.content {
  display: flex;
  flex-direction: column;
}
.errors {
  color:red;
  text-align: left;
}
</style>