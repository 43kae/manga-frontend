<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Popular Manga</h1>
    
    <div v-if="loading" class="text-gray-500">Loading manga...</div>
    <div v-else-if="mangaList.length === 0" class="text-red-500">No manga found.</div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="(manga, index) in mangaList"
        :key="index"
        class="bg-white shadow-md p-2 rounded-lg"
      >
        <img
          :src="manga.image"
          :alt="manga.title"
          class="w-full h-48 object-cover rounded"
        />
        <h2 class="mt-2 text-lg font-semibold">{{ manga.title }}</h2>
        <a
          :href="manga.link"
          target="_blank"
          class="text-blue-600 text-sm"
        >
          View
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      mangaList: [],
      loading: true
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/manga')
      .then(response => {
        this.mangaList = response.data;
      })
      .catch(error => {
        console.error("Error fetching manga:", error.response?.data || error.message);
      })
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>
