<script setup lang="ts">

// import { ref } from 'vue';

function downloadPdf (){
  let elmnt = document.createElement('a');
  elmnt.setAttribute('href', 'data:application/pdf;charset=utf-8, '+encodeURIComponent('src\assets\Cv EdgarRosales.pdf'))
  elmnt.setAttribute('download', 'Cv EdgarRosales')
  document.body.appendChild(elmnt) 
  elmnt.click()
  document.body.removeChild(elmnt)
}

function startDownload(){
  downloadPdf()
}

</script>

<template>
  <!-- <v-app id="landing"> -->
    <!-- <v-container class="landingbody" variant="tonal"> -->
      <!-- <v-row class="landingcontent"> -->
        <v-card class="lb-resume" variant="text" style="position: fixed;">
          <v-card-title id="lb-name">Edgar Rosales</v-card-title>
          <v-card-title id="lb-subname">Software Developer</v-card-title>
          <v-card-text class="lb-text">Software engineer who has worked mainly <br> developing web apps and desktop software</v-card-text>
        
          <v-card class="download-cv" style="display: flex; flex-direction: row;">
            <v-card-text class="lb-text">Download CV</v-card-text>
            
            <a href="src\assets\Cv EdgarRosales.pdf" download="Cv EdgarRosales">
              <v-card-actions @click="startDownload">Download PDF</v-card-actions>
            </a>
          </v-card>
          
          <v-btn @click="$emit('ShowContact')" >Contact</v-btn>
        </v-card >

      <!-- </v-row> -->
    <!-- </v-container> -->    
  <!-- </v-app> -->
</template>

<style scoped>
.landingbody {
  color: #ccd6f6;
  /* margin-top: 6em; */
  /* margin-bottom: 6em; */
  /* position: fixed; */
}

.landingcontent{
  justify-content: space-between;
}

.landingcontent div{
  flex-shrink: 0;
  flex-grow: 1;
}

.lb-resume {
  /* background-color: #F5F5F7; */
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.download-cv {
  background-color:  rgba(255, 255, 255, .1);
  min-width: 100%;
  margin-top: 2rem;
}

#lb-name {
  font-size: 3.5em;
  font-weight: bold;
  color: #ccd6f6;;
}

#lb-subname {
  font-size: 2em;
  font-weight: bold;
  color: rgba(204, 214, 246);
}

.lb-resume #text {
  font-size: 2em;
}

.lb-text {
  color: aliceblue;
}
</style>