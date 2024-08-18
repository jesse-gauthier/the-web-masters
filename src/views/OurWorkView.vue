<template>
	<div>
		<div
			class="hero min-h-screen"
			style="background-image: url('../assets/workspace.jpg')"
		>
			<h1 class="hero-content text-8xl font-bold text-center my-10 text-white">
				Our Work
			</h1>
		</div>
		<section aria-labelledby="portfolio-heading">
			<ProjectsComp />
		</section>
	</div>
</template>

<script setup>
import ProjectsComp from '@/components/ProjectsComp.vue'
import { useHead } from '@unhead/vue'

useHead({
	title: 'Our Work - Portfolio | Ottawa Web Masters',
	meta: [
		{
			name: 'description',
			content:
				'Explore the portfolio of Ottawa Web Masters. See our diverse range of web development projects, including custom websites, e-commerce platforms, and UX/UI designs. Get inspired and envision your next project with us.',
		},
		{
			property: 'og:title',
			content: 'Our Work - Portfolio | Ottawa Web Masters',
		},
		{
			property: 'og:description',
			content:
				'Discover the work of Ottawa Web Masters through our portfolio. From WordPress sites to Shopify stores, see the projects that showcase our expertise.',
		},
		{
			property: 'og:image',
			content: 'https://yourwebsite.com/path-to-portfolio-image.jpg',
		}, // replace with actual image URL
		{ property: 'og:url', content: 'https://yourwebsite.com/portfolio' },
		{
			name: 'keywords',
			content:
				'portfolio, web development, Ottawa Web Masters, web design, projects, case studies',
		},
	],
})
</script>

<style scoped></style>
