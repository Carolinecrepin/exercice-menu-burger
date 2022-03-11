<template>
    <div>
        <nav class="main-nav">
            <!-- logo -->
            <img src="@/assets/logo.png" alt="logo"  width="70" height="70">
            <div id="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">
                <slot>
                <!--bouton menu burger a droite-->
                <button type="button" class="burger-button" title="Menu">
                    <span class="hidden">Toggle menu</span>
                    <span class="burger-bar burger-bar--1"></span>
                    <span class="burger-bar burger-bar--2"></span>
                    <span class="burger-bar burger-bar--3"></span>
                </button>
                </slot>
            </div>
        </nav>
        <div class="sidebar">
        <!-- au click ferme le panneau sidebar si le panneau n'est pas ouvert-->
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <!--<div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>-->
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                <div>
                    <h2>Menu</h2>
                        <ul class="sidebar-panel-nav">
                            <router-link to="/">Home</router-link> 
                            <router-link to="/about">About</router-link> 
                            <router-link to="/contact">Contact</router-link>
                        </ul>
                </div>
            </div>
        </transition>
    </div>
    </div>
</template>

<script>
import { store, mutations } from '@/store.js'
export default {
        methods: {
            toggle() {
                mutations.toggleNav();
            },
            closeSidebarPanel: mutations.toggleNav
        },
        computed: {
            isPanelOpen() {
                return store.isNavOpen
            },
            isBurgerActive() {
                return store.isNavOpen;
            }
        }
}
</script>

<style scoped> 
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

.logo {
  float: left;
}

.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

button:focus {
  outline: 0;
}

.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
}

.burger-bar {
  background-color: #313131;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-bar--3 {
  transform: translateY(6px);
}



#burger.active .burger-bar {
  background-color: #fff;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}

.slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

    .sidebar-backdrop {
        background-color: rgba(19, 15, 64, .4);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: #059e57;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 200px;
    } 
    
    .router-link-active {
        color:rgb(44, 90, 63)
    }

h2 {
  color:white;
}
</style>
