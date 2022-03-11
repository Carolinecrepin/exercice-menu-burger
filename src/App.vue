<template>
  <div id="app">
    <SidebarMenu :links="links"/>
    <router-view/>
  </div>
</template>

<script>

import SidebarMenu from "./components/Menu/SidebarMenu.vue";

export default {
  name:"app",
  components: {
    SidebarMenu
  },
  data() {
    return {
      links:[
        {label:'Home' , url:'/', icon:''},
        {label: 'About', url:'/about'},
        {label:'Contact', url:'/contact'}
      ]
    }
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

.router-link {
    padding:3em;
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
</style>
