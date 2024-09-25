<script setup lang="ts">

import NavBar from './components/NavBar.vue';

</script>

<template>
  <v-app class="mt-8" >
    <NavBar />
    <RouterView />
    
  </v-app>
</template>

<style>

#app{
  width: 75%;
  background-color: rgb(150 222 241);
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
