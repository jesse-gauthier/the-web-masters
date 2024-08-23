<script setup>
import { onMounted, defineAsyncComponent } from 'vue'
import { useHead } from '@unhead/vue'
import AOS from 'aos'

// Dynamic imports for components
const HeroComp = defineAsyncComponent(() => import('@/components/HeroComp.vue'))
const AboutComp = defineAsyncComponent(
	() => import('@/components/about/AboutComp.vue')
)
const FaqComp = defineAsyncComponent(
	() => import('@/components/faq/FaqComp.vue')
)
const TestimonyComp = defineAsyncComponent(
	() => import('@/components/TestimonyComp.vue')
)
const Packages = defineAsyncComponent(
	() => import('@/components/serviceComps/Packages.vue')
)
const OttawaMap = defineAsyncComponent(
	() => import('@/components/OttawaMap.vue')
)
const SeoChecklistForm = defineAsyncComponent(
	() => import('@/components/emailSignups/SeoChecklistForm.vue')
)

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
		<section aria-labelledby="packages-heading">
			<Packages />
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
