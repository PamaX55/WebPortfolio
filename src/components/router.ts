import { createRouter, createMemoryHistory } from 'vue-router';

import Landing from './Landing.vue'
import Work from './Work.vue'
import Contact from './Contact.vue'
import HelloWorld from './HelloWorld.vue';

const routes = [
  {path: '/', component: Landing},
  {path: '/work', component: Work},
  {path: '/contact', component: Contact},
  {path: '/helloworld', component: HelloWorld}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router