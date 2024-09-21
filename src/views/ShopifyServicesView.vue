<template>
	<section>
		<!-- Hero Section -->
		<HeroTemplate
			title="Custom Shopify Websites in Ottawa, ON"
			subTitle="Transform Your E-commerce Success with Expert Shopify Development"
			:backgroundImage="backgroundImage"
		/>

		<main class="inner-wrapper">
			<!-- Information Text Section -->
			<section
				class="inner-wrapper px-3 py-12 min-h-[50dvh] flex flex-col justify-center"
			>
				<h2 class="text-4xl text-center font-medium text-gray-800">
					Elevate Your Shopify Store with Expert Development in Ottawa, ON
				</h2>
				<hr class="my-6 border-t-2 border-[#2b3d4f] mx-auto w-24" />
				<p class="text-lg text-gray-600 max-w-3xl mx-auto">
					We specialize in creating stunning Shopify stores tailored
					specifically for small businesses in Ottawa, ON. Our experienced team
					is dedicated to ensuring your online presence is not only strong and
					effective but also visually appealing and engaging. From responsive
					design and seamless user experience to robust functionality and SEO
					optimization, we take care of every detail to help your business
					succeed online.
				</p>
			</section>

			<!-- Services Section -->
			<section
				class="flex flex-col text-center max-w-[80dvw] mx-auto my-12 gap-4"
			>
				<h2 class="text-4xl font-medium text-gray-800">Our Services</h2>
				<p class="text-lg text-gray-600 max-w-2xl mx-auto">
					Explore our comprehensive range of Shopify services designed to help
					your business thrive online.
				</p>
				<hr class="my-6 border-t-2 border-[#2b3d4f] mx-auto w-24" />
				<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<li
						class="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow border border-gray-200"
					>
						<h3 class="text-xl font-semibold text-[#2b3d4f] mb-2">
							Custom Shopify Theme Development
						</h3>
						<p class="text-gray-600">
							We create tailored shopify themes that perfectly align with your
							brand and business goals.
						</p>
					</li>
					<li
						class="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow border border-gray-200"
					>
						<h3 class="text-xl font-semibold text-[#2b3d4f] mb-2">
							Plugin Development and Customization
						</h3>
						<p class="text-gray-600">
							Enhance your site's functionality with custom plugins designed to
							meet your specific needs.
						</p>
					</li>
					<li
						class="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow border border-gray-200"
					>
						<h3 class="text-xl font-semibold text-[#2b3d4f] mb-2">
							Responsive Design for Mobile and Tablet
						</h3>
						<p class="text-gray-600">
							Ensure your WordPress site looks great and functions perfectly on
							all devices.
						</p>
					</li>
					<li
						class="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow border border-gray-200"
					>
						<h3 class="text-xl font-semibold text-[#2b3d4f] mb-2">
							SEO Optimization and Performance Enhancements
						</h3>
						<p class="text-gray-600">
							Boost your site's visibility and speed with our expert SEO and
							performance services.
						</p>
					</li>
					<li
						class="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow border border-gray-200"
					>
						<h3 class="text-xl font-semibold text-[#2b3d4f] mb-2">
							eCommerce Solutions
						</h3>
						<p class="text-gray-600">
							Set up and optimize your online store with our custom solutions.
						</p>
					</li>
				</ul>
			</section>
			<!-- Client Testimonials Section -->
			<section class="mt-16" aria-labelledby="client-testimonials">
				<h2
					id="client-testimonials"
					class="text-center text-3xl font-medium text-gray-800"
				>
					What Our Clients Say
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
					<div class="p-4 bg-gray-100 rounded-lg shadow">
						<p class="text-lg">
							"The Shopify store they built for us is exactly what we needed.
							It's user-friendly and has boosted our sales significantly."
						</p>
						<p class="mt-4 text-sm text-right font-bold">
							- Emily R., Store Owner
						</p>
					</div>
					<div class="p-4 bg-gray-100 rounded-lg shadow">
						<p class="text-lg">
							"Their attention to detail and understanding of our brand helped
							us create a Shopify store that truly stands out."
						</p>
						<p class="mt-4 text-sm text-right font-bold">
							- Michael S., Marketing Director
						</p>
					</div>
				</div>
			</section>
			<!-- Technology and Partner Logos Section -->
			<section class="inner-wrapper py-8">
				<hr class="my-6 border-t-2 border-[#2b3d4f] mx-auto w-24" />
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
			<!-- Design Process Section -->
			<section class="mt-16" aria-labelledby="design-process">
				<h2
					id="design-process"
					class="text-center text-4xl font-semibold text-gray-800"
				>
					Our Shopify Design Process
				</h2>
				<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div
						class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
					>
						<h3 class="text-2xl font-bold text-[#2b3d4f] mb-2">
							Step 1: In-depth Market Research
						</h3>
						<p class="text-gray-600">
							We start by thoroughly researching your market to understand your
							audience, competitors, and unique business needs.
						</p>
					</div>
					<div
						class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
					>
						<h3 class="text-2xl font-bold text-[#2b3d4f] mb-2">
							Step 2: Theme Selection and Customization
						</h3>
						<p class="text-gray-600">
							Next, we select or create a WordPress theme that reflects your
							brand identity and customize it to meet your specifications.
						</p>
					</div>
					<div
						class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
					>
						<h3 class="text-2xl font-bold text-[#2b3d4f] mb-2">
							Step 3: Development and Integration
						</h3>
						<p class="text-gray-600">
							Our development team builds your site, integrating all necessary
							features, plugins, and third-party tools.
						</p>
					</div>
					<div
						class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
					>
						<h3 class="text-2xl font-bold text-[#2b3d4f] mb-2">
							Step 4: Usability Testing and Optimization
						</h3>
						<p class="text-gray-600">
							We rigorously test the site for usability, performance, and SEO,
							making optimizations to ensure everything runs smoothly.
						</p>
					</div>
					<div
						class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
					>
						<h3 class="text-2xl font-bold text-[#2b3d4f] mb-2">
							Step 5: Launch and Ongoing Support
						</h3>
						<p class="text-gray-600">
							Finally, we launch your site and provide ongoing support to help
							you maintain and update your WordPress site as needed.
						</p>
					</div>
				</div>
			</section>
			<!-- FAQ Section -->
			<section class="mt-16" aria-labelledby="faqs">
				<h2 id="faqs" class="text-center text-3xl font-medium text-gray-800">
					Frequently Asked Questions
				</h2>
				<div class="mt-8">
					<div
						class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
					>
						<input type="checkbox" class="peer" />
						<div class="collapse-title text-xl font-medium">
							What does your Shopify design process involve?
						</div>
						<div class="collapse-content">
							<p>
								Our process includes market research, theme customization,
								development, and thorough testing to ensure your Shopify store
								is optimized for both usability and conversions.
							</p>
						</div>
					</div>
					<div
						class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
					>
						<input type="checkbox" class="peer" />
						<div class="collapse-title text-xl font-medium">
							How do you ensure the Shopify store meets our business needs?
						</div>
						<div class="collapse-content">
							<p>
								We collaborate closely with your team to understand your
								business goals and tailor the Shopify store to align with your
								brand and objectives.
							</p>
						</div>
					</div>
					<div
						class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
					>
						<input type="checkbox" class="peer" />
						<div class="collapse-title text-xl font-medium">
							Can you help with SEO for our Shopify store?
						</div>
						<div class="collapse-content">
							<p>
								Absolutely! We optimize your Shopify store for search engines to
								improve visibility and attract more organic traffic.
							</p>
						</div>
					</div>
					<div
						class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
					>
						<input type="checkbox" class="peer" />
						<div class="collapse-title text-xl font-medium">
							How long does it take to build a custom Shopify store?
						</div>
						<div class="collapse-content">
							<p>
								The timeline depends on the project's complexity, but most
								Shopify stores can be designed and launched within 4 to 6 weeks.
							</p>
						</div>
					</div>
					<div
						class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
					>
						<input type="checkbox" class="peer" />
						<div class="collapse-title text-xl font-medium">
							Do you offer post-launch support for Shopify stores?
						</div>
						<div class="collapse-content">
							<p>
								Yes, we provide ongoing support and maintenance to ensure your
								Shopify store continues to perform at its best.
							</p>
						</div>
					</div>
				</div>
			</section>
			<!-- Contact CTA Section -->
			<section class="mt-16 text-center" aria-labelledby="contact-cta">
				<h2 id="contact-cta" class="text-3xl font-medium text-gray-800">
					Ready to Elevate Your Shopify Store?
				</h2>
				<p class="mt-4">
					Contact us today for a consultation and discover how our Shopify
					expertise can transform your eCommerce business.
				</p>
				<router-link
					to="/contact"
					class="inline-block mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600"
				>
					Request a Quote
				</router-link>
			</section>
		</main>
	</section>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import HeroTemplate from '@/components/misc/HeroTemplate.vue'

// Importing assets
import pageflylogo from '@/assets/pageflylogo.png'
import shopifylogo from '@/assets/shopifylogo.svg'
import klaviyo_logo from '@/assets/klaviyo_logo.webp'
import qb_logo from '@/assets/qb-logo.svg'
import shipstationlogo from '@/assets/shipstation_logo.webp'
import backgroundImage from '@/assets/shopify-background.webp'

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

<style scoped></style>
