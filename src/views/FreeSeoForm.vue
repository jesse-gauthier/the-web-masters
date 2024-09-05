<script setup>
import { useHead } from '@unhead/vue'
import { reactive, ref } from 'vue'
import SeoChecklistForm from '@/components/emailSignups/SeoChecklistForm.vue'
import { logsCustomEvents } from '@/supabaseClient'

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

// State for form submission messages
const formMessage = ref(null)
const formMessageType = ref('')

// Function to handle the SEO Audit form submission
const submitAuditForm = async () => {
	const randomUserId = localStorage.getItem('randomUserId') || 'anno'
	// Send the form data to Supabase
	await logsCustomEvents('seo_audit_request', randomUserId)

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

		// Display success message below the form
		formMessage.value = result.message
		formMessageType.value = 'success'

		// Reset form
		auditForm.name = ''
		auditForm.email = ''
		auditForm.website = ''
		auditForm.message = ''
		auditForm.newsletter = false
	} catch (error) {
		// Display error message below the form
		formMessage.value =
			'There was an error submitting the form. Please try again.'
		formMessageType.value = 'error'
		console.error('Error:', error)
	}
}
</script>

<template>
	<div class="min-h-screen bg-[#2b3d4f] py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto space-y-16">
			<!-- Section 1: Understanding SEO and Its Impact on Your Business -->
			<div data-aos="fade-up" class="bg-white p-8 rounded-lg shadow-lg">
				<div class="text-center">
					<h2 class="text-3xl font-extrabold text-gray-900">
						Understanding SEO and Its Impact on Your Business
					</h2>
					<p class="mt-4 text-sm text-gray-600">
						Search Engine Optimization (SEO) is more than just a buzzword—it's a
						crucial element of digital marketing that determines your website's
						visibility on search engines. In today's digital landscape, where
						the majority of online experiences begin with a search engine, SEO
						is essential for driving traffic, enhancing brand awareness, and
						increasing conversions. Effective SEO strategies not only improve
						your website's ranking but also provide a better user experience,
						making it easier for potential customers to find and interact with
						your business.
					</p>
					<p class="mt-2 text-sm text-gray-600">
						Investing in SEO means investing in your business's future. With the
						right optimization techniques, you can achieve sustainable growth,
						stay ahead of competitors, and build a strong online presence that
						consistently brings in high-quality traffic.
					</p>
				</div>
			</div>

			<!-- Section 2: Get a Free SEO Checklist -->
			<SeoChecklistForm />

			<!-- Section 3: Request a Free SEO Audit -->
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

				<!-- Display form submission message below the form -->
				<div
					v-if="formMessage"
					:class="{
						'text-green-600': formMessageType === 'success',
						'text-red-600': formMessageType === 'error',
					}"
					class="mt-4 text-center"
				>
					{{ formMessage }}
				</div>
			</div>

			<!-- Section 4: Why SEO is Essential for Long-Term Success -->
			<div data-aos="fade-up" class="bg-white p-8 rounded-lg shadow-lg">
				<div class="text-center">
					<h2 class="text-3xl font-extrabold text-gray-900">
						Why SEO is Essential for Long-Term Success
					</h2>
					<p class="mt-4 text-sm text-gray-600">
						SEO is not just a one-time task but an ongoing process that ensures
						your website remains relevant and competitive in search engine
						results. As search algorithms evolve, so should your SEO strategies.
						A well-optimized website can lead to long-term benefits such as:
					</p>
					<ul class="mt-4 text-sm text-gray-600 list-disc list-inside">
						<li>
							Increased organic traffic from users actively searching for your
							products or services.
						</li>
						<li>
							Improved credibility and trust with both search engines and users.
						</li>
						<li>Higher conversion rates due to targeted traffic.</li>
						<li>
							A competitive edge in your industry by staying updated with SEO
							trends.
						</li>
					</ul>
					<p class="mt-2 text-sm text-gray-600">
						By maintaining a strong SEO strategy, your business can achieve
						consistent growth and establish a dominant online presence that is
						crucial for long-term success.
					</p>
				</div>
			</div>

			<!-- Section 5: Proven Results – Our Client Success Stories -->
			<div data-aos="fade-up" class="bg-white p-8 rounded-lg shadow-lg">
				<div class="text-center">
					<h2 class="text-3xl font-extrabold text-gray-900">
						Proven Results – Our Client Success Stories
					</h2>
					<p class="mt-2 text-sm text-gray-600">
						We take pride in the results we achieve for our clients. Here are
						some of the success stories where our SEO strategies led to
						significant increases in page views and overall online performance.
					</p>
					<div
						class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
					>
						<!-- Review 1 -->
						<div class="bg-gray-100 p-4 rounded-lg shadow">
							<p class="text-sm text-gray-600 mt-2">
								"Our website saw a 120% increase in organic traffic within three
								months thanks to the targeted SEO strategies implemented by the
								team."
							</p>
						</div>
						<!-- Review 2 -->
						<div class="bg-gray-100 p-4 rounded-lg shadow">
							<p class="text-sm text-gray-600 mt-2">
								"After the SEO optimization, we experienced a 250% surge in page
								views, leading to higher engagement and conversions."
							</p>
						</div>
						<!-- Review 3 -->
						<div class="bg-gray-100 p-4 rounded-lg shadow">
							<p class="text-sm text-gray-600 mt-2">
								"The team’s efforts resulted in a remarkable 400% increase in
								page views, which greatly improved our online visibility."
							</p>
						</div>
						<!-- Review 4 -->
						<div class="bg-gray-100 p-4 rounded-lg shadow">
							<p class="text-sm text-gray-600 mt-2">
								"We achieved a 180% increase in organic traffic, making our
								website a go-to resource in our industry."
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
