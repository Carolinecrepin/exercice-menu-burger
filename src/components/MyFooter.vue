<template>
    <div class="footer"> 
        <h1>footer</h1>
        <img src="@/assets/logo.png" alt="logo"  width="50" height="50">
        <p>Liste des liens de navigation</p>
        <p>lien contactez-nous avec pop-up</p>
    </div>
</template>

<style scoped>
.footer {
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    position:absolute;
    bottom:0;
    width:100%;
    padding-top:50px;
    height:50px;
    padding: 30px;
    background-color: #77c087;
}
</style>