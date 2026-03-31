<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const openSearch = ref(false);

const route = useRoute();
watch(route, () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
});
</script>

<template>
  <v-app>
    <Header @open-search="openSearch = true" />
    <SearchDrawer :open="openSearch" @close="openSearch = false" />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>