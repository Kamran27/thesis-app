import Vue from "vue";
import Vuex from "vuex";
//import {Api} from "@/service/api.js";
import axios from "axios";

Vue.use(Vuex);

const thesesURL = "http://localhost:3000/theses";
const tagsURL = "http://localhost:3000/tags";

export default new Vuex.Store({
    state: {
        theses: [
            /*{
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
        */ ],
        tags: []
    },
    mutations: { 
        SET_THESES(state, theses) {
            state.theses = theses;
        },
         SET_TAGS(state, tags) {
            state.tags = tags;
        },
        SAVE_THESES(state, thesis) {
            let theses = state.theses.concat(thesis);
            state.theses = theses;
        }, 
    },
    actions: {
        /*async loadTheses({commit}) {
            let response = await Api().get('/theses');
            let theses = response.data.data.map(t => t.firma);
            commit('SET_THESES', response.data);
        }
*/
        async loadTheses({ commit }) {
                await axios.get(thesesURL)
                .then(response => {
                commit('SET_THESES', response.data)
                //debugger; // eslint-disable-next-line
                })
            },
        async loadTags({ commit }) {
                await axios.get(tagsURL)
                .then(response => {
                commit('SET_TAGS', response.data)
                //debugger  // eslint-disable-next-line
                })
            },
        async saveTheses({ commit }, theses) {
                let respone = await axios.post(thesesURL, theses);
                let savedThesis = respone.data;
                //debugger // eslint-disable-next-line
                commit('SAVE_THESES', savedThesis);
                
            },    
    },
    modules: {}
});

