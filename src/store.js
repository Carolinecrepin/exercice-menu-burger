import Vue from "vue";

//state nav
export const store = Vue.observable({
  isNavOpen: false
});

//mutation de la nav ouverte ou fermée
export const mutations = {
  setIsNavOpen(yesno) {
    store.isNavOpen = yesno;
  },
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  }
};
