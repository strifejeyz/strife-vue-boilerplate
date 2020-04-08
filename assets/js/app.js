import Vue          from "vue";
import VueRouter    from "vue-router";
import Home         from "./views/Home";
import Orders       from "./views/Orders";
import PageNotFound from "./views/PageNotFound"

Vue.use(VueRouter);

const links = [
    { path: '',                  name: 'Home',  component: Home },
    { path: '/orders/:id/:year', name: 'Order', component: Orders },
    { path: '*',                 name: '404',   component: PageNotFound },
];

const router = new VueRouter({
    routes: links,
    mode: 'history'
});

new Vue({
    router
}).$mount('#app');