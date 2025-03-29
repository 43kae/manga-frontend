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
    // Modify dashboard to use JWT
    mounted() {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/';
            return;
        }

        axios.get('http://localhost:3000/api/user', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                this.user = response.data;
            })
            .catch(() => {
                localStorage.removeItem('token');
                window.location.href = '/';
            });
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            window.location.href = '/';
        }
    }
};
</script>