<template>
    <div>
        <h1>This is Blog page</h1>
        <div class="post" v-for="post in Posts" :key="post.id">
            <h3>
                <router-link :to="'/blog/2020/'+post.id">{{post.title}}</router-link>
            </h3>
            <p class="content">{{post.body}}</p>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mapActions} from "vuex";

    export default {
        name: "Blog",
        created() {
            this.fetchPosts();
        },
        computed: {
            ...mapState({Posts: 'Posts'}),
        },
        methods: {
            ...mapActions({fetchPosts: 'fetchPosts'})
        },
    }
</script>

<style scoped>
    .post {
        text-align: left;
    }
</style>