<template>
	<div
		class="min-h-screen flex items-center justify-center bg-[#2b3d4f] py-12 px-4 sm:px-6 lg:px-8"
	>
		<div class="max-w-md w-full space-y-8">
			<div class="text-center">
				<h2 class="text-3xl font-extrabold text-white">
					Request a Free SEO Audit
				</h2>
				<p class="mt-2 text-sm text-[#febf45]">
					Fill out the form below to get started
				</p>
			</div>
			<form @submit.prevent="submitForm" class="space-y-6">
				<div class="rounded-md shadow-sm -space-y-px">
					<div>
						<label for="name" class="sr-only">Name</label>
						<input
							v-model="form.name"
							id="name"
							name="name"
							type="text"
							required
							class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#febf45] focus:border-[#febf45] focus:z-10 sm:text-sm"
							placeholder="Your Name"
						/>
					</div>
					<div>
						<label for="email" class="sr-only">Email address</label>
						<input
							v-model="form.email"
							id="email"
							name="email"
							type="email"
							required
							class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#febf45] focus:border-[#febf45] focus:z-10 sm:text-sm"
							placeholder="Email Address"
						/>
					</div>
					<div>
						<label for="website" class="sr-only">Website URL</label>
						<input
							v-model="form.website"
							id="website"
							name="website"
							type="url"
							required
							class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#febf45] focus:border-[#febf45] focus:z-10 sm:text-sm"
							placeholder="Website URL"
						/>
					</div>
				</div>

				<div class="mt-4">
					<label for="message" class="block text-sm font-medium text-[#febf45]"
						>Additional Information</label
					>
					<textarea
						v-model="form.message"
						id="message"
						name="message"
						rows="3"
						class="mt-1 shadow-sm focus:ring-[#febf45] focus:border-[#febf45] block w-full sm:text-sm border border-gray-300 rounded-md"
						placeholder="Tell us more about your business..."
					></textarea>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input
							v-model="form.newsletter"
							id="newsletter"
							name="newsletter"
							type="checkbox"
							class="h-4 w-4 text-[#febf45] focus:ring-[#febf45] border-gray-300 rounded"
						/>
						<label for="newsletter" class="ml-2 block text-sm text-[#febf45]">
							Sign up for our newsletter
						</label>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#febf45] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#febf45]"
					>
						Request Audit
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
	name: '',
	email: '',
	website: '',
	message: '',
	newsletter: false,
})

const submitForm = async () => {
	try {
		const response = await fetch('https://ottawawebmasters.ca/seoform.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		})

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		const result = await response.json()
		alert(result.message)
		// Reset form
		form.name = ''
		form.email = ''
		form.website = ''
		form.message = ''
		form.newsletter = false
	} catch (error) {
		alert('There was an error submitting the form. Please try again.')
		console.error('Error:', error)
	}
}
</script>

<style>
/* Additional custom styles can be added here */
</style>
