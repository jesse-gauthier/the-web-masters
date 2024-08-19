import './assets/base.css'
import 'aos/dist/aos.css'
import { H } from 'highlight.run'
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
} else {
	console.log('Google Analytics are off')
}

H.init('7e387k6d', {
	environment: 'production',
	version: 'commit:abcdefg12345',
	networkRecording: {
		enabled: true,
		recordHeadersAndBody: true,
		urlBlocklist: [
			'https://www.googleapis.com/identitytoolkit',
			'https://securetoken.googleapis.com',
		],
	},
})

// Mount the app to the DOM
app.mount('#app')
