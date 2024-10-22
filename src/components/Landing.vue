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
    <v-container class="landingbody" variant="tonal">
      <v-row class="landingcontent" justify="center">
        <v-card class="lb-resume">
          <v-card-text>Hi, I'm </v-card-text>
          <v-card-title id="lb-name">EDGAR ROSALES</v-card-title>
          <v-card-subtitle id="lb-subname">A SOFTWARE DEVELOPER</v-card-subtitle>
          <v-card-text>Software engineer who has worked mainly developing web apps and desktop software</v-card-text>
          <v-card-text>You can see in this site my experience in more detail and contact info</v-card-text>
        </v-card >

        <v-card>
          <v-card-text>You can download my CV clicking this button</v-card-text>
          
          <a href="src\assets\Cv EdgarRosales.pdf" download="Cv EdgarRosales">
            <v-btn @click="startDownload">Download PDF</v-btn>
          </a>
        </v-card>  
      </v-row>
    </v-container>
    
    
  <!-- </v-app> -->
</template>

<style scoped>
.landingcontent{
  justify-content: space-between;
}

.landingcontent div{
  flex-shrink: 0;
  flex-grow: 1;
}

.lb-resume {
  background-color: #F5F5F7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#lb-name {
  font-size: 3em;
}

#lb-subname {
  font-size: 4em;
}
</style>