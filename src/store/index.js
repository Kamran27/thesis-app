import Vue from "vue";
import Vuex from "vuex";
import Api from "../service/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theses: [
            {
              titel: 'Angebote Vue',
              firma: 'webit!',
              professor: 'Mustermann',
              jahr: 2020,
            },
            {
              titel: 'Etwicklung der Website',
              firma: 'eon',
              professor: 'Musterfrau',
              jahr: 2021,
            },
          ],
    },
    mutations: { 
        SET_THESES(state, theses) {
            state.theses = theses;
        }
    },
    actions: {
        async loadTheses({commit}) {
            let response = await Api().get('/theses');
            commit('SET_THESES', response.data);
        }
    },
    modules: {}
});