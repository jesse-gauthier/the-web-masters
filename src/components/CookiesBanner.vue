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

// Accept cookies function
function acceptCookies() {
	localStorage.setItem('cookiesAccepted', 'true')
	isVisible.value = false
	enableGoogleAnalytics()
}

// Decline cookies function
function declineCookies() {
	localStorage.setItem('cookiesAccepted', 'false')
	isVisible.value = false
}

// Function to enable Google Analytics
function enableGoogleAnalytics() {
	// Insert Google Analytics gtag script
	window.dataLayer = window.dataLayer || []
	function gtag() {
		window.dataLayer.push(arguments)
	}
	gtag('js', new Date())

	// Your Google Analytics Tracking ID
	gtag('config', 'G-58RRPDKZYB')
}

// Check user consent on page load
onMounted(() => {
	const cookiesAccepted = localStorage.getItem('cookiesAccepted')
	if (cookiesAccepted === 'true') {
		isVisible.value = false
		enableGoogleAnalytics()
	} else if (cookiesAccepted === 'false') {
		isVisible.value = false
		// Optionally, disable Google Analytics if it was previously enabled
	}
})
</script>

<style scoped></style>
