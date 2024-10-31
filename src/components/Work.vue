<script setup lang="ts">

</script>

<template>
  <v-container class="space-after-element">
    <h1 class="custom-h1">EXPERIENCE</h1>

    
    <v-row class="row-odd">
      <v-card class="work-card card-odd">
        <a href="https://www.microsip.com" target="_blank">
          <v-card-title class="wc-title">MICROSIP</v-card-title>
        </a>
        <v-card-subtitle>DEVELOPER</v-card-subtitle>
        <v-card-subtitle>March 2022 - September 2023</v-card-subtitle>
        <v-card-text>Member of the Administrative systems team. <br>
          Maintenance, update, and support for billing, accounting, documents and banks modules for the ERP Microsip. <br>
          Taking part fast in the migration to a new technology. <br>
          Meetings with clients directed to the gathering of system requirements. <br>
          Updates in modules to use the new electronic bill version (CFDI 4.0). <br>
          Development of a function to automatize text templates for bank tranfers. 
        </v-card-text>
      </v-card>
    </v-row>

    <v-row class="row-even">
      <v-card class="work-card card-odd">
        <a href="https://www.grupopetromar.com/" target="_blank">
          <v-card-title class="wc-title">PETROMAR</v-card-title>
        </a>
        <v-card-subtitle>DEVELOPER</v-card-subtitle>
        <v-card-subtitle>February 2021 - March 2022</v-card-subtitle>
        <v-card-text>
          Onboarding for new members and temporal tech lead. <br>
          Updates in modules to use the new electronic bill version (CFDI 4.0). <br>
          Entry for use of new technology (React) for new projects. <br>
          Development and update of a web app with functionalities as billing, payments and reports <br>
          Automation of administrative tasks and maintenance of websites. 
        </v-card-text>
      </v-card>
    </v-row>

    <v-row class="row-odd">
      <v-card class="work-card card-odd">
        <a href="https://www.facebook.com/mentadigitalMX/" target="_blank">
          <v-card-title class="wc-title">MENTA DIGITAL</v-card-title>
        </a>
        <v-card-subtitle>INTERN</v-card-subtitle>
        <v-card-text>
          Support with marketing campaigns. <br>
          design of web sites with Wordpress <br>
        </v-card-text>
      </v-card>
    </v-row>    
  </v-container>
</template>

<style scoped>
.work-card {
  background-color: rgba(255, 255, 255, 0.1);
  margin: 1.5rem 0;
  color: #ccd6f6;
  /* width: 80%; */
}

.row-odd {
  justify-content: flex-start;
  justify-items: flex-start;
}

.card-odd {
  text-align: start;
}

.row-even {
  justify-content: flex-end;
  justify-items: flex-end;
}

.card-even {
  text-align: end;
}

.wc-title {
  font-size: 1.5em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.custom-h1 {
  font-size: 1.5rem;
  color: aliceblue;
  text-align: left;
  margin-bottom: 1.5rem;
}
</style>