<template>
    <div>
        <h1>Welcome to 4NIM3.com</h1>
        <a :href="googleLoginUrl">Login with Google</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            googleLoginUrl: 'http://localhost:3000/auth/google'
        };
    },
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            localStorage.setItem('token', token);
            window.location.href = '/dashboard';
        }
    }
};
</script>