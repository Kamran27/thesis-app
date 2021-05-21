import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/theses",
            name: "theses",
            component: () => import("./components/ThesisList")
        },
        {
            path: "/theses/:id",
            name: "thesis-details",
            component: () => import("./components/Thesis")
        },
        {
            path: "/add",
            name: "add",
            component: () => import("./components/AddThesis")
        }
    ]
});