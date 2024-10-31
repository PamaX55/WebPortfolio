<script setup lang="ts">
// import { ref } from 'vue';
import { RouterLink } from 'vue-router';


// import { ref } from 'vue'


</script>

<template>
    <v-app-bar class="navbar">
      <v-divider vertical></v-divider>

      <RouterLink to="/" class="h-100">
        <v-btn class="h-100">Resume</v-btn>
      </RouterLink>
      <v-divider vertical></v-divider>

      <RouterLink to="/work" class="h-100">
        <v-btn class="h-100">Experience</v-btn>
      </RouterLink>
      <v-divider vertical></v-divider>

      <v-btn class="h-100" @click="$emit('showContact')">Contact</v-btn>
      
      <v-divider vertical></v-divider>
      
    </v-app-bar>
</template>

<style scoped>
.navbar {
  background-color: #705C53 !important;
  /* background-color: #F5F5F7 !important; */
  /* background-color: rgb(150 222 241) !important; */
}

#nbtitle{
  max-width: fit-content;
  padding: 0 1vw;
}
</style>