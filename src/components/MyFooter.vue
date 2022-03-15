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
            <MyModal/>
        </div>

</template>

<script>
import MyModal from "@/components/MyModal.vue";
export default {
    components: {
        MyModal
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
</style>
