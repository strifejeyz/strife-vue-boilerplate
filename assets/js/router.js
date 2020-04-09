import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home";
import Blog from "./views/Blog";
import Post from "./views/Post";

Vue.use(VueRouter);

const routes = [
    { path: "/", name: "home", component: Home },
    { path: '/blog', name: "blog", component: Blog },
    { path: '/blog/:year/:title', name: "post", component: Post },
];


const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;