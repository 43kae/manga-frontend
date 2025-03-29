<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link v-if="isLoggedIn" to="/dashboard">Dashboard</router-link> |
      <button v-if="isLoggedIn" @click="logout">Logout</button>
    </nav>

    <router-view />
  </div>
</template>


<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    checkAuth() {
      const token = localStorage.getItem('token');
      this.isLoggedIn = !!token;
    },
    logout() {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.$router.push('/');
    }
  },
  watch: {
    $route() {
      this.checkAuth();
    }
  }
};
</script>

<style>
nav {
  padding: 10px;
  background: #333;
  color: white;
}

nav a {
  color: white;
  margin-right: 10px;
  text-decoration: none;
}

button {
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
