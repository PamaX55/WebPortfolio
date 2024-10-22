<script setup lang="ts">

function CopyToClipboard(){
  navigator.clipboard.writeText("rosales.edgare@gmail.com");
}

</script>

<template>
  <div id="contactContent">
    <v-card>
      <v-card-title>Contact</v-card-title>
    
    
    <div>
      <v-card-subtitle>Email</v-card-subtitle>
      <div style="display: flex;">
        <v-card-text>rosales.edgare@gmail.com</v-card-text>
        <v-btn @click="CopyToClipboard" >Copiar correo</v-btn>
      </div>
    </div>

    <div>
      <v-card-subtitle>LinkedIn</v-card-subtitle>
      <a href="https://www.linkedin.com/in/edgare-rosales" target="_blank">
        <v-card-text>linkedin.com/in/edgare-rosales</v-card-text>
      </a>
    </div>
  </v-card>
  </div>
</template>

<style>
#contactContent {
  background-color: #B7B7B7;
}
</style>