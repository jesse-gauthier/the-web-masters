<template>
	<section>
		<!-- Hero Section -->
		<section
			class="hero min-h-screen bg-fixed"
			style="background-image: url('./assets/wordpress2.jpg')"
			itemscope
			itemtype="https://schema.org/ProfessionalService"
		>
			<meta itemprop="name" content="SEO Services in Ottawa, Ontario" />
			<meta
				itemprop="description"
				content="Expert SEO services in Ottawa to improve your online presence and drive more traffic to your website."
			/>

			<div
				data-aos="fade-up"
				class="hero-content flex-col text-white max-w-[55dvw]"
			>
				<h1
					class="text-3xl text-orange-500 p-8 bg-white bg-opacity-90 rounded-xl font-medium"
					itemprop="headline"
				>
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
			itemscope
			itemtype="https://schema.org/Service"
		>
			<h3 class="text-4xl" itemprop="serviceType">
				Expert SEO Services in Ottawa, Ontario
			</h3>
			<hr class="my-6 bg-[#2b3d4f] h-[3px]" />
			<p
				class="text-lg self-center text-gray-600 max-w-4xl mx-auto"
				itemprop="description"
			>
				Our SEO services are designed to help Ottawa-based businesses improve
				their online visibility and attract more customers. We specialize in
				keyword research, on-page optimization, link building, and local SEO
				strategies tailored for the Ottawa market. Whether you're a small
				business or a large enterprise, we have the expertise to help you rank
				higher on search engines and drive more traffic to your website.
			</p>
		</section>

		<!-- SEO Services -->
		<section class="max-w-4xl mx-auto flex flex-col gap-y-8 p-4">
			<!-- Packages -->
			<div data-aos="fade-up">
				<h3 class="text-3xl font-medium">Our Packages</h3>
				<ul
					class="flex justify-evenly flex-wrap lg:flex-nowrap *:border-[4px] *:border-[#e89e1d] gap-3"
				>
					<li class="flex flex-col w-3/4 md:w-1/3 rounded-lg">
						<div class="orange-bg px-1 py-5 text-center shadow-xl">
							<h3 class="font-medium text-2xl my-0">Essential Package</h3>
							<p class="italic text-lg my-1">$300 Per Month</p>
							<p class="font-medium my-0">Results In 2-3 months</p>
						</div>
						<ul class="p-3">
							<li class="font-bold mb-2">Plan Includes:</li>
							<li>20 Backlinks per month</li>
							<li>Comprehensive website audit</li>
							<li>Competitor analysis</li>
							<li>Competitive keyword analysis</li>
							<li>Meta tags (title, description, header tags) optimization</li>
							<li>Mobile optimization</li>
							<li>Site speed optimization</li>
							<li>Local keyword optimization</li>
						</ul>
						<router-link
							to="/contact"
							class="text-center btn btn-outline mt-auto mb-2 mx-2"
							><strong>GET STARTED</strong></router-link
						>
					</li>
					<li
						class="flex flex-col w-3/4 md:w-1/3 rounded-lg shadow-lg shadow-[#e89e1d]"
					>
						<div class="orange-bg px-1 py-5 text-center shadow-xl">
							<h3 class="font-medium text-2xl my-0">Premium Package</h3>
							<p class="italic text-lg my-1">$800 Per Month</p>
							<p class="font-medium my-0">Results In 1-2 months</p>
						</div>
						<ul class="p-3">
							<li class="font-bold mb-2">Essential +</li>
							<li>Keyword Ranking Reports (Real Time Results)</li>
							<li>Link Building Reports</li>
							<li>Product page optimization</li>
							<li>Conversion tracking setup</li>
							<li>Customized SEO strategies</li>
							<li>Ongoing SEO consulting and support</li>
							<li>Crawl error fixing</li>
							<li>SEO-friendly content writing</li>
						</ul>
						<router-link
							to="/contact"
							class="text-center btn btn-outline mt-auto mb-2 mx-2"
							><strong>GET STARTED</strong></router-link
						>
					</li>
					<li class="flex flex-col w-3/4 md:w-1/3 rounded-lg">
						<div class="orange-bg px-1 py-5 text-center shadow-xl">
							<h3 class="font-medium text-2xl my-0">Ecommerce Package</h3>
							<p class="italic text-lg my-1">$1200 Per Month</p>
							<p class="font-medium my-0">Results In 1 month</p>
						</div>
						<ul class="p-3">
							<li class="font-bold mb-2">Premier +</li>
							<li>Influencer outreach</li>
							<li>Forum and community engagement</li>
							<li>Product page optimization</li>
							<li>Category page SEO</li>
							<li>E-commerce site architecture optimization</li>
							<li>
								Schema markup for products SEO for online marketplaces (e.g.,
								Amazon, Etsy)
							</li>
							<li>Conversion rate optimization</li>
						</ul>
						<router-link
							to="/contact"
							class="text-center btn btn-outline mt-auto mb-2 mx-2"
							><strong>GET STARTED</strong></router-link
						>
					</li>
				</ul>
			</div>
			<!-- Custom Indicator -->
			<div data-aos="fade-up">
				<h3 class="text-3xl font-medium">Looking for something more custom?</h3>
			</div>
			<div data-aos="fade-up">
				<ul
					class="grid grid-cols-1 md:grid-cols-2 gap-5 *:border-4 *:border-[#e89e1d] *:p-3"
				>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Keyword Research & Strategy</h3>
						<p class="text-lg">
							Improve your rankings with targeted keyword research and strategic
							planning, constantly monitored for performance and refinement.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Content Writing</h3>
						<p class="text-lg">
							Engage your audience and boost rankings with high-quality,
							SEO-friendly content designed to improve conversions and reduce
							bounce rates.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Link Building</h3>
						<p class="text-lg">
							Increase authority and performance through expert link-building
							strategies and compelling, optimized content.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Technical SEO</h3>
						<p class="text-lg">
							Optimize your site’s backend for speed and efficiency with
							thorough technical SEO, including server and code improvements.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">On-Page SEO</h3>
						<p class="text-lg">
							Optimize your site’s content and structure for higher rankings and
							seamless integration with search engines.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Off-Page SEO</h3>
						<p class="text-lg">
							Expand your online presence with strategies designed to enhance
							visibility and reputation across the web.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Local SEO</h3>
						<p class="text-lg">
							Dominate local search results with tailored strategies to increase
							visibility and attract more local customers.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Ecommerce SEO</h3>
						<p class="text-lg">
							Boost product visibility and drive sales with specialized SEO
							techniques, including backlinks, social media, and influencer
							partnerships.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Shopify SEO</h3>
						<p class="text-lg">
							Enhance your Shopify platform with targeted SEO, including keyword
							optimization, site structure improvements, and better product
							descriptions.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
				</ul>
			</div>
		</section>
		<OttawaMap />
	</section>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { onMounted } from 'vue'
