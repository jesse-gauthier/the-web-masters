<template>
	<main class="">
		<!-- Hero -->
		<HeroTemplate
			title="Custom WordPress Websites in Ottawa"
			subTitle="We specialize in crafting stunning WordPress websites tailored for small businesses in Ottawa, including ByWard Market, Glebe, and Kanata. Our expert team understands the local market and is committed to building a strong, effective, and visually captivating online presence for your business"
			backgroundImage="./assets/wordpress2.jpg"
		/>

		<!-- Information Text -->
		<section
			data-aos="fade-up"
			class="inner-wrapper px-3 py-4 min-h-[50dvh] flex flex-col justify-center"
		>
			<h3 class="text-4xl">WordPress Design Services in Ottawa</h3>
			<hr class="my-6 bg-[#2b3d4f] h-[3px]" />
			<p class="text-lg self-center text-gray-600">
				We specialize in creating stunning WordPress websites tailored
				specifically for small businesses. Our experienced team is dedicated to
				ensuring your online presence is not only strong and effective but also
				visually appealing and engaging. We understand the unique needs of small
				businesses and work closely with you to design a website that reflects
				your brand, attracts customers, and drives growth. From responsive
				design and seamless user experience to robust functionality and SEO
				optimization, we take care of every detail to help your business succeed
				online. Partner with us to elevate your digital presence and make a
				lasting impression on your audience.
			</p>
		</section>

		<!-- Packages Section -->
		<section aria-labelledby="packages-heading">
			<Packages />
		</section>
		<!-- <ProjectsComp /> -->
		<section class="max-w-md mx-auto">
			<SeoChecklistForm />
		</section>
		<!-- Services -->
		<section
			data-aos="fade-up"
			class="flex flex-col text-center max-w-[80dvw] mx-auto my-5 gap-4"
		>
			<h2 class="text-2xl font-bold text-gray-800">Our Services</h2>
			<ul
				class="list-disc list-inside mx-auto text-gray-600 grid md:grid-cols-8 *:capitalize gap-5"
			>
				<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
					Custom WordPress theme development
				</li>
				<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
					Plugin development and customization
				</li>
				<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
					Responsive design for mobile and tablet
				</li>
				<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
					SEO optimization and performance enhancements
				</li>
				<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
					eCommerce solutions and integrations
				</li>
			</ul>
		</section>
		<section data-aos="fade-up" class="flex justify-center flex-col">
			<h4 class="text-center text-2xl">
				We Also Offer WordPress SEO Packages:
			</h4>
			<router-link to="/seo" class="mt-3 mx-auto btn bg-orange"
				>WordPress SEO</router-link
			>
		</section>
		<section>
			<OttawaMap />
		</section>
	</main>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import HeroTemplate from '@/components/misc/HeroTemplate.vue'
import OttawaMap from '@/components/OttawaMap.vue'
import SeoChecklistForm from '@/components/emailSignups/SeoChecklistForm.vue'
import Packages from '@/components/serviceComps/Packages.vue'

useHead({
	title: 'Custom WordPress Solutions in Ottawa - Tailored for Your Business',
	meta: [
		{
			name: 'description',
			content:
				'We create stunning, custom WordPress websites for small businesses in Ottawa. Enhance your online presence with responsive designs, SEO optimization, eCommerce solutions, and more.',
		},
		{
			name: 'keywords',
			content:
				'Custom WordPress websites, Ottawa WordPress design, small business web development, SEO optimization, responsive WordPress design, eCommerce WordPress solutions, Ottawa web development, plugin customization, WordPress theme development, WooCommerce integration, Ottawa WordPress experts',
		},
		{
			name: 'robots',
			content: 'index, follow',
		},
		{
			property: 'og:title',
			content:
				'Custom WordPress Solutions in Ottawa - Tailored for Your Business',
		},
		{
			property: 'og:description',
			content:
				'Partner with Ottawa Web Masters for custom WordPress websites that elevate your business. Specializing in responsive designs, SEO, and eCommerce integrations.',
		},
	],
	script: [
		{
			type: 'application/ld+json',
			json: {
				'@context': 'http://schema.org',
				'@type': 'ProfessionalService',
				name: 'Ottawa Web Masters - WordPress Solutions',
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
