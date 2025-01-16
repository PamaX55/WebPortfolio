<script setup lang="ts">

import { computed, ref } from 'vue';
import { useDisplay } from 'vuetify';

  let snackbar = ref(false);
  const sbTimeout = 2000;

function downloadPdf (){
  let elmnt = document.createElement('a');
  elmnt.setAttribute('href', 'data:application/pdf;charset=utf-8, '+encodeURIComponent('src\assets\Cv EdgarRosales.pdf'))
  elmnt.setAttribute('download', 'Cv EdgarRosales')
  document.body.appendChild(elmnt) 
  elmnt.click()
  document.body.removeChild(elmnt)
}

function startDownload(){
  // downloadPdf()
  viewPdf()
}

function viewPdf(){
  let elmnt = document.createElement('a');
  elmnt.setAttribute('href', 'https://drive.google.com/file/d/1j1KxIwER2afcOpe5nGzv-58qFJ5u5WEA/view?usp=sharing')
  elmnt.setAttribute('target', '_blank')
  document.body.appendChild(elmnt) 
  elmnt.click()
  document.body.removeChild(elmnt)
}

const {name} = useDisplay()

const resumePosition = computed(() => {
  switch(name.value) {
    case 'xs': return 'abs'
    case 'sm': return 'abs'
    case 'md': return 'abs'
    case 'lg': return 'fixed'
    case 'xl': return 'fixed'
    case 'xxl': return 'fixed'
    default :'tres'
  }
})

function CopyToClipboard(){
  navigator.clipboard.writeText("rosales.edgare@gmail.com");
  snackbar.value = true;
}

</script>

<template>
  <v-card class="lb-resume" variant="text" >
    <v-card-title id="lb-name">Edgar Rosales</v-card-title>
    <v-card-title id="lb-subname">Software Developer</v-card-title>
    <v-card-text class="lb-text">
      <p>Working in IT for 3 years, I've worked with
        desktop software and web apps, mainly focused on coding</p>
    </v-card-text>        
    
    <div style="display: flex; flex-direction: column; align-items: self-start; height: 10rem;padding-top: 3rem;">
        <v-btn class="btn-social" variant="plain" href="https://www.linkedin.com/in/edgare-rosales" target="_blank">
          <v-icon icon="mdi-linkedin" size="x-large"></v-icon>
          <p class="btn-social-text">LinkedIn</p>
        </v-btn>

        <v-btn class="btn-social" variant="plain" @click="CopyToClipboard">
          <v-icon icon="mdi-mail" size="x-large"></v-icon>
          <p class="btn-social-text">E-mail</p>
        </v-btn>
        <v-snackbar v-model="snackbar" :timeout="sbTimeout">
          <p>E-mail copied to clipboard</p> 
        </v-snackbar>

        <v-btn class="btn-social" variant="plain" href="https://github.com/PamaX55" target="_blank">
          <v-icon icon="mdi-github" size="x-large"></v-icon>
          <p class="btn-social-text">GitHub</p>
        </v-btn>
    </div>

    <a style="width: 100%;">
      <v-card @click="startDownload" class="download-cv" style="display: flex; flex-direction: row; justify-content: center;">
        <v-card-actions style="color: #ccd6f6;">
          <v-icon icon="mdi-download"></v-icon>Download CV
        </v-card-actions>
      </v-card>
    </a>
  </v-card >
</template>

<style scoped>
.landingbody {
  color: #ccd6f6;
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
  /* v-bind allows to calculate style with vue vars */
  position: v-bind(resumePosition);
}

.download-cv {
  background-color:  rgba(255, 255, 255, .1);
  min-width: 100%;
  margin-top: 2rem;
  cursor: pointer;
}

.download-cv:hover {
  background-color:  rgba(255, 255, 255, .15);
}

.contact-actn {
  background-color:  rgba(255, 255, 255, .1);
  min-width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.contact-actn :hover{
  cursor: pointer;
}

#lb-name {
  font-size: 3.2em;
  font-weight: bold;
  color: #ccd6f6;

  padding: 0 1rem;
}

#lb-subname {
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(204, 214, 246);

  padding: 0 1rem;
}

.lb-resume #text {
  font-size: 2em;
}

.lb-text {
  font-size: 1.1rem;
  color: #ccd6f6;
  max-width: 400px;
  text-align: start;
}

.lb-text p{
  max-width: 100%;
  padding-top: 1rem;
}

.btn-social{
  color: #ccd6f6;
}

.btn-social-text{
  padding-left: .5rem;
}
</style>