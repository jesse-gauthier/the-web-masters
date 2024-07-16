import './assets/base.css'
import VueGtag from 'vue-gtag-next'

import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
const head = createHead()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueGtag, {
	property: {
		id: 'G-58RRPDKZYB',
	},
})
app.use(head)

app.mount('#app')
