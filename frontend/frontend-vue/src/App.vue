<template>

    <Login v-if="!loggedIn" @login="loggedIn = true"/>

    <Dashboard v-else />

</template>


<script setup>

import { ref } from "vue";

import Login from "./views/Login.vue";

import Dashboard from "./views/Dashboard.vue";


const loggedIn = ref( !!localStorage.getItem("token"));

</script>


<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld />
</template> -->



<!-- What App.vue Does

It checks:

localStorage.getItem("token")

If there is no token:

Login.vue

If token exists:

Dashboard.vue -->



