<script setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import AOS from 'aos'

// Static imports for components
import HeroComp from '@/components/HeroComp.vue'
import AboutComp from '@/components/about/AboutComp.vue'
import FaqComp from '@/components/faq/FaqComp.vue'
import TestimonyComp from '@/components/TestimonyComp.vue'
import Packages from '@/components/serviceComps/Packages.vue'
import OttawaMap from '@/components/OttawaMap.vue'
import SeoChecklistForm from '@/components/emailSignups/SeoChecklistForm.vue'

onMounted(() => {
	AOS.init({
		duration: 3000,
	})
})

useHead({
	title: 'Ottawa Web Masters - Premier Web Development Services in Ottawa',
	meta: [
		{
			name: 'description',
			content:
				'Explore premier web development services in Ottawa with Ottawa Web Masters. Specializing in WordPress, Shopify, UX/UI design, SEO, and digital marketing.',
		},
		{
			property: 'og:title',
			content:
				'Ottawa Web Masters - Leading Web Development Services in Ottawa',
		},
		{
			property: 'og:description',
			content:
				'Top Ottawa web development services specializing in WordPress, Shopify, UX/UI design, SEO, and more. Build your digital presence with Ottawa Web Masters.',
		},
		{
			name: 'keywords',
			content:
				'Ottawa web development, WordPress development, Shopify solutions, UX/UI design, SEO services, digital marketing, Ottawa digital services, web design Ottawa, professional web development Ottawa, ecommerce solutions Ottawa',
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
					reviewCount: '120',
				},
			},
		},
	],
})
</script>

<template>
	<main class="flex flex-col">
		<!-- Hero Section -->
		<section id="hero" aria-labelledby="hero-heading">
			<HeroComp />
		</section>

		<!-- About Section -->
		<section id="about" aria-labelledby="about-heading">
			<AboutComp />
		</section>

		<!-- Testimonial Section -->
		<section aria-labelledby="testimonials-heading">
			<TestimonyComp />
		</section>

		<!-- Packages Section -->
		<section
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
			aria-labelledby="packages-heading"
		>
			<!-- Wordpress -->
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
		</section>

		<!-- SEO Checklist Form Section -->
		<section
			class="max-w-xl mx-auto my-4"
			aria-labelledby="seochecklist-heading"
		>
			<SeoChecklistForm />
		</section>

		<!-- FAQ Section -->
		<FaqComp aria-labelledby="faq-heading" />

		<!-- Ottawa Map Section -->
		<section id="location" aria-labelledby="location-heading">
			<OttawaMap heading="Located in Our Nation's Capital" />
		</section>
	</main>
</template>
