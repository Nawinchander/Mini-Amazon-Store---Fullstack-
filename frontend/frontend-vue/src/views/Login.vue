<template>

    <div class="login">

        <h1>Mini Amazon</h1>

        <h2>Login</h2>

        <button
            @click="login"
            :disabled="loading"
        >

            {{ loading ? "Logging in..." : "Login" }}

        </button>

    </div>

</template>

<script setup>

import { ref } from "vue";

import { loginUser } from "../services/api";

const emit = defineEmits([
    "login"
]);

const loading = ref(false);

const login = async () => {

    try {

        loading.value = true;

        const response = await loginUser();

        localStorage.setItem(
            "token",
            response.data.token
        );

        emit("login");

    } catch (error) {

        console.log(error);

    } finally {

        loading.value = false;

    }

};

</script>

<!-- 11. Login Flow

When the user clicks:

Login

Vue calls: -->

// POST http://localhost:5000/api/auth/login

// Backend returns:

{
    "message": "Login Successful",
    "token": "JWT_TOKEN"
}