import AOS from 'aos'

import OttawaMap from '@/components/OttawaMap.vue'

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
			name: 'keywords',
			content:
				'SEO services Ottawa, local SEO Ottawa, on-page optimization, link building Ottawa, keyword research Ottawa, Ottawa SEO experts, online visibility, search engine rankings',
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

// JSON-LD schema markup
const schema = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	name: 'SEO Services in Ottawa, Ontario - Boost Your Online Presence',
	description:
		'We offer expert SEO services in Ottawa, Ontario. Our team helps local businesses improve their online visibility and attract more customers.',
	url: window.location.href,
	mainEntity: {
		'@type': 'ProfessionalService',
		name: 'SEO Services in Ottawa, Ontario',
		areaServed: {
			'@type': 'Place',
			name: 'Ottawa, Ontario',
		},
		serviceType: [
			'Local SEO for Ottawa Businesses',
			'Keyword Research and Strategy',
			'On-Page Optimization',
			'Link Building and Outreach',
			'Content Creation and Optimization',
		],
		description:
			'Our SEO services are designed to help Ottawa-based businesses improve their online visibility and attract more customers.',
	},
}

// Inject JSON-LD script
useHead({
	script: [
		{
			type: 'application/ld+json',
			json: schema,
		},
	],
})
</script>

<style scoped></style>
