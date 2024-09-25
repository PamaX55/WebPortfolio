<script setup lang="ts">
// import { ref } from 'vue'
import Landing from './Landing.vue';
import NavBar from './NavBar.vue';

defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <NavBar />
  
  <Landing />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
