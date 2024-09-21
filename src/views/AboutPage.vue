<template>
	<div>
		<!-- Hero Section -->

		<HeroTemplate
			backgroundImage="/assets/about_bg.webp"
			title="About Ottawa Web Masters"
			subTitle="We're passionate about helping small businesses thrive with top-notch digital solutions"
		/>

		<!-- Core Values Section -->
		<section data-aos="fade-up" class="w-[95dvw] md:w-[75dvw] mx-auto mt-14">
			<h2 class="text-center text-4xl font-bold capitalize mb-14">
				"We love what we do, and we do it with passion"
				<span class="block self-end text-2xl font-medium w-full py-2">
					- Ottawa Web Masters Team
				</span>
			</h2>

			<div class="flex flex-wrap lg:flex-nowrap justify-center gap-6">
				<!-- Who We Are -->
				<article
					class="lg:w-[30%] border-4 p-6 rounded-md shadow-lg bg-white flex flex-col"
					aria-labelledby="who-we-are-heading"
				>
					<h3
						id="who-we-are-heading"
						class="text-2xl font-semibold text-center py-2"
					>
						Who We Are
					</h3>
					<p class="px-2 text-justify text-gray-700">
						We are a dedicated team of web design and development specialists
						based in Ottawa, passionate about creating exceptional websites for
						small businesses. Our mission is simple: empower small businesses
						with quality digital solutions. This guiding principle shapes every
						service we offer.
					</p>
					<div class="flex flex-col justify-end grow">
						<router-link
							to="/freeseo"
							class="btn bg-[#E89E1D] text-white hover:bg-orange-600"
							>Get Your Free SEO Audit</router-link
						>
					</div>
				</article>

				<!-- What We Do -->
				<article
					class="lg:w-[30%] border-4 p-6 rounded-md shadow-lg bg-white flex flex-col"
					aria-labelledby="what-we-do-heading"
				>
					<h3
						id="what-we-do-heading"
						class="text-2xl font-semibold text-center py-2"
					>
						What We Do
					</h3>
					<p class="px-2 text-justify text-gray-700">
						We serve startups, e-commerce ventures, and small businesses across
						Ottawa and Canada. Our expertise spans leading platforms like
						WordPress, Shopify, Joomla, and Magento. Whatever your digital
						vision, we have the expertise to bring it to life.
					</p>
					<div class="flex flex-col justify-end grow">
						<router-link
							to="/freeseo"
							class="bg-[#E89E1D] text-white hover:bg-orange-600 mt-auto btn"
							>Get Your Free SEO Audit</router-link
						>
					</div>
				</article>

				<!-- Why We Do It -->
				<article
					class="lg:w-[30%] border-4 p-6 rounded-md shadow-lg bg-white flex flex-col"
					aria-labelledby="why-we-do-it-heading"
				>
					<h3
						id="why-we-do-it-heading"
						class="text-2xl font-semibold text-center py-2"
					>
						Why We Do It
					</h3>
					<p class="px-2 text-justify text-gray-700">
						We understand the challenges businesses face—balancing time, money,
						and growth. We empathize with these struggles because we've been
						there too. That's why we specialize in creating websites that not
						only meet your needs but also help you overcome these challenges
						effectively.
					</p>
					<div class="flex flex-col justify-end grow mt-5">
						<router-link
							to="/freeseo"
							class="bg-[#E89E1D] text-white hover:bg-orange-600 mt-auto btn"
							>Get Your Free SEO Audit</router-link
						>
					</div>
				</article>
			</div>
		</section>

		<!-- Location Section -->
		<section id="location" aria-labelledby="location-heading" class="mt-20">
			<OttawaMap heading="Located in Our Nation's Capital" />
			<div class="text-center mt-6">
				<p class="text-lg text-gray-700">
					Visit us in Ottawa, or reach out to discover how we can help your
					business grow.
				</p>
				<router-link
					to="/contact"
					class="btn bg-[#E89E1D] text-white hover:bg-orange-600 mt-4"
				>
					Contact Us
				</router-link>
			</div>
		</section>
	</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import AOS from 'aos'

import HeroTemplate from '@/components/misc/HeroTemplate.vue'
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
