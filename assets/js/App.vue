<template>
    <div class="container">
        <div class="template">
            <img src="/assets/img/strife.png" height="100">
            <h3>Welcome to Strife-Vue Template!</h3>
            <ul class="list-inline">
                <li><router-link to="/" v-text="'Home'"/></li>
                <li><router-link to="/blog" v-text="'Blog'"/></li>
                <li><router-link to="/blog/2020/This is a sample post" v-text="'View Post'"/></li>
            </ul>
            <div class="well">
                <!-- views insert here -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
    };
</script>

<style scoped>
    .template {
        margin-top: 50px;
        text-align: center;
    }
</style>