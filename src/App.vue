<script setup lang="ts">

import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import Contact from './components/Contact.vue';

const contactOverlay = ref(false)

function showContact() {
  contactOverlay.value = true;
}
</script>

<template>
  <v-app id="vapp">
    <NavBar @showContact="showContact"/>

    <v-main id="vmain">
      <RouterView id="rtview"/>
      
      <v-overlay v-model="contactOverlay">
        <Contact/>
      </v-overlay>
    </v-main>
  </v-app>
</template>

<style>
#app {
  padding: 0;
  min-width: 100%;
  background-color: #B7B7B7;
}

#vmain {
  background-color: #705C53;/*#EDDFE0;*/
}

#rtview {
  margin-top: 4rem;
  /* background-color: #EDDFE0; */
  /* background-color: #705C53; */
}

.v-overlay {
  justify-content: center;
  align-items: center;
}

/* https://colorhunt.co/palette/eddfe0f5f5f7b7b7b7705c53 */
</style>
