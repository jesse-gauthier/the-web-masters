<template>
	<div data-aos="fade-up" class="bg-white p-8 rounded-lg shadow-lg">
		<div class="text-center">
			<h3 class="text-3xl poppins-regular leading-relaxed">
				<span class="">Get Your </span>
				<span class="bg-[#E89E1D] px-5 text-white rounded brand-font font-light"
					>Free 40</span
				>
				item SEO Checklist
			</h3>
			<p class="mt-2 text-sm text-gray-600">
				Enter your email below to receive a free copy of our 40 item SEO
				checklist.
			</p>
		</div>
		<form
			v-if="!formSubmitted"
			@submit.prevent="submitChecklistForm"
			class="mt-8 space-y-6 max-w-md mx-auto"
		>
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="email" class="sr-only">Email Address</label>
					<input
						v-model="checklistForm.email"
						id="email"
						name="email"
						type="email"
						required
						class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#febf45] focus:border-[#febf45] focus:z-10 sm:text-sm"
						placeholder="Email Address"
					/>
				</div>
			</div>
			<div>
				<button
					type="submit"
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-[#E89E1D] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E89E1D]"
				>
					Download Checklist
				</button>
			</div>
		</form>
		<div v-else class="mt-8 text-center text-green-600">
			<p>Check your email for the download link!</p>
		</div>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { logsCustomEvents } from '@/supabaseClient'

// Form data for the SEO Checklist form
const checklistForm = reactive({
	email: '',
})

// State to track form submission
const formSubmitted = ref(false)

// Function to handle the SEO Checklist form submission
const submitChecklistForm = async () => {
	const randomUserId = localStorage.getItem('randomUserId') || 'anno'
	// Send the form data to Supabase
	await logsCustomEvents('seo_checklist_download', randomUserId)
	try {
		const response = await fetch(
			'https://ottawawebmasters.ca/seo_checklist.php',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(checklistForm),
			}
		)

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		const result = await response.json()

		// Display the success message
		formSubmitted.value = true

		// Custom Google Analytics Event
		if (window.gtag) {
			window.gtag('event', 'email_submit', {
				event_category: 'Checklist',
				event_label: 'SEO Checklist Email Submission',
				value: 1,
			})
		}

		// Reset form after showing the message (optional)
		setTimeout(() => {
			formSubmitted.value = false
			checklistForm.email = ''
		}, 5000) // Reset after 5 seconds
	} catch (error) {
		console.error('Error:', error)
	}
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
