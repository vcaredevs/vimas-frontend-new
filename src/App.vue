<script setup lang="ts">
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

</script>


<template>
  <v-app >
    <Header/>
     <v-main>
      <router-view />
    </v-main>
   
    <Footer/>
  </v-app>
</template>