import './assets/base.css'
import 'aos/dist/aos.css'
import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag-next' // Import VueGtag

const app = createApp(App)

// Create the head management plugin instance
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)

app.use(VueGtag, {
	property: {
		id: 'G-58RRPDKZYB', // Your GA Tracking ID
	},
	config: {
		send_page_view: false, // Disable automatic page views until consent is given
	},
	appName: 'Ottawa Web Masters', // Optionally set your application name
	pageTrackerScreenviewEnabled: true, // Enable screenview tracking if needed
	router, // Automatically track route changes
})

app.mount('#app')
