import './assets/base.css'
import VueGtag from 'vue-gtag-next'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueGtag, {
  property: {
    id: 'G-58RRPDKZYB'
  }
})

app.mount('#app')
