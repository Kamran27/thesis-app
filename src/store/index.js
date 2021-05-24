import Vue from "vue";
import Vuex from "vuex";

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
    mutations: {},
    actions: {},
    modules: {}
});