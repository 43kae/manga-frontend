<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get('http://localhost:3000/');
      this.message = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};
</script>

<template>
  <div>
    <h1>Manga PWA Frontend</h1>
    <p>Backend Response: {{ message }}</p>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 50px;
}
</style>
