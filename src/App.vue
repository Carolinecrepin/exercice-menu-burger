<template>
  <div id="app">
    <nav class="main-nav">
      <img src="./assets/logo.png" alt="logo"  width="70" height="70">
      <BurgerMenu></BurgerMenu>
    </nav>
    <SidebarMenu>
      <h2>Menu</h2>
      <ul class="sidebar-panel-nav">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/contact">Contact</router-link>
      </ul>
    </SidebarMenu>
    <router-view/>
  </div>
</template>

<script>
import BurgerMenu from "./components/Menu/BurgerMenu.vue";
import SidebarMenu from "./components/Menu/SidebarMenu.vue";

export default {
  name:"app",
  components: {
    BurgerMenu,
    SidebarMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  background-color: #77c087;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #1a6242;
}

.logo {
  float: left;
}
.sidebar-panel-nav {
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items:flex-start;
  padding:3em;

}

.sidebar-panel-nav > a {
  display:flex;
  flex-direction: column;
  padding:1em;
  color:white;
  text-decoration: none;
  font-size: 1.3em;

}
.router-link {
    padding:3em;
}

h2 {
  color:white;
}
</style>
