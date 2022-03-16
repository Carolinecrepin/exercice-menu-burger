<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <div v-on:click="toggleModale" class="btn-modale">X</div>
        <div>
          <form action="">
            <div slot="header">
                <p class="contactUs">Contactez-nous</p>
            </div>
            <div slot="content" class="content">
                <label for="lastname">Votre nom :</label>
                <input type="text" name="lastname" id="lastname">

                <label for="Email">Votre prénom :</label>
                <input type="text" name="firstname" id="firstname">

                <label for="Email">Votre Email :</label>
                <input type="text" name="email" id="email">

                <label for="select"> Merci de choisir une option :</label>
                <select name="select" id="select">
                    <option value="doc">Je souhaite recevoir de la documentation</option>
                    <option value="job">Je souhaite candidater à un poste</option>
                    <option value="other">Autre</option>
                </select>
            </div>
            <div slot="submit">
                <button type="submit" value="Submit" class="submit">Envoyer</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MyContactForm",
  props: ["revele", "toggleModale"]
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
</style>