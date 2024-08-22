<template>
	<!-- Main Services Section -->
	<section aria-labelledby="services-heading" class="">
		<!-- Banner Section -->
		<div
			id="contact_banner"
			class="hero min-h-screen col-span-3 flex items-center justify-center bg-cover bg-center bg-fixed"
		>
			<h1
				id="services-heading"
				class="text-5xl font-bold text-orange-500 p-8 bg-white bg-opacity-90 rounded-xl"
			>
				Our Services
			</h1>
		</div>

		<!-- Services Grid -->
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
		>
			<!-- WordPress Development Section -->
			<div data-aos="fade-up" aria-labelledby="wordpress-development">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
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
							everything from vibrant blogs to robust e-commerce sites.
						</p>
						<RouterLink
							to="/wordpress"
							class="btn btn-outline w-fit mx-auto mt-4"
							aria-label="Learn More About WordPress Development"
						>
							Learn More About WordPress Development
						</RouterLink>
					</div>
				</div>
			</div>

			<!-- Shopify Development Section -->
			<div data-aos="fade-up" aria-labelledby="shopify-development">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
					>
						<h2
							id="shopify-development"
							class="text-2xl font-semibold mb-4 text-gray-900"
						>
							Shopify Development
						</h2>
						<p class="text-gray-700">
							We specialize in Shopify, offering bespoke e-commerce solutions
							that drive sales and enhance the online shopping experience. Our
							custom theme development and seamless app integration ensure your
							store stands out and operates flawlessly.
						</p>
						<RouterLink
							to="/shopify"
							class="btn btn-outline w-fit mx-auto mt-auto"
							aria-label="Learn More About Shopify Development"
						>
							Learn More About Shopify Development
						</RouterLink>
					</div>
				</div>
			</div>

			<!-- SEO Services Section -->
			<div data-aos="fade-up" aria-labelledby="seo-services">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
					>
						<h2
							id="seo-services"
							class="text-2xl font-semibold mb-4 text-gray-900"
						>
							SEO
						</h2>
						<p class="text-gray-700">
							Elevate your site’s visibility on search engines with our
							comprehensive SEO services. We use the latest strategies in
							keyword research, content optimization, and link building to boost
							your rankings and attract high-quality traffic.
						</p>
						<RouterLink
							to="/seo"
							class="btn btn-outline w-fit mx-auto mt-auto"
							aria-label="Learn More About SEO Services"
						>
							Learn More About SEO
						</RouterLink>
					</div>
				</div>
			</div>

			<!-- UX/UI Design Section -->
			<div data-aos="fade-up" aria-labelledby="ux-ui-design">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
					>
						<h2
							id="ux-ui-design"
							class="text-2xl font-semibold mb-4 text-gray-900"
						>
							UX/UI Design
						</h2>
						<p class="text-gray-700">
							Our UX/UI design services create digital products that are not
							only aesthetically pleasing but also highly functional and
							user-friendly. We focus on crafting engaging experiences that
							drive user satisfaction and conversions through thorough research,
							testing, and iterative design.
						</p>
					</div>
				</div>
			</div>

			<!-- Website Optimization Section -->
			<div data-aos="fade-up" aria-labelledby="website-optimization">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
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
			</div>

			<!-- Consultation Services Section -->
			<div data-aos="fade-up" aria-labelledby="consultation-services">
				<div class="flex flex-col md:flex-row h-[100%]">
					<div
						class="md:w-full p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
					>
						<h2
							id="consultation-services"
							class="text-2xl font-semibold mb-4 text-gray-900"
						>
							Consultation Services
						</h2>
						<p class="text-gray-700">
							Our consultation services guide you through the complexities of
							the digital landscape. Whether starting a new project or enhancing
							an existing website, our expert consultants provide personalized
							guidance and strategic insights to help you achieve your business
							goals.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import AOS from 'aos'

onMounted(() => {
	AOS.init({
		duration: 3000,
		once: true,
	})
})
useHead({
	title: 'Services We Offer - Ottawa Web Masters',
	meta: [
		{
			name: 'description',
			content:
				'Professional services offered by Ottawa Web Masters. WordPress, Shopify, SEO, and more.',
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
		},
		{ property: 'og:url', content: 'https://yourwebsite.com/services' },
	],
})
</script>

<style scoped>
#contact_banner {
	background-image: url('../assets/branding/contact-image.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

h1 {
	color: #e89e1d;
}

@media (max-width: 768px) {
	#contact_banner h1 {
		font-size: 2.5rem;
		padding: 4rem 2rem;
	}
}
</style>
