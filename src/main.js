import './assets/base.css'
import 'aos/dist/aos.css'
import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag-next'
// import { capturePageLoad } from './capture.js'

const app = createApp(App)

// Create the head management plugin instance
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)

// Initialize Google Analytics as early as possible
if (process.env.NODE_ENV === 'production') {
	console.log('Initializing Google Analytics...')
	app.use(VueGtag, {
		property: {
			id: 'G-58RRPDKZYB',
		},
		router,
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
	console.log('Google Analytics setup complete.')
} else {
	console.log('Google Analytics is off in non-production environments.')
}

// Capture the initial page load when the app is mounted
// capturePageLoad()

app.mount('#app')
