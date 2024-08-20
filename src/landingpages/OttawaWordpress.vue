<template>
	<section class="">
		<div class="">
			<!-- Hero Section -->
			<section
				class="hero min-h-screen bg-fixed"
				style="background-image: url('./assets/wordpress.jpg')"
			>
				<div
					data-aos="fade-up"
					class="hero-content flex-col text-white max-w-[55dvw]"
				>
					<h1 class="md:text-4xl text-5xl font-bold text-gray-800">
						SEO Services in Ottawa, Ontario
					</h1>
					<div class="flex justify-center space-x-4">
						<router-link
							to="/contact"
							class="flex btn w-fit bg-white border-1 border-[#2b3c4f] hover:bg-[#2b3d4f] hover:text-white"
							role="button"
							aria-label="Start your SEO project with us"
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
							Get Started
						</router-link>
					</div>
				</div>
			</section>

			<!-- Information Text -->
			<section
				data-aos="fade-up"
				class="inner-wrapper px-3 py-4 min-h-[50dvh] flex flex-col justify-center"
			>
				<h3 class="text-4xl">Expert SEO Services in Ottawa</h3>
				<hr class="my-6 bg-[#2b3d4f] h-[3px]" />
				<p class="text-lg self-center text-gray-600">
					Our SEO services are designed to help Ottawa-based businesses improve
					their online visibility and attract more customers. We specialize in
					keyword research, on-page optimization, link building, and local SEO
					strategies tailored for the Ottawa market. Whether you're a small
					business or a large enterprise, we have the expertise to help you rank
					higher on search engines and drive more traffic to your website.
				</p>
			</section>

			<!-- SEO Services -->
			<section
				data-aos="fade-up"
				class="flex flex-col text-center max-w-[80dvw] mx-auto my-5 gap-4"
			>
				<h2 class="text-2xl font-bold text-gray-800">Our SEO Services</h2>
				<ul
					class="list-disc list-inside mx-auto text-gray-600 grid md:grid-cols-8 capitalize gap-5"
				>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
						Local SEO for Ottawa Businesses
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
						Keyword Research and Strategy
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
						On-Page Optimization
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
						Link Building and Outreach
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
						Content Creation and Optimization
					</li>
				</ul>
			</section>
		</div>
	</section>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { onMounted, ref } from 'vue'
import AOS from 'aos'

onMounted(() => {
	AOS.init({
		duration: 3000,
	})
})

// Set the SEO meta tags using useHead
useHead({
	title: 'SEO Services in Ottawa, Ontario - Boost Your Online Presence',
	meta: [
		{
			name: 'description',
			content:
				'We offer expert SEO services in Ottawa, Ontario. Our team helps local businesses improve search engine rankings, increase visibility, and drive traffic to their websites.',
		},
		{
			name: 'robots',
			content: 'index, follow',
		},
	],
	link: [
		{
			rel: 'canonical',
			href: `${window.location.origin}${window.location.pathname}`,
		},
	],
})
</script>
