import './assets/base.css'
import 'aos/dist/aos.css'
import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag-next'

const app = createApp(App)

// Create the head management plugin instance
const head = createHead()

// Use Pinia for state management
app.use(createPinia())

// Use the router
app.use(router)

// Use the head management plugin
app.use(head)

// Conditionally use VueGtag only in production
if (process.env.NODE_ENV === 'production') {
	app.use(VueGtag, {
		property: {
			id: 'G-58RRPDKZYB',
		},
		router, // Automatically track pageviews
	})
	console.log('Page Loaded')
} else {
	console.log('Google Analytics are off')
}

// Mount the app to the DOM
app.mount('#app')
