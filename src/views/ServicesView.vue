<template>
	<!-- Main Services Section -->
	<HeroTemplate
		title="Our Professional Web Services"
		subTitle="Tailored Digital Solutions to Elevate Your Online Presence"
		backgroundImage="/assets/branding/contact-image.jpg"
	/>
	<section aria-labelledby="services-heading" class="">
		<!-- Services Grid -->
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
		>
			<!-- WordPress Development Section -->
			<div data-aos="fade-up" aria-labelledby="wordpress-development">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
					>
						<h2
							id="wordpress-development"
							class="text-2xl font-semibold mb-4 text-gray-900"
						>
							Expert WordPress Development Services
						</h2>
						<p class="text-gray-700">
							Boost your online presence with our customized WordPress
							solutions. From dynamic blogs to robust e-commerce sites, our
							WordPress development services deliver flexibility, power, and
							unmatched usability tailored to your needs.
						</p>
						<RouterLink
							to="/wordpress"
							class="btn btn-outline w-fit mx-auto mt-4"
							aria-label="Learn More About WordPress Development"
						>
							Learn More About WordPress Development
						</RouterLink>
					</div>
				</div>
			</div>

			<!-- Shopify Development Section -->
			<div data-aos="fade-up" aria-labelledby="shopify-development">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
					>
						<h2
							id="shopify-development"
							class="text-2xl font-semibold mb-4 text-gray-900"
						>
							Shopify Development Solutions
						</h2>
						<p class="text-gray-700">
							Transform your e-commerce business with our specialized Shopify
							development services. We create bespoke themes, integrate powerful
							apps, and ensure your online store stands out and functions
							smoothly, driving sales and customer satisfaction.
						</p>
						<RouterLink
							to="/shopify"
							class="btn btn-outline w-fit mx-auto mt-auto"
							aria-label="Learn More About Shopify Development"
						>
							Learn More About Shopify Development
						</RouterLink>
					</div>
				</div>
			</div>

			<!-- SEO Services Section -->
			<div data-aos="fade-up" aria-labelledby="seo-services">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
					>
						<h2
							id="seo-services"
							class="text-2xl font-semibold mb-4 text-gray-900"
						>
							Professional SEO Services
						</h2>
						<p class="text-gray-700">
							Improve your website’s visibility and attract quality traffic with
							our advanced SEO strategies. We specialize in keyword research,
							on-page optimization, and link building to help your site rank
							higher in search engine results.
						</p>
						<RouterLink
							to="/seo"
							class="btn btn-outline w-fit mx-auto mt-auto"
							aria-label="Learn More About SEO Services"
						>
							Learn More About SEO
						</RouterLink>
					</div>
				</div>
			</div>

			<!-- UX/UI Design Section -->
			<div data-aos="fade-up" aria-labelledby="ux-ui-design">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
					>
						<h2
							id="ux-ui-design"
							class="text-2xl font-semibold mb-4 text-gray-900"
						>
							UX/UI Design Expertise
						</h2>
						<p class="text-gray-700">
							Enhance user satisfaction and drive conversions with our expert
							UX/UI design services. We craft intuitive and visually stunning
							designs that focus on user experience, ensuring that your digital
							products are both functional and engaging.
						</p>
						<RouterLink
							to="/uxdesign"
							class="btn btn-outline w-fit mx-auto mt-4"
							aria-label="Learn More About SEO Services"
						>
							Learn More About UX Design
						</RouterLink>
					</div>
				</div>
			</div>

			<!-- Website Optimization Section -->
			<div data-aos="fade-up" aria-labelledby="website-optimization">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
					>
						<h2
							id="website-optimization"
							class="text-2xl font-semibold mb-4 text-gray-900"
						>
							Advanced Website Optimization
						</h2>
						<p class="text-gray-700">
							Maximize your website's performance with our comprehensive
							optimization services. We focus on enhancing speed,
							responsiveness, and user experience across all devices to ensure
							seamless and efficient website operation.
						</p>
						<RouterLink
							to="/websiteoptimization"
							class="btn btn-outline w-fit mx-auto mt-4"
							aria-label="Learn More About SEO Services"
						>
							Learn More About Optimization
						</RouterLink>
					</div>
				</div>
			</div>

			<!-- Consultation Services Section -->
			<div data-aos="fade-up" aria-labelledby="consultation-services">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
					>
						<h2
							id="consultation-services"
							class="text-2xl font-semibold mb-4 text-gray-900"
						>
							Expert Consultation Services
						</h2>
						<p class="text-gray-700">
							Navigate the complexities of the digital world with our expert
							consultation services. From starting new projects to optimizing
							existing ones, our consultants provide strategic insights and
							personalized guidance to help you meet your business goals.
						</p>
						<RouterLink
							to="/consultation-services"
							class="btn btn-outline w-fit mx-auto mt-4"
							aria-label="Learn More About SEO Services"
						>
							Learn More About Consultation Services
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import AOS from 'aos'

import HeroTemplate from '@/components/misc/HeroTemplate.vue'

onMounted(() => {
	AOS.init({
		duration: 3000,
		once: true,
	})
})

useHead({
	title: 'Professional Web Services in Ottawa - Ottawa Web Masters',
	meta: [
		{
			name: 'description',
			content:
				'Explore professional web services offered by Ottawa Web Masters, including WordPress development, Shopify development, SEO, UX/UI design, and more.',
		},
		{
			name: 'keywords',
			content:
				'web services Ottawa, WordPress development, Shopify development, SEO services, UX/UI design, website optimization, digital consultation, Ottawa Web Masters, web development Ottawa',
		},
		{
			property: 'og:title',
			content: 'Professional Web Services in Ottawa - Ottawa Web Masters',
		},
		{
			property: 'og:description',
			content:
				'Discover Ottawa Web Masters’ range of services: WordPress, Shopify, SEO, UX/UI design, and comprehensive consultation services.',
		},
	],
	script: [
		{
			type: 'application/ld+json',
			json: {
				'@context': 'http://schema.org',
				'@type': 'ProfessionalService',
				name: 'Ottawa Web Masters',
				aggregateRating: {
					'@type': 'AggregateRating',
					ratingValue: '4.8',
					reviewCount: '95',
				},
			},
		},
	],
})
</script>

<style scoped>
/* #contact_banner {
	background-image: url('../assets/branding/contact-image.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
} */
</style>
