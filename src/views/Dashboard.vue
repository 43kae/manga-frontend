<template>
    <div>
        <h1>Welcome to Your Dashboard</h1>
        <div v-if="user">
            <img :src="user.avatar" alt="Profile Picture" width="100" />
            <p>Name: {{ user.name }}</p>
            <p>Email: {{ user.email }}</p>
        </div>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: null
        };
    },
    async mounted() {
        try {
            const response = await axios.get('http://localhost:3000/api/user', { withCredentials: true });
            this.user = response.data;
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    },
    methods: {
        logout() {
            window.location.href = 'http://localhost:3000/logout';
        }
    }
};
</script>