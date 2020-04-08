<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vuejs App</title>
</head>
<body>

<div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/somewhere">Go somewhere</router-link>
    <router-link to="/orders/25/2016">Orders</router-link>

    <router-view></router-view>
</div>

<script src="/assets/dist/js/app.js"></script>
</body>
</html>

