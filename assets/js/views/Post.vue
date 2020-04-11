<template>
    <div v-if="post != null">
        <h1>{{post.title}}</h1>
        <b>Post from year <b>{{$route.params.year}}</b></b>
        <p>{{post.body}}</p>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        data: function () {
            return {
                post: null
            }
        },

        methods: {
            ...mapActions({fetchPosts: 'fetchPosts'})
        },

        computed: {
            ...mapState({Posts: 'Posts'}),
        },

        async created() {
            if (this.$store.state.Posts) {
                this.post = this.$store.state.Posts[this.$route.params.id];
            } else {
                await this.fetchPosts();
                this.post = this.$store.state.Posts[this.$route.params.id];
            }
        },
    }
</script>

<style scoped>

</style>