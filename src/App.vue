<script setup lang="ts">

import { ref } from 'vue';
import Contact from './components/Contact.vue';
import Landing from './components/Landing.vue';
import Work from './components/Work.vue';
import Resume from './components/Resume.vue';
import Education from './components/Education.vue';

const contactOverlay = ref(false)

function showContact() {
  contactOverlay.value = true;
}
</script>

<template>
  <v-app id="vapp">
    <!-- <NavBar @showContact="showContact"/> -->

    <v-main id="vmain">
      <!-- <RouterView id="rtview"/> -->
      <v-container>
        <v-row style="padding-top: 3rem;">
          <v-col cols="5">
            <Landing @showContact="showContact"/>
          </v-col>
          <v-col cols="7" style="padding-left: 4rem;">
            <Resume/>
            <Work/>
            <Education/>
          </v-col>
        </v-row>
      </v-container>
      
      

      

      <!-- <v-container>
        <v-row>
          <v-col class="landing-col">
            <Landing/>
          </v-col>
          <v-col>
            <Work/>
          </v-col>
        </v-row>
      </v-container>  -->
      
      <v-overlay v-model="contactOverlay">
        <Contact/>
      </v-overlay>
    </v-main>
  </v-app>
</template>

<style>
:root {
  /* Background color when scrolling and page stretch a border */
  background-color: #493830;
}

#app {
  padding: 0;
  min-width: 100%;
  background-color: #B7B7B7;
}

#vmain {
  background-color: #2A1A0f;/*#EDDFE0;*/
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

.space-after-element {
  margin-bottom: 5rem;
}

/* https://colorhunt.co/palette/eddfe0f5f5f7b7b7b7705c53 */
</style>
