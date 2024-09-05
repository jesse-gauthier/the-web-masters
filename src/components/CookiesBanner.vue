<template>
	<div
		v-if="isVisible"
		class="fixed bottom-0 w-full bg-gray-800 text-white p-4 text-center"
	>
		<div class="flex flex-wrap justify-center w-[80vw] mx-auto gap-4">
			<p class="self-center">{{ message }}</p>
			<div class="flex flex-wrap gap-4">
				<button
					@click="acceptCookies"
					class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
				>
					{{ acceptButtonText }}
				</button>
				<button
					@click="declineCookies"
					class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
				>
					{{ declineButtonText }}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// State variables
const isVisible = ref(true)
const message = ref(
	'We use cookies to ensure you get the best experience on our website.'
)
const acceptButtonText = ref('Accept')
const declineButtonText = ref('Decline')

// Generate random user ID (or use a real one if available)
function generateRandomUserId() {
	return Math.random().toString(36).substr(2, 9) // Simple random user ID
}

// Function to handle when the user accepts cookies
function acceptCookies() {
	localStorage.setItem('cookiesAccepted', 'true')
	isVisible.value = false
	enableGoogleAnalytics(true)
}

// Function to handle when the user declines cookies
function declineCookies() {
	localStorage.setItem('cookiesAccepted', 'false')
	isVisible.value = false
	enableGoogleAnalytics(false)
}

// Function to enable/disable Google Analytics
function enableGoogleAnalytics(enable) {
	if (enable) {
		window.gtag('consent', 'update', {
			ad_storage: 'granted',
			analytics_storage: 'granted',
		})
	} else {
		window.gtag('consent', 'update', {
			ad_storage: 'denied',
			analytics_storage: 'denied',
		})
	}
}

// When the component is mounted
onMounted(() => {
	const cookiesAccepted = localStorage.getItem('cookiesAccepted')

	if (cookiesAccepted === 'true') {
		isVisible.value = false
		enableGoogleAnalytics(true)
	} else if (cookiesAccepted === 'false') {
		isVisible.value = false
		enableGoogleAnalytics(false)
	} else {
		enableGoogleAnalytics(false) // Default to non-personalized analytics
	}
})
</script>

<style scoped></style>
