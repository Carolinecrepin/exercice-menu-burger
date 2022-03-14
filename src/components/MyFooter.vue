<template>
    <div class="footer"> 
        <ul class="footer-menu">
            <router-link
            v-for="(link, index) in links" :key="index"
            :to="link.url"
            >
            <!--icones de menu qui changent avec le v-for icon-->
            <i :class="['fa', link.icon]"></i>
            {{ link.label }}
            </router-link> 
        </ul>
        <img src="@/assets/logo-tricot.png" alt="logo"  width="50" height="50">

            <button @click="open = true" class="contact">Contactez-nous</button>
            <div v-if="open" class="openModal">
                <form action="">
                    <p class="contactUs">Contactez-nous</p>
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
                    <div class="buttonModal">
                        <button type="submit" value="Submit" class="closeModal">Envoyer</button>
                        <button @click="open = false" class="closeModal">Fermer</button>
                    </div>
                </form>
            </div>
        </div>

</template>

<script>
export default {
    data() {
        return {
        open: false
        }
    },
    props: {
        links:{
            type:Array,
            require: true
        }
    }
}
</script>

<style scoped>
.footer {
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    position:absolute;
    bottom:0;
    width:100%;
    height:50px;
    padding: 2em;
    background-color: #b3a09b;
}

.footer-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.footer-menu > a {
    display: flex;
    padding:0.5em;
    text-decoration: none;
    color:white;
}

.footer-menu > a >i {
    padding-right:0.7em;
    color:white;
}

.router-link-active {
        display:flex;
        flex-direction:row;
        color:rgb(90, 62, 44);
}

.openModal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}

.closeModal {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: #f0beb2;
    margin-top: 0.5em;
    align-self:center;
}

.contact {
    border-radius: 10px;
    background-color: #f0beb2;
    border-color: rgb(255, 255, 255);
}

.contactUs {
    font-size: 1.5em;
    font-weight: bolder;
}

form {
    display: flex;
    flex-direction: column;
    background-color: rgb(238, 231, 231);
    padding:2.5em;
    border-radius: 3px;
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
</style>
