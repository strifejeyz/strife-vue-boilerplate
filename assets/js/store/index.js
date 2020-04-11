import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const state     = {
    Users: [
        { name: 'James', email: 'james@mail.com' },
        { name: 'John', email: 'john@mail.com' },
        { name: 'Rog', email: 'rog@mail.com' },
    ],
    Posts: null
}
const mutations = {
    appendUser: function (state, data) {
        state.Users.push(data);
    },
    appendPosts: function (state, data) {
        state.Posts = data;
    }
}
const actions   = {
    /*======== Adding a new User =========*/
    addToUsers: function ({commit}, data) {
        commit('appendUser', data);
    },


    /*=========Fetch Posts API =========*/
    fetchPosts: async function({commit}) {
        const self = this;
        await Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                self.Posts = response.data;
            });
        commit('appendPosts', self.Posts);
    },
}

const getters   = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})