<script setup>
import { onMounted } from 'vue'
import HeroComp from '@/components/HeroComp.vue'
import AboutComp from '@/components/about/AboutComp.vue'
import FaqComp from '@/components/faq/FaqComp.vue'
import TestimonyComp from '@/components/TestimonyComp.vue'
import Packages from '@/components/serviceComps/Packages.vue'
import { useHead } from '@unhead/vue'
import AOS from 'aos'

onMounted(() => {
	AOS.init({
		duration: 3000,
	})
})

useHead({
	title: 'Ottawa Web Masters - Leading Web Development Services in Ottawa',
	meta: [
		{
			name: 'description',
			content:
				'Ottawa Web Masters offers professional web development services in Ottawa. We specialize in WordPress, Shopify, UX/UI design, SEO, and more. Contact us today to elevate your online presence.',
		},
		{
			property: 'og:title',
			content:
				'Ottawa Web Masters - Leading Web Development Services in Ottawa',
		},
		{
			property: 'og:description',
			content:
				'Discover top-notch web development and digital services with Ottawa Web Masters. Let us help you build your online presence.',
		},
		{
			property: 'og:image',
			content: 'https://yourwebsite.com/path-to-hero-image.jpg',
		}, // replace with actual image URL
		{ property: 'og:url', content: 'https://yourwebsite.com/' },
		{
			name: 'keywords',
			content:
				'web development, Ottawa, WordPress, Shopify, UX/UI design, SEO, digital marketing',
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

		<FaqComp />
	</main>
</template>

<style scoped>
svg {
	color: #e89e1d;
	align-self: center;
	margin: auto 0;
}
</style>
