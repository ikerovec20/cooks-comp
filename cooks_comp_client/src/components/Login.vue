<template>
    <v-layout justify-center>
        <v-container>
            <h1>Login</h1>
        <v-form  @submit.prevent="submit">
        <v-text-field v-model="username" label="Username" outlined required>
        </v-text-field>
        <v-text-field v-model="password" label="Password" outlined required type="password">
        </v-text-field>

        <v-btn color="primary" :disabled="!username || !password" type="submit">
            Login
        </v-btn>
    </v-form>
    </v-container>
    </v-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

const username = ref("");
const password = ref("");

async function submit() {
    console.log(username.value);
    console.log(password.value);
    const user = username.value;
    const pass = password.value;
    
    const creds = {
        username: user,
        password: pass
    };
    console.log(creds);
    const toSend = JSON.stringify(creds);
    const res = await axios.post("http://localhost:8000/api/login", creds);

    const userData = res.data;
    console.log(userData.username);
}
</script>