<template>
    <div>
        <h1>Viewing orders for id #{{$route.params.id}}</h1>
        <h4>for the year {{$route.params.year}}</h4>
    </div>
</template>

<script>
    export default {
        name: "Orders"
    }
</script>

<style scoped>

</style>