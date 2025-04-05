<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Popular Anime</h1>
    
    <div v-if="loading" class="text-gray-500">Loading anime...</div>
    <div v-else-if="animeList.length === 0" class="text-red-500">No anime found.</div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="(anime, index) in animeList"
        :key="index"
        class="bg-white shadow-md p-2 rounded-lg"
      >
        <img
          :src="anime.image"
          :alt="anime.title"
          class="w-full h-48 object-cover rounded"
        />
        <h2 class="mt-2 text-lg font-semibold">{{ anime.title }}</h2>
        <a
          :href="anime.link"
          target="_blank"
          class="text-blue-600 text-sm"
        >
          Watch
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
      animeList: [],
      loading: true
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/anime')
      .then(response => {
        this.animeList = response.data;
      })
      .catch(error => {
        console.error("Error fetching anime:", error.response?.data || error.message);
      })
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>
