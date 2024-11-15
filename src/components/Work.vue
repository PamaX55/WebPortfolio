<script setup lang="ts">
</script>

<template>
  <v-container class="space-after-element">
    <div style="display: flex; flex-direction: row; align-items: center;">
      <h1 class="custom-h1">EXPERIENCE</h1>
      <v-divider thickness="2" inset color="#ccd6f6"></v-divider>
    </div>
    

      <v-card class="work-card card-odd">
        <!-- v-hover here -->
        <a href="https://www.microsip.com" target="_blank">
          <v-card-title class="wc-title">MICROSIP
            <v-icon icon="mdi-open-in-new" size=""></v-icon>
          </v-card-title>
        </a>
        <v-card-subtitle>DEVELOPER</v-card-subtitle>
        <v-card-subtitle>March 2022 - September 2023</v-card-subtitle>
        <v-card-text>Member of the Administrative systems team. <br>
          Maintenance, update, and support for billing, accounting, documents and banks modules in the ERP Microsip. <br>
          Taking part in the migration to a new technology in short time. <br>
          Meetings with clients focused to the gathering of system requirements. <br>
          Updates in modules to use the new electronic bill version (CFDI 4.0). <br>
          Development of a function to automatize text templates for banking movements. 
        </v-card-text>
        
        <v-card-item>
          <v-chip>Delphi</v-chip>
          <v-chip>SQL</v-chip>
          <v-chip>API</v-chip>
          <v-chip>C#</v-chip>
        </v-card-item>
      </v-card>

      <v-card class="work-card card-odd">
        <a href="https://www.grupopetromar.com/" target="_blank">
          <v-card-title class="wc-title">PETROMAR
            <v-icon icon="mdi-open-in-new" size=""></v-icon>
          </v-card-title>
        </a>
        <v-card-subtitle>DEVELOPER</v-card-subtitle>
        <v-card-subtitle>February 2021 - March 2022</v-card-subtitle>
        <v-card-text>
          Onboarding for new members and temporal tech lead. <br>
          Updates in modules to use the new electronic bill version (CFDI 4.0). <br>
          Key in the adoption of new technology (React) for new projects. <br>
          Development and update of a web app with functionalities as billing, payments and reports <br>
          Automation of administrative tasks and maintenance of websites. 
        </v-card-text>

        <v-card-item>
          <v-chip>PHP</v-chip>
          <v-chip>React.js</v-chip>
          <v-chip>API</v-chip>
          <v-chip>SQL</v-chip>
          <v-chip>C#</v-chip>
        </v-card-item>
      </v-card>

      <v-card class="work-card card-odd">
        <a href="https://www.facebook.com/mentadigitalMX/" target="_blank">
          <v-card-title class="wc-title">MENTA DIGITAL
            <v-icon icon="mdi-open-in-new" size=""></v-icon>
          </v-card-title>
        </a>
        <v-card-subtitle>INTERN</v-card-subtitle>
        <v-card-text>
          Support with marketing campaigns. <br>
          design of web sites with Wordpress <br>
        </v-card-text>
        
        <v-card-item>
          <v-chip>Wordpress</v-chip>
          <v-chip>React.js</v-chip>
          <v-chip>JavaScript</v-chip>
        </v-card-item>
      </v-card>
  </v-container>
</template>

<style scoped>
.work-card {
  background-color: rgba(255, 255, 255, 0);
  margin: 1.5rem 0;
  color: #ccd6f6;
  /* color: aliceblue; */
  /* width: 80%; */
}

.work-card:hover {
  background-color: rgba(255, 255, 255, 0.05);
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wc-title:hover {
  background-color: rgba(255, 255, 255, 0.08);
/* mimic card transicion */
  transition-duration: 0.28s;
  transition-property: box-shadow, opacity, background;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.custom-h1 {
  font-size: 1.5rem;
  color: #ccd6f6;
  text-align: left;
  margin-bottom: 1.5rem;
  margin: auto;
}
</style>