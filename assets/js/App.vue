<template>
    <div class="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img src="/assets/img/strife.png" height="30">
                </router-link>
                <button class="navbar-toggler" @click="navbar=!navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" :class="{'show':navbar}" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" v-text="'Blog'" to="/blog"/>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" v-text="'Users'" to="/users"/>
                        </li>
                        <li class="nav-item dropdown">
                            <span class="nav-link dropdown-toggle" @click="dropdown = !dropdown">
                                Dropdown link
                            </span>
                            <div class="dropdown-menu" :class="{'show':dropdown}">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        <div class="container">
            <div class="wrap">
                <!-- views insert here -->
                <router-view></router-view>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "App",
        data: function () {
            return {
                dropdown: false,
                navbar: false,
            }
        }
    };
</script>

<style scoped>
    .app {
        font-family: 'Roboto', sans-serif;
        color: #777777
    }

    .wrap {
        margin-top: 20%;
        text-align: center;
    }

    .navbar .dropdown-menu {
        background: #272727;
        margin-top: 8px;
        border: none;
        padding: 10px 0;
    }

    .navbar .dropdown-menu .dropdown-item {
        color: #ffffff;
        padding: 10px 30px;
        transition: .4s;
        border-bottom: 1px solid #171717
    }

    .navbar .dropdown-menu .dropdown-item:last-child {
        border: none;
    }

    .navbar .dropdown-menu .dropdown-item:hover {
        background: #171717;
    }

    .plus {
        font-size: 30px
    }

</style>