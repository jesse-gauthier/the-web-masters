<template>
	<div>
		<!-- Hero Section -->
		<section
			class="hero min-h-screen"
			style="background-image: url('/assets/about_bg.webp')"
			aria-labelledby="about-us-heading"
		>
			<div class="hero-overlay bg-opacity-60"></div>
			<div class="hero-content text-neutral-content text-center">
				<div class="max-w-md">
					<h1
						id="about-us-heading"
						class="text-5xl font-bold text-orange-500 p-8 bg-white bg-opacity-90 rounded-xl"
					>
						About Ottawa Web Masters
					</h1>
				</div>
			</div>
		</section>

		<!-- Core Values Section -->
		<section data-aos="fade-up" class="w-[95dvw] md:w-[75dvw] mx-auto mt-14">
			<h2 class="text-center text-4xl capitalize mb-14">
				"We Love What We Do & We Do What We Love"
				<span class="block self-end text-2xl w-full py-2">
					- Ottawa Web Masters Team
				</span>
			</h2>

			<div class="flex flex-wrap lg:flex-nowrap justify-center gap-3">
				<!-- Who We Are -->
				<article
					class="lg:w-[33%] border-4 p-3 rounded-md"
					aria-labelledby="who-we-are-heading"
				>
					<h3
						id="who-we-are-heading"
						class="text-2xl font-bold text-center py-2"
					>
						Who We Are
					</h3>
					<p class="px-1 text-justify">
						We are a dedicated team of web design and development specialists
						based in Ottawa, passionate about creating exceptional websites for
						small businesses. Our mission is simple: empower small businesses
						with quality digital solutions. This guiding principle shapes every
						service we offer.
					</p>
					<div class="flex justify-center my-3">
						<router-link to="/freeseo" class="btn btn-outline"
							>Get A Free SEO Audit</router-link
						>
					</div>
				</article>

				<!-- What We Do -->
				<article
					class="lg:w-[33%] border-4 p-3 rounded-md"
					aria-labelledby="what-we-do-heading"
				>
					<h3
						id="what-we-do-heading"
						class="text-2xl font-bold text-center py-2"
					>
						What We Do
					</h3>
					<p class="px-1 text-justify">
						We serve startups, e-commerce ventures, and small businesses across
						Ottawa and Canada. Our expertise spans leading platforms like
						WordPress, Shopify, Joomla, and Magento. Whatever your digital
						vision, we have the expertise to bring it to life.
					</p>
					<div class="flex justify-center my-3">
						<router-link to="/freeseo" class="btn btn-outline"
							>Get A Free SEO Audit</router-link
						>
					</div>
				</article>

				<!-- Why We Do It -->
				<article
					class="lg:w-[33%] border-4 p-3 rounded-md"
					aria-labelledby="why-we-do-it-heading"
				>
					<h3
						id="why-we-do-it-heading"
						class="text-2xl font-bold text-center py-2"
					>
						Why We Do It
					</h3>
					<p class="px-1 text-justify">
						We understand the challenges businesses face—balancing time, money,
						and growth. We empathize with these struggles because we've been
						there too. That's why we specialize in creating websites that not
						only meet your needs but also help you overcome these challenges
						effectively.
					</p>
					<div class="flex justify-center my-3">
						<router-link to="/freeseo" class="btn btn-outline"
							>Get A Free SEO Audit</router-link
						>
					</div>
				</article>
			</div>
		</section>

		<!-- Location Section -->
		<section id="location" aria-labelledby="location-heading">
			<OttawaMap heading="Located in Our Nation's Capital" />
		</section>
	</div>
</template>
<script setup>
import { useHead } from '@unhead/vue'
import { onMounted } from 'vue'
import AOS from 'aos'
import OttawaMap from '../components/OttawaMap.vue'

onMounted(() => {
	AOS.init({
		duration: 3000,
	})
})

useHead({
	title: 'About Our Team - Ottawa, ON Web Masters',
	meta: [
		{
			name: 'description',
			content:
				'Meet the passionate team behind Ottawa Web Masters. We specialize in web design and development for small businesses in Ottawa and beyond. Discover our mission and values.',
		},
		{ property: 'og:title', content: 'About Us - Ottawa Web Masters' },
		{
			property: 'og:description',
			content:
				'Learn more about the Ottawa Web Masters team. We are committed to helping small businesses succeed online with quality web development services.',
		},
		{
			name: 'keywords',
			content:
				'about us, Ottawa Web Masters, web design, web development, small business, Ottawa, digital marketing, web development Ottawa, team values, web design Ottawa, digital solutions',
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
					reviewCount: '85',
				},
			},
		},
	],
})
</script>
