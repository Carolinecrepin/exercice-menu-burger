<template>
    <div>
        <MyContactForm :revele="revele" :toggleModale="toggleModale"></MyContactForm>
        <button v-on:click="toggleModale" class="btn-contact">Contactez-nous</button>
    </div>
</template>

<script>
import MyContactForm from "@/components/MyContactForm.vue";
export default {
    name:"MyModal",
    data() {
        return {
            revele: false,
        };
    },
    components: {
        MyContactForm
    },
    methods: {
        toggleModale: function() {
            this.revele = !this.revele;
        }
    }
}
</script>

<style scoped>
.bloc-modale {
    position:fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    display:flex;
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

.btn-contact {
    width: 120px;
    height: 40px;
    border-radius: 2px;
    background-color: #ffbebe;
    margin-top: 0.5em;
    align-self:center;
    border-radius: 10px;
}
</style>