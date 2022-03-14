<template>
  <div class="contact">
    <h1>Nous contacter</h1>
    <div class="formCard">
          <div class="geolocalisation">
          <p>Ici carte dynamique</p>
          </div>
          <form action="" class="contactForm">
          <label for="lastname">Votre nom :</label>
          <input type="text" name="lastname" id="lastname">

          <label for="Email">Votre prénom :</label>
          <input type="text" name="firstname" id="firstname">

          <label for="Email">Votre Email :</label>
          <input type="text" name="email" id="email">

          <label for="select"> Merci de choisir une option :</label>
          <select name="select" id="select">
              <option value="choice">-- Merci de choisir une option--</option>
              <option value="doc">Je souhaite recevoir de la documentation</option>
              <option value="job">Je souhaite candidater à un poste</option>
              <option value="other">Autre</option>
          </select>
          <div class="buttonForm">
              <button type="submit" value="Submit" class="submit">Envoyer</button>
          </div>
    </form> 
    </div> 
  </div>
</template>

<style scoped>
h1 {
  color:rgb(80, 47, 47);
}
.geolocalisation {
  display:flex;
  background-color: rgb(241, 224, 226);
}
.contactForm {
  display:flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60em;
  background-color:rgb(241, 224, 226);
  padding:3em;
  margin:1em;
}

label {
  text-align: start;
}

input, select {
  margin:0.5em;
  width: 20em;
  height: 2em;
  border-radius: 5px;
  align-items: center;
  background-color: white;
  text-align: center;
}

.buttonForm {
  align-items: center;
  margin-top: 2em;
}

.formCard {
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  padding: 2rem;
}

.submit {
  width: 8em;
  height: 3em;
  border-radius: 10px;
  background-color: #f0beb2;
}
</style>