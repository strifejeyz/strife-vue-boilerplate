<template>
    <div class="users">
        <h1>List of Users</h1>

        <table class="table">
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr v-for="(user,id) in UsersList" :key="id">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
        </table>
        <hr>
        <input type="text" v-model="name" placeholder="User">
        <input type="text" v-model="email" placeholder="Email">
        <button @click="addUser">Add</button>
    </div>
</template>

<script>

    import {mapState} from 'vuex';
    import {mapActions} from 'vuex';
    import Axios from "axios";

    export default {
        data: function () {
            return {
                name: '',
                email: '',
                Users: null
            }
        },
        computed: {
            // this will extract Users var from state
            ...mapState({UsersList: 'Users'})
        },
        methods: {
            // we extract the fetchUsers() action
            ...mapActions({addToUsers: 'addToUsers'}),

            // and use it
            addUser: function () {
                this.addToUsers({name: this.name, email: this.email})
            }
        },
    }
</script>

<style scoped>table
.users {
    text-align: center !important;
}
</style>