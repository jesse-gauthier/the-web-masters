<template>
	<section class="">
		<div class="">
			<!-- Hero -->
			<section
				class="hero min-h-screen bg-fixed"
				style="background-image: url('./assets/wordpress2.jpg')"
			>
				<div class="hero-overlay bg-opacity-60"></div>
				<div data-aos="fade-up" class="hero-content flex-col max-w-[55dvw]">
					<h1
						class="text-3xl text-orange-500 p-8 bg-white bg-opacity-90 rounded-xl font-medium"
					>
						Custom WordPress Websites in Ottawa
					</h1>
					<p
						class="text-black text-lg p-8 bg-white bg-opacity-90 rounded-xl font-medium"
					>
						We specialize in creating stunning WordPress websites tailored
						specifically for small businesses in Ottawa, including areas like
						ByWard Market, Glebe, and Kanata. Our experienced team understands
						the local market and is dedicated to ensuring your online presence
						is strong, effective, and visually appealing.
					</p>

					<div class="flex justify-center space-x-4">
						<router-link
							to="/contact"
							class="flex btn w-fit bg-white border-1 border-[#2b3c4f] hover:bg-[#2b3d4f] hover:text-white"
							role="button"
							aria-label="Start your project with us"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								class="fill-[#efaa1d]"
								width="25"
							>
								<path
									d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
								/>
							</svg>
							Get Started</router-link
						>
					</div>
				</div>
			</section>

			<!-- Information Text -->
			<section
				data-aos="fade-up"
				class="inner-wrapper px-3 py-4 min-h-[50dvh] flex flex-col justify-center"
			>
				<h3 class="text-4xl">WordPress Design Services in Ottawa</h3>
				<hr class="my-6 bg-[#2b3d4f] h-[3px]" />
				<p class="text-lg self-center text-gray-600">
					We specialize in creating stunning WordPress websites tailored
					specifically for small businesses. Our experienced team is dedicated
					to ensuring your online presence is not only strong and effective but
					also visually appealing and engaging. We understand the unique needs
					of small businesses and work closely with you to design a website that
					reflects your brand, attracts customers, and drives growth. From
					responsive design and seamless user experience to robust functionality
					and SEO optimization, we take care of every detail to help your
					business succeed online. Partner with us to elevate your digital
					presence and make a lasting impression on your audience.
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
				<router-link
					to="/seo"
					class="mt-3 mx-auto btn btn-warning underline underline-offset-4"
					>WordPress SEO</router-link
				>
			</section>
		</div>
	</section>
</template>

<script setup>
import { useHead } from '@unhead/vue'

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
