import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify ui library
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

// Vue Router instance created {router.ts}
import router from './components/router'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
