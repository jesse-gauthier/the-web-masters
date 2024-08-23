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
	console.log('Initializing Google Analytics...')

	app.use(VueGtag, {
		property: {
			id: 'G-58RRPDKZYB',
		},
		router, // Automatically track pageviews
		onReady: () => {
			console.log('Google Analytics initialized successfully.')
		},
		onError: (error) => {
			console.error('Google Analytics failed to initialize:', error)
		},
		onBeforeTrack: (to, from) => {
			console.log(`Tracking pageview: from ${from.fullPath} to ${to.fullPath}`)
		},
		onAfterTrack: () => {
			console.log('Pageview tracked successfully.')
		},
	})

	console.log('Page Loaded, Google Analytics setup complete.')
} else {
	console.log('Google Analytics is off in non-production environments.')
}

// Mount the app to the DOM
app.mount('#app')
