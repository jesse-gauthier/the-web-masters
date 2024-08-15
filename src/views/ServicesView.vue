<template>
	<div
		class="inner-wrapper py-14 overflow-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
	>
		<h1 class="text-4xl font-bold text-center mb-10 text-gray-800">
			Our Services
		</h1>

		<!-- WordPress Section -->
		<section aria-labelledby="wordpress-development">
			<div class="flex flex-col md:flex-row mb-20">
				<div class="md:order-2 md:w-1/2 flex items-center justify-center">
					<img
						class="w-[300px] h-[200px] object-contain rounded-lg shadow-md p-3"
						:src="wordpresslogo"
						alt="WordPress Development Service by Ottawa Web Masters"
					/>
				</div>
				<div
					class="md:order-1 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
				>
					<h2
						id="wordpress-development"
						class="text-2xl font-semibold mb-4 text-gray-900"
					>
						WordPress Development
					</h2>
					<p class="text-gray-700">
						Our WordPress services empower your digital presence with
						flexibility and power. As the leading content management system,
						WordPress offers unmatched usability and customization, ideal for
						everything from vibrant blogs to robust e-commerce sites. We offer
						custom theme design, plugin development, and ongoing maintenance to
						keep your WordPress site secure and up-to-date.
					</p>
					<RouterLink to="/wordpress" class="btn btn-outline w-fit mx-auto">
						Learn More About WordPress Development
					</RouterLink>
				</div>
			</div>
		</section>

		<!-- Shopify Section -->
		<section aria-labelledby="shopify-development">
			<div class="flex flex-col md:flex-row mb-20">
				<div class="md:order-1 md:w-1/2 flex items-center justify-center">
					<img
						class="w-[300px] h-[200px] object-contain p-3 rounded-lg shadow-md"
						:src="shopifylogo"
						alt="Shopify Development Service by Ottawa Web Masters"
					/>
				</div>
				<div
					class="md:order-2 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
				>
					<h2
						id="shopify-development"
						class="text-2xl font-semibold mb-4 text-gray-900"
					>
						Shopify Development
					</h2>
					<p class="text-gray-700">
						We specialize in Shopify, offering bespoke e-commerce solutions that
						drive sales and enhance the online shopping experience. Our custom
						theme development and seamless app integration ensure your store
						stands out and operates flawlessly.
					</p>
					<RouterLink to="/shopify" class="btn btn-outline w-fit mx-auto">
						Learn More About Shopify Development
					</RouterLink>
				</div>
			</div>
		</section>

		<!-- UX/UI Design Section -->
		<section aria-labelledby="ux-ui-design">
			<div class="flex flex-col md:flex-row mb-20">
				<div class="md:order-2 md:w-1/2 flex items-center justify-center">
					<img
						class="w-[300px] h-[200px] object-contain p-3 rounded-lg shadow-md"
						src="@/assets/svgs/3.svg"
						alt="UX/UI Design Services by Ottawa Web Masters"
					/>
				</div>
				<div
					class="md:order-1 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
				>
					<h2
						id="ux-ui-design"
						class="text-2xl font-semibold mb-4 text-gray-900"
					>
						UX/UI Design
					</h2>
					<p class="text-gray-700">
						Our UX/UI design services create digital products that are not only
						aesthetically pleasing but also highly functional and user-friendly.
						We focus on crafting engaging experiences that drive user
						satisfaction and conversions through thorough research, testing, and
						iterative design.
					</p>
				</div>
			</div>
		</section>

		<!-- Website Optimization Section -->
		<section aria-labelledby="website-optimization">
			<div class="flex flex-col md:flex-row mb-20">
				<div class="md:order-1 md:w-1/2 flex items-center justify-center">
					<img
						class="w-[300px] h-[200px] object-contain p-3 rounded-lg shadow-md"
						src="@/assets/svgs/4.svg"
						alt="Website Optimization Service by Ottawa Web Masters"
					/>
				</div>
				<div
					class="md:order-2 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
				>
					<h2
						id="website-optimization"
						class="text-2xl font-semibold mb-4 text-gray-900"
					>
						Website Optimization
					</h2>
					<p class="text-gray-700">
						Improve your website’s performance and user experience with our
						optimization services. We enhance site speed, navigation, and
						responsiveness, ensuring your website operates smoothly across all
						devices, which is essential for providing a seamless user
						experience.
					</p>
				</div>
			</div>
		</section>

		<!-- SEO Section -->
		<section aria-labelledby="seo-services">
			<div class="flex flex-col md:flex-row mb-20">
				<div class="md:order-2 md:w-1/2 flex items-center justify-center">
					<img
						class="w-[300px] h-[200px] object-contain p-3 rounded-lg shadow-md"
						src="@/assets/svgs/5.svg"
						alt="SEO Services by Ottawa Web Masters"
					/>
				</div>
				<div
					class="md:order-1 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
				>
					<h2
						id="seo-services"
						class="text-2xl font-semibold mb-4 text-gray-900"
					>
						SEO
					</h2>
					<p class="text-gray-700">
						Elevate your site’s visibility on search engines with our
						comprehensive SEO services. We use the latest strategies in keyword
						research, content optimization, and link building to boost your
						rankings and attract high-quality traffic.
					</p>
				</div>
			</div>
		</section>

		<!-- Consultation Services Section -->
		<section aria-labelledby="consultation-services">
			<div class="flex flex-col md:flex-row mb-20">
				<div class="md:order-1 md:w-1/2 flex items-center justify-center">
					<img
						class="w-[300px] h-[200px] object-contain p-3 rounded-lg shadow-md"
						src="@/assets/svgs/6.svg"
						alt="Consultation Services by Ottawa Web Masters"
					/>
				</div>
				<div
					class="md:order-2 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
				>
					<h2
						id="consultation-services"
						class="text-2xl font-semibold mb-4 text-gray-900"
					>
						Consultation Services
					</h2>
					<p class="text-gray-700">
						Our consultation services guide you through the complexities of the
						digital landscape. Whether starting a new project or enhancing an
						existing website, our expert consultants provide personalized
						guidance and strategic insights to help you achieve your business
						goals.
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import shopifylogo from '@/assets/shopifylogo.svg'
import wordpresslogo from '@/assets/wordpresslogo.svg'
import { useHead } from '@unhead/vue'

useHead({
	title: 'Our Services - Ottawa Web Masters',
	meta: [
		{
			name: 'description',
			content:
				'Discover the professional services offered by Ottawa Web Masters, including WordPress development, Shopify development, UX/UI design, website optimization, SEO, and consultation services.',
		},
		{ property: 'og:title', content: 'Our Services - Ottawa Web Masters' },
		{
			property: 'og:description',
			content:
				'Explore our range of services including WordPress development, Shopify development, UX/UI design, and more.',
		},
		{
			property: 'og:image',
			content: 'https://yourwebsite.com/path-to-image.jpg',
		}, // replace with actual image URL
		{ property: 'og:url', content: 'https://yourwebsite.com/services' },
	],
})
</script>

<style scoped></style>
