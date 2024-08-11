<template>
	<div
		class="inner-wrapper py-14 overflow-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
	>
		<h1 class="text-4xl font-bold text-center mb-10 text-gray-800">
			Our Services
		</h1>
		<!-- Wordpress -->
		<div class="flex flex-col md:flex-row mb-20">
			<div class="md:order-2 md:w-1/2 flex items-center justify-center">
				<img
					class="w-[300px] h-[200px] object-contain rounded-lg shadow-md p-3"
					:src="wordpresslogo"
					alt="WordPress Development"
				/>
			</div>
			<div
				class="md:order-1 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
			>
				<h2 class="text-2xl font-semibold mb-4 text-gray-900">
					WordPress Development
				</h2>
				<p class="text-gray-700">
					Our WordPress services are tailored to empower your digital presence
					with both flexibility and power. As the world's leading content
					management system, WordPress offers an unparalleled blend of usability
					and customization, making it the ideal platform for everything from
					vibrant blogs to robust e-commerce sites. We provide custom theme
					design, plugin development, and ongoing maintenance to ensure your
					WordPress site remains secure and up-to-date.
				</p>
				<RouterLink to="/wordpress" class="btn btn-outline w-fit mx-auto">
					More Information
				</RouterLink>
			</div>
		</div>
		<!-- Shopify -->
		<div class="flex flex-col md:flex-row mb-20">
			<div class="md:order-1 md:w-1/2 flex items-center justify-center">
				<img
					class="w-[300px] h-[200px] object-contain p-3 rounded-lg shadow-md"
					:src="shopifylogo"
					alt="Shopify Development"
				/>
			</div>
			<div
				class="md:order-2 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
			>
				<h2 class="text-2xl font-semibold mb-4 text-gray-900">
					Shopify Development
				</h2>
				<p class="text-gray-700">
					Specializing in Shopify, we offer bespoke e-commerce solutions that
					drive sales and enhance the online shopping experience. Shopify's
					robust platform is the cornerstone of our approach, allowing us to
					design visually stunning and highly functional online stores. From
					custom theme development to seamless app integration, we ensure your
					store not only stands out but also operates flawlessly, catering to
					your unique business needs.
				</p>
				<RouterLink to="/shopify" class="btn btn-outline w-fit mx-auto">
					More Information
				</RouterLink>
			</div>
		</div>
		<!-- UI Design -->
		<div class="flex flex-col md:flex-row mb-20">
			<div class="md:order-2 md:w-1/2 flex items-center justify-center">
				<img
					class="w-[300px] h-[200px] object-contain p-3 rounded-lg shadow-md"
					src="@/assets/svgs/3.svg"
					alt="UX/UI Design"
				/>
			</div>
			<div
				class="md:order-1 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
			>
				<h2 class="text-2xl font-semibold mb-4 text-gray-900">UX/UI Design</h2>
				<p class="text-gray-700">
					Our UX/UI design services ensure that your digital products are not
					only aesthetically pleasing but also highly functional and
					user-friendly. We focus on creating engaging user experiences that
					drive user satisfaction and conversions. Our design process involves
					thorough research, user testing, and iterative design to build
					interfaces that meet your users' needs and exceed their expectations.
				</p>
			</div>
		</div>
		<!-- Optimization -->
		<div class="flex flex-col md:flex-row mb-20">
			<div class="md:order-1 md:w-1/2 flex items-center justify-center">
				<img
					class="w-[300px] h-[200px] object-contain p-3 rounded-lg shadow-md"
					src="@/assets/svgs/4.svg"
					alt="Website Optimization"
				/>
			</div>
			<div
				class="md:order-2 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
			>
				<h2 class="text-2xl font-semibold mb-4 text-gray-900">
					Website Optimization
				</h2>
				<p class="text-gray-700">
					Enhance your website’s performance and user experience with our
					optimization services. We focus on improving site speed, navigation,
					and responsiveness to ensure your website operates smoothly across all
					devices. This service is crucial for businesses looking to improve
					their existing online platforms and provide a seamless user
					experience.
				</p>
			</div>
		</div>
		<!-- SEO -->
		<div class="flex flex-col md:flex-row mb-20">
			<div class="md:order-2 md:w-1/2 flex items-center justify-center">
				<img
					class="w-[300px] h-[200px] object-contain p-3 rounded-lg shadow-md"
					src="@/assets/svgs/5.svg"
					alt="SEO"
				/>
			</div>
			<div
				class="md:order-1 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
			>
				<h2 class="text-2xl font-semibold mb-4 text-gray-900">SEO</h2>
				<p class="text-gray-700">
					Elevate your site’s visibility on search engines with our
					comprehensive SEO services. We employ the latest strategies in keyword
					research, content optimization, link building, and analytics to boost
					your rankings and attract more traffic. Our SEO experts are dedicated
					to making your website more discoverable and ensuring it attracts and
					retains high-quality traffic.
				</p>
			</div>
		</div>
		<!-- Consultation Services -->
		<div class="flex flex-col md:flex-row mb-20">
			<div class="md:order-1 md:w-1/2 flex items-center justify-center">
				<img
					class="w-[300px] h-[200px] object-contain p-3 rounded-lg shadow-md"
					src="@/assets/svgs/6.svg"
					alt="Consultation Services"
				/>
			</div>
			<div
				class="md:order-2 md:w-1/2 p-6 flex flex-col justify-center bg-white rounded-lg shadow-lg"
			>
				<h2 class="text-2xl font-semibold mb-4 text-gray-900">
					Consultation Services
				</h2>
				<p class="text-gray-700">
					At The Web Masters, our consultation services are designed to help you
					navigate the complexities of the digital landscape. Whether you’re
					looking to start a new project or enhance an existing website, our
					expert consultants provide personalized guidance and strategic
					insights tailored to your business goals. We assist in defining your
					digital strategy, choosing the right technologies, and optimizing your
					online presence for maximum impact.
				</p>
			</div>
		</div>
		<!-- Other Solutions We Offer -->
		<div class="mt-16 hidden md:block">
			<h2 class="text-3xl font-bold text-center mb-10 text-gray-800">
				Other Solutions We Offer
			</h2>
			<div class="mx-auto py-14">
				<ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					<li
						class="p-6 rounded-lg border border-gray-300 bg-white shadow-md"
						v-for="solution of solutions"
						:key="solution"
					>
						{{ solution }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
import shopifylogo from '@/assets/shopifylogo.svg'
import wordpresslogo from '@/assets/wordpresslogo.svg'
import { useHead } from '@unhead/vue'

useHead({
	title: 'Our Services - Ottawa Web Masters',
})
</script>

<style scoped></style>
