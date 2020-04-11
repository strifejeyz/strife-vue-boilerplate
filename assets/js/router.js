import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home";
import Blog from "./views/Blog";
import Post from "./views/Post";
import Users from "./views/Users";

Vue.use(VueRouter);

const routes = [
    { path: "/", name: "home", component: Home },
    { path: '/blog', name: "blog", component: Blog },
    { path: '/blog/:year/:id', name: "post", component: Post },
    { path: '/users', name: "users", component: Users },
];


const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;