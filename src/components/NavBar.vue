<script setup lang="ts">
import { RouterLink } from 'vue-router';


// import { ref } from 'vue'

</script>

<template>
    <v-app-bar>
      <v-app-bar-title id="nbtitle">
        <h4>Edgar Rosales</h4>
      </v-app-bar-title>

      <RouterLink to="/" class="h-100">
        <v-btn class="h-100">Resume</v-btn>
      </RouterLink>
      
      <RouterLink to="/work" class="h-100">
        <v-btn class="h-100">Portfolio</v-btn>
      </RouterLink>
    
      <RouterLink to="/contact" class="h-100">
        <v-btn class="h-100">Contact</v-btn>
      </RouterLink>
      
    </v-app-bar>
</template>

<style scoped>
#nbtitle{
  max-width: fit-content;
  padding: 0 1vw;
}
</style>