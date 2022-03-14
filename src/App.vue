<template>
  <div id="app">
    <MyFooter :links="links"/>
    <SidebarMenu :links="links"/>
    <router-view/>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import SidebarMenu from "./components/Menu/SidebarMenu.vue";

export default {
  name:"app",
  components: {
    SidebarMenu,
    MyFooter
  },
  data() {
    return {
      links:[
        {label:'Home' , url:'/', icon: 'fa-home'},
        {label: 'About', url:'/about', icon: 'fa-users'},
        {label:'Contact', url:'/contact', icon: 'fa-envelope'}
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
  padding-top:3em;
  padding-left:0;

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
