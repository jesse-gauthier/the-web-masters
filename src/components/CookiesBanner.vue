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

// Function to handle when the user accepts cookies
async function acceptCookies() {
	localStorage.setItem('cookiesAccepted', 'true') // Store consent in localStorage
	const ipAddress = await getIpAddress() // Fetch the user's IP address
	if (ipAddress) {
		localStorage.setItem('randomUserId', ipAddress) // Store the IP address as randomUserId in localStorage
	} else {
		localStorage.setItem(
			'randomUserId',
			Math.random().toString(36).substr(2, 9)
		) // Fallback to random ID if IP fetch fails
	}
	isVisible.value = false // Hide the banner
}

// Function to handle when the user declines cookies
function declineCookies() {
	localStorage.setItem('cookiesAccepted', 'false') // Store consent in localStorage
	localStorage.setItem('randomUserId', Math.random().toString(36).substr(2, 9)) // Store a random ID as randomUserId
	isVisible.value = false // Hide the banner
}

// When the component is mounted
onMounted(() => {
	const cookiesAccepted = localStorage.getItem('cookiesAccepted')
	if (cookiesAccepted === 'true' || cookiesAccepted === 'false') {
		isVisible.value = false // Hide the banner if consent was already provided
	}
})
</script>

<style scoped></style>
