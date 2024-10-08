import './assets/base.css'
import 'aos/dist/aos.css'
import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag-next'
import { supabase } from './supabaseClient'
import { H } from 'highlight.run'
const app = createApp(App)

// Create the head management plugin instance
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)

// Only initialize Google Analytics if in production mode
if (process.env.NODE_ENV === 'production') {
	app.use(VueGtag, {
		property: {
			id: 'G-58RRPDKZYB', // Your GA Tracking ID
		},
		config: {
			send_page_view: false, // Disable automatic page views until consent is given
		},
		appName: 'Ottawa Web Masters', // Optionally set your application name
		pageTrackerScreenviewEnabled: true, // Enable screenview tracking if needed
		router, // Automatically track route changes once enabled
	})
}

// Function to fetch the user's IP address
async function getIpAddress() {
	try {
		const response = await fetch('https://api.ipify.org?format=json')
		const data = await response.json()
		return data.ip // Return the IP address
	} catch (error) {
		console.error('Error fetching IP address:', error)
		return null // In case of an error, return null
	}
}

// Function to log page views to Supabase (only in production)
async function logPageVisit(userId, pageUrl) {
	// Get additional information
	const timestamp = new Date().toLocaleString('en-US', {
		timeZone: 'America/New_York', // Eastern Time Zone
		hour12: true, // 12-hour format
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	})

	const userAgent = navigator.userAgent
	const screenWidth = window.screen.width
	const screenHeight = window.screen.height
	const referrer = document.referrer

	if (process.env.NODE_ENV === 'production') {
		const { data, error } = await supabase.from('analytics').insert([
			{
				user_id: userId,
				page_url: pageUrl,
				event: 'pageload',
				timestamp: timestamp, // Eastern Time with 12-hour format and AM/PM
				user_agent: userAgent,
				screen_width: screenWidth,
				screen_height: screenHeight,
				referrer: referrer,
			},
		])

		if (error) {
			console.error('Error logging page visit:', error)
		} else {
			console.log('Page visit logged:', pageUrl)
		}
	} else {
		console.log('Development mode: Supabase logging skipped')
	}
}

// Function to generate and store a random user ID in localStorage
function getOrCreateRandomUserId() {
	let randomUserId = localStorage.getItem('randomUserId')
	if (!randomUserId) {
		randomUserId = Math.random().toString(36).substr(2, 9)
		localStorage.setItem('randomUserId', randomUserId)
	}
	return randomUserId
}

// Handle route changes and log analytics
router.afterEach(async (to, from) => {
	const cookiesAccepted = localStorage.getItem('cookiesAccepted')
	let userId

	if (cookiesAccepted === 'true') {
		// If cookies are accepted, use the user's IP address as their ID
		userId = (await getIpAddress()) || getOrCreateRandomUserId() // Fallback to random ID if IP fetch fails

		if (process.env.NODE_ENV === 'production' && window.gtag) {
			// Send page view to Google Analytics using window.gtag
			window.gtag('config', 'G-58RRPDKZYB', {
				page_path: to.fullPath,
				page_title: document.title,
			})
			console.log(`Google Analytics`)
		} else {
			console.warn('Google Analytics not initialized yet or in dev mode.')
		}
	} else {
		// If cookies are not accepted, use a random ID stored in localStorage
		userId = getOrCreateRandomUserId()
	}

	const pageUrl = to.fullPath // Get the full path of the current route
	logPageVisit(userId, pageUrl) // Log the visit to Supabase
})

H.init('lgxpo34d', {
	environment: 'production',
	version: 'commit:abcdefg12345',
	networkRecording: {
		enabled: true,
		recordHeadersAndBody: true,
		urlBlocklist: [
			// insert full or partial urls that you don't want to record here
			// Out of the box, Highlight will not record these URLs (they can be safely removed):
			'https://www.googleapis.com/identitytoolkit',
			'https://securetoken.googleapis.com',
		],
	},
})

app.mount('#app')
