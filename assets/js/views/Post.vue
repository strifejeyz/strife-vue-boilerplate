<template>
    <div>
        <h1>{{$route.params.title}}</h1>
        <b>Post from year <b>{{$route.params.year}}</b></b>
    </div>
</template>

<script>
    export default {
        name: "Post"
    }
</script>

<style scoped>

</style>