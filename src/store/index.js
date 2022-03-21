import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        form: {
            firstname: null,
            lastname: null,
            email: null,
            select: null,
        }

    },
    mutations: {
        setForm(state, formFromComponent) {
            state.form = formFromComponent
        }
    },
    actions: {
        setForm({ commit }, formFromComponent) {
            commit('setForm', formFromComponent)
        }
    },
    modules: {
    }
})