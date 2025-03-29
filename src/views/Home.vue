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
    }
};
</script>