<template>
  <v-container>
    <div style="display: flex; flex-direction: row; align-items: center;">
      <h1 class="custom-h1">EDUCATION</h1>
      <v-divider thickness="2" inset color="#ccd6f6"></v-divider>
    </div>
    

    <v-card class="space-after-element education-text" variant="text">
      <v-card-title>
        Universidad Autonoma de Occidente
      </v-card-title>
      <v-card-subtitle>
        Engineering in Software Design
      </v-card-subtitle>
      <v-card-subtitle>
        2016 - 2021
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<style scoped>
.education-text {
  /* color: aliceblue; */
  margin-top: 1.5rem;
  color: #ccd6f6;
  text-align: left;
}

.custom-h1 {
  font-size: 1.5rem;
  color: #ccd6f6;
  text-align: left;
  margin-bottom: 1.5rem;
  margin: auto;
}
</style>