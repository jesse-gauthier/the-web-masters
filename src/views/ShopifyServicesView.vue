<template>
	<section>
		<div>
			<!-- Hero Section -->
			<section
				class="hero min-h-screen bg-fixed"
				:style="{ backgroundImage: `url(${backgroundImage})` }"
				aria-labelledby="hero-heading"
			>
				<div class="hero-overlay bg-opacity-60"></div>
				<div class="hero-content flex-col text-white max-w-[55dvw] text-center">
					<h1
						id="hero-heading"
						class="text-3xl text-orange-500 p-8 bg-white bg-opacity-90 rounded-xl font-medium"
					>
						Custom Shopify Websites in Ottawa, ON
					</h1>
					<div class="flex justify-center space-x-4 mt-6">
						<router-link
							to="/contact"
							class="flex btn w-fit bg-white border border-[#2b3c4f] hover:bg-[#2b3d4f] hover:text-white"
							role="button"
							aria-label="Start your Shopify project with us"
						>
							Get Started
						</router-link>
					</div>
				</div>
			</section>

			<!-- Information Text Section -->
			<section
				class="inner-wrapper px-3 py-12 min-h-[50dvh] flex flex-col justify-center"
			>
				<h2 class="text-4xl text-center font-medium text-gray-800">
					Elevate Your Shopify Store with Expert Development in Ottawa, ON
				</h2>
				<hr class="my-6 bg-[#2b3d4f] h-[3px]" />
				<p class="text-lg text-gray-600 max-w-3xl mx-auto">
					We specialize in creating stunning Shopify stores tailored
					specifically for small businesses in Ottawa, ON. Our experienced team
					is dedicated to ensuring your online presence is not only strong and
					effective but also visually appealing and engaging. We understand the
					unique needs of small businesses and work closely with you to design a
					Shopify store that reflects your brand, attracts customers, and drives
					growth. From responsive design and seamless user experience to robust
					functionality and SEO optimization, we take care of every detail to
					help your business succeed online. Partner with us to elevate your
					digital presence and make a lasting impression on your audience.
				</p>
			</section>

			<!-- Technology and Partner Logos Section -->
			<section class="inner-wrapper py-8">
				<h2 class="text-4xl text-center font-medium text-gray-800">
					We Only Work With The Best
				</h2>
				<hr class="my-6 bg-[#2b3d4f] h-[3px]" />
				<div class="grid grid-cols-2 md:grid-cols-5 gap-4 p-6">
					<img
						class="self-center col-span-1 w-[100%]"
						:src="shopifylogo"
						alt="Shopify logo"
					/>
					<img
						class="self-center col-span-1 w-[100%]"
						:src="pageflylogo"
						alt="PageFly logo"
					/>
					<img
						class="self-center col-span-1 w-[100%]"
						:src="klaviyo_logo"
						alt="Klaviyo logo"
					/>
					<img
						class="self-center col-span-1 w-[100%]"
						:src="qb_logo"
						alt="QuickBooks logo"
					/>
					<img
						class="self-center col-span-1 w-[100%]"
						:src="shipstationlogo"
						alt="ShipStation logo"
					/>
				</div>
			</section>

			<!-- Projects Component
			<ProjectsComp /> -->

			<!-- Services Section -->
			<section
				class="flex flex-col text-center max-w-[80dvw] mx-auto my-12 gap-4"
			>
				<h2 class="text-4xl font-medium text-gray-800">Our Services</h2>
				<hr class="my-6 bg-[#2b3d4f] h-[3px]" />
				<ul
					class="list-disc list-inside mx-auto text-gray-600 grid md:grid-cols-2 gap-5"
				>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f]">
						Custom Shopify theme development
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f]">
						App development and customization
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f]">
						Responsive design for mobile and tablet
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f]">
						SEO optimization and performance enhancements
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f]">
						eCommerce solutions and integrations
					</li>
				</ul>
			</section>
		</div>
	</section>
</template>

<script setup>
import ProjectsComp from '@/components/ProjectsComp.vue'
import pageflylogo from '@/assets/pageflylogo.png'
import shopifylogo from '@/assets/shopifylogo.svg'
import klaviyo_logo from '@/assets/klaviyo_logo.webp'
import qb_logo from '@/assets/qb-logo.svg'
import shipstationlogo from '@/assets/shipstation_logo.webp'
import backgroundImage from '@/assets/shopify-background.webp'
import { useHead } from '@unhead/vue'

useHead({
	title: 'Custom Shopify Solutions in Ottawa, ON | Ottawa Web Masters',
	meta: [
		{
			name: 'description',
			content:
				'Ottawa Web Masters specializes in custom Shopify solutions for small businesses in Ottawa, ON. Elevate your eCommerce presence with tailored Shopify development, SEO optimization, and more.',
		},
		{
			name: 'keywords',
			content:
				'Shopify, custom Shopify solutions, Ottawa, Shopify development, eCommerce, web design, SEO, small business, Shopify Ottawa, Shopify themes, Shopify SEO',
		},
		{
			property: 'og:title',
			content: 'Custom Shopify Solutions in Ottawa, ON | Ottawa Web Masters',
		},
		{
			property: 'og:description',
			content:
				'Elevate your Shopify store with our expert development services in Ottawa, ON. From theme customization to SEO, we ensure your eCommerce business thrives online.',
		},
		{
			property: 'og:image',
			content: 'https://yourwebsite.com/path-to-shopify-background-image.jpg', // Replace with actual image URL
		},
		{
			property: 'og:url',
			content: 'https://yourwebsite.com/shopify-solutions',
		},
	],
	script: [
		{
			type: 'application/ld+json',
			json: {
				'@context': 'http://schema.org',
				'@type': 'ProfessionalService',
				name: 'Ottawa Web Masters - Shopify Solutions',
				aggregateRating: {
					'@type': 'AggregateRating',
					ratingValue: '4.9',
					reviewCount: '60',
				},
			},
		},
	],
})
</script>

<style scoped>
.hero-content h1 {
	background: rgba(0, 0, 0, 0.7);
	padding: 1rem;
	border-radius: 0.5rem;
}

@media (max-width: 768px) {
	.hero-content h1 {
		font-size: 2.5rem;
	}
}

ul.list-disc {
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
