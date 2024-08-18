<template>
	<div>
		<!-- Hero Section -->
		<section
			class="hero min-h-screen"
			style="
				background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);
			"
			aria-labelledby="about-us-heading"
		>
			<div class="hero-overlay bg-opacity-60"></div>
			<div class="hero-content text-neutral-content text-center">
				<div class="max-w-md">
					<h1 id="about-us-heading" class="mb-5 text-5xl md:text-8xl font-bold">
						About Us
					</h1>
				</div>
			</div>
		</section>

		<!-- Core Values Section -->
		<section data-aos="fade-up" class="w-[95dvw] md:w-[75dvw] mx-auto mt-14">
			<h2 class="text-center text-4xl capitalize mb-14">
				"We Love What We Do & We Do What We Love"
				<span class="block self-end text-2xl w-full py-2">
					- Ottawa Web Masters
				</span>
			</h2>

			<div class="flex flex-wrap lg:flex-nowrap justify-evenly gap-3">
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
						We are a passionate team of web design specialists based in Ottawa,
						dedicated to creating exceptional websites. Our mission is
						straightforward: small businesses need quality sites, and we love
						crafting them. This guiding principle defines us and influences
						every service we provide.
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
						We serve startups, e-commerce ventures, and small businesses in
						Ottawa and throughout Canada. Our expertise spans across leading
						platforms and languages, including WordPress, Shopify, Joomla, and
						Magento. Whatever your vision, we have the skills to bring it to
						life.
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
						We understand the common challenges businesses face, including ours.
						Building your empire while saving time and money, and avoiding
						stress, is a universal struggle. We empathize and specialize in
						meeting the needs of small businesses, speaking your language, and
						helping you design a website that fulfills all your requirements.
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
		<OttawaMap
			heading="Located in our Nation's Capital
"
		/>
	</div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { onMounted, ref } from 'vue'
import AOS from 'aos'
import OttawaMap from '../components/OttawaMap.vue'

onMounted(() => {
	AOS.init({
		duration: 3000,
	})
})
useHead({
	title: 'About Us - Ottawa Web Masters',
	meta: [
		{
			name: 'description',
			content:
				'Learn more about Ottawa Web Masters, a passionate team of web design specialists dedicated to helping small businesses in Ottawa succeed online. Discover who we are, what we do, and why we do it.',
		},
		{ property: 'og:title', content: 'About Us - Ottawa Web Masters' },
		{
			property: 'og:description',
			content:
				'Meet the Ottawa Web Masters team. We are dedicated to crafting quality websites for small businesses in Ottawa and beyond.',
		},
		{
			property: 'og:image',
			content: 'https://yourwebsite.com/path-to-about-us-image.jpg',
		}, // replace with actual image URL
		{ property: 'og:url', content: 'https://yourwebsite.com/about' },
		{
			name: 'keywords',
			content:
				'about us, Ottawa Web Masters, web design, small business, Ottawa, web development, digital marketing',
		},
	],
})
</script>
