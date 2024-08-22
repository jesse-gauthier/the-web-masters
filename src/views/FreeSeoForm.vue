<template>
	<div class="min-h-screen bg-[#2b3d4f] py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto space-y-16">
			<!-- Section 1: Get a Free SEO Checklist -->
			<SeoChecklistForm />

			<!-- Section 2: Request a Free SEO Audit -->
			<div data-aos="fade-up" class="bg-white p-8 rounded-lg shadow-lg">
				<div class="text-center">
					<h2 class="text-3xl font-extrabold text-gray-900">
						Request a Free SEO Audit
					</h2>
					<p class="mt-2 text-sm text-gray-600">
						Fill out the form below to start improving your website's SEO with a
						free audit.
					</p>
				</div>
				<form @submit.prevent="submitAuditForm" class="mt-8 space-y-6">
					<div class="rounded-md shadow-sm -space-y-px">
						<!-- Name Field -->
						<div>
							<label for="name" class="sr-only">Name</label>
							<input
								v-model="auditForm.name"
								id="name"
								name="name"
								type="text"
								required
								class="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#febf45] focus:border-[#febf45] focus:z-10 sm:text-sm"
								placeholder="Your Name"
							/>
						</div>
						<!-- Email Field -->
						<div>
							<label for="email" class="sr-only">Email Address</label>
							<input
								v-model="auditForm.email"
								id="email"
								name="email"
								type="email"
								required
								class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#febf45] focus:border-[#febf45] focus:z-10 sm:text-sm"
								placeholder="Email Address"
							/>
						</div>
						<!-- Website URL Field -->
						<div>
							<label for="website" class="sr-only">Website URL</label>
							<input
								v-model="auditForm.website"
								id="website"
								name="website"
								type="url"
								required
								class="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#febf45] focus:border-[#febf45] focus:z-10 sm:text-sm"
								placeholder="Website URL"
							/>
						</div>
					</div>

					<!-- Additional Information Field -->
					<div class="mt-4">
						<label
							for="message"
							class="block text-sm font-medium text-gray-900"
						>
							Additional Information
						</label>
						<textarea
							v-model="auditForm.message"
							id="message"
							name="message"
							rows="3"
							class="mt-1 shadow-sm focus:ring-[#febf45] focus:border-[#febf45] block w-full sm:text-sm border border-gray-300 rounded-md"
							placeholder="Tell us more about your business..."
						></textarea>
					</div>

					<!-- Newsletter Signup Field -->
					<div class="flex items-center justify-between mt-4">
						<div class="flex items-center">
							<input
								v-model="auditForm.newsletter"
								id="newsletter"
								name="newsletter"
								type="checkbox"
								class="h-4 w-4 text-[#febf45] focus:ring-[#febf45] border-gray-300 rounded"
							/>
							<label for="newsletter" class="ml-2 block text-sm text-gray-900">
								Sign up for our newsletter
							</label>
						</div>
					</div>

					<!-- Submit Button -->
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
	</div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { reactive } from 'vue'
import SeoChecklistForm from '@/components/emailSignups/SeoChecklistForm.vue'

// Metadata for the page
useHead({
	title: 'SEO Tools - Free Checklist and Audit',
	meta: [
		{
			name: 'description',
			content:
				'Download a free SEO checklist and request a free SEO audit for your website. Improve your search engine rankings with our expert advice.',
		},
		{
			property: 'og:title',
			content: 'SEO Tools - Free Checklist and Audit',
		},
		{
			property: 'og:description',
			content:
				'Request a free SEO audit and download a comprehensive SEO checklist to optimize your website.',
		},
		{
			property: 'og:image',
			content: 'https://yourwebsite.com/path-to-seo-tools-image.jpg', // Replace with actual image URL
		},
		{ property: 'og:url', content: 'https://yourwebsite.com/seo-tools' },
		{
			name: 'keywords',
			content:
				'SEO tools, free SEO checklist, SEO audit, website audit, search engine optimization, digital marketing, improve SEO, Ottawa Web Masters, SEO services, website optimization',
		},
	],
	script: [
		{
			type: 'application/ld+json',
			json: {
				'@context': 'http://schema.org',
				'@type': 'ProfessionalService',
				name: 'Ottawa Web Masters - SEO Tools',
				aggregateRating: {
					'@type': 'AggregateRating',
					ratingValue: '4.9',
					reviewCount: '50',
				},
			},
		},
	],
})

// Form data for the SEO Audit form
const auditForm = reactive({
	name: '',
	email: '',
	website: '',
	message: '',
	newsletter: false,
})

// Function to handle the SEO Audit form submission
const submitAuditForm = async () => {
	try {
		const response = await fetch('https://ottawawebmasters.ca/seoform.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(auditForm),
		})

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		const result = await response.json()
		alert(result.message)

		// Reset form
		auditForm.name = ''
		auditForm.email = ''
		auditForm.website = ''
		auditForm.message = ''
		auditForm.newsletter = false
	} catch (error) {
		alert('There was an error submitting the form. Please try again.')
		console.error('Error:', error)
	}
}
</script>

<style scoped></style>
