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
          <v-col cols="12" lg="5">
            <Landing @showContact="showContact"/>
          </v-col>
          <v-col cols="12" lg="7">
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
  background-color: #283c32;
  background-color: #3b4d44;
}

#app {
  padding: 0;
  min-width: 100%;
  background-color: #B7B7B7;
}

#vmain {
  background-color: #283c32;/*#2A1A0f;*//*#EDDFE0;*/
  /* background: rgb(255,255,255); */
background: linear-gradient(to bottom, rgba(255,255,255,1) -1000%, rgba(40,60,50,1) 100%);
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

/* brown https://colorhunt.co/palette/eddfe0f5f5f7b7b7b7705c53 */
/* green https://coolors.co/palette/dad7cd-a3b18a-588157-3a5a40-344e41 */
</style>
