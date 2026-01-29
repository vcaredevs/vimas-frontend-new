<script setup lang="ts">
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { ref } from 'vue';
import SearchDrawer from './components/SearchDrawer.vue';


const openSearch = ref(false);

</script>


<template>
  <v-app >
   <Header @open-search="openSearch = true" />

  <SearchDrawer
    :open="openSearch"
    @close="openSearch = false"
  />
     <v-main>
      <router-view />
    </v-main>
   
    <Footer/>
  </v-app>
</template>
