<template>
    <div>
        <h1>This is Blog page</h1>
        <div class="row">
            <div class="col-md-8">
                <div class="post" v-for="post in Posts" :key="post.id">
                    <h3>
                        <router-link :to="'/blog/2020/'+post.id">{{post.title}}</router-link>
                    </h3>
                    <p class="content">{{post.body}}</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="sidebar" v-for="i in 10" :key="i">
                    <router-link :to="'/blog/2020/'+Posts[i-1].id">{{Posts[i-1].id}}. {{Posts[i-1].title}}</router-link>
                </div>
            </div>
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
    .sidebar {
        font-size: 14px;
        text-align: left
    }
</style>