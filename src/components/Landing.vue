<script setup lang="ts">

// import { Ref } from 'vue';

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
    <div>
      <h2>Im Edgar</h2>
      <p>Developer with 3 years experience</p>
    </div>

    <p>Download my CV</p>
    <a href="src\assets\Cv EdgarRosales.pdf" download="Cv EdgarRosales">
      <v-btn @click="startDownload">Download PDF</v-btn>
    </a>
    
  <!-- </v-app> -->
</template>

<style scoped>
#landing{
  min-height: 100vh;
  background-color: rgb(150 222 241);
}
</style>