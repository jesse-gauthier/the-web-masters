<template>
	<div>
		<!-- Hero Section -->
		<div
			class="hero min-h-screen"
			style="background-image: url('../assets/workspace.jpg')"
			aria-labelledby="portfolio-heading"
		>
			<div class="hero-overlay bg-opacity-60"></div>
			<div class="hero-content text-neutral-content text-center">
				<h1
					id="portfolio-heading"
					class="text-5xl font-bold text-orange-500 p-8 bg-white bg-opacity-90 rounded-xl"
				>
					Our Portfolio
				</h1>
			</div>
		</div>

		<!-- Projects Section -->
		<section aria-labelledby="projects-heading">
			<ProjectsComp />
		</section>
	</div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { useHead } from '@unhead/vue'

// Dynamic import for ProjectsComp component
const ProjectsComp = defineAsyncComponent(
	() => import('@/components/ProjectsComp.vue')
)

useHead({
	title: 'Explore Our Portfolio | Ottawa Web Masters',
	meta: [
		{
			name: 'description',
			content:
				'Explore the portfolio of Ottawa Web Masters, showcasing our expertise in web development and design. Discover projects that highlight our skills in WordPress, Shopify, and more.',
		},
		{
			property: 'og:title',
			content: 'Our Portfolio - Web Development Projects | Ottawa Web Masters',
		},
		{
			property: 'og:description',
			content:
				'Browse through our portfolio at Ottawa Web Masters to see examples of our work. From WordPress to Shopify, our projects demonstrate our ability to deliver exceptional web solutions.',
		},
		{
			name: 'keywords',
			content:
				'portfolio, web development portfolio, Ottawa Web Masters projects, web design examples, WordPress projects, Shopify portfolio, web development case studies',
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
					reviewCount: '100',
				},
			},
		},
	],
})
</script>

<style scoped></style>
