<template>
    <div>
        <h1>Welcome to 4NIM3.com</h1>
        <a :href="googleLoginUrl">Login with Google</a>
    </div>
</template>

<script>
import { nextTick } from 'vue';
import {fetchPopularManga, fetchPopularAnime} from '@/api/'

export default {
    data() {
        return {
            googleLoginUrl: 'http://localhost:3000/auth/google'
        };
    },
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        console.log("Token from URL:", token); // debugging

        if (token) {
            localStorage.setItem('token', token);
            console.log("Token stored in localStorage:", localStorage.getItem('token'));

            nextTick(() => {
                window.location.href = '/dashboard';
            });
        }
    }
};
</script>