<template>
	<div class="inner-wrapper py-14 overflow-auto">
		<h1 class="text-4xl font-bold text-center mb-10">Our Services</h1>

		<div
			v-for="(service, index) in servicesContent"
			:key="index"
			class="flex flex-col md:flex-row mb-20"
		>
			<div
				:class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'"
				class="md:w-1/2 flex items-center justify-center"
			>
				<img class="w-[300px] h-[200px]" :src="service.image" alt="" />
			</div>
			<div
				:class="index % 2 === 0 ? 'md:order-1' : 'md:order-2'"
				class="md:w-1/2 p-6 flex flex-col justify-center"
			>
				<h2 class="text-2xl font-semibold mb-4">{{ service.title }}</h2>
				<p>{{ service.description }}</p>
			</div>
		</div>

		<div class="mt-16 hidden md:block">
			<h2 class="text-3xl font-bold text-center mb-10">
				Other Solutions We Offer
			</h2>
			<div class="mx-auto py-14">
				<ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
					<li
						class="p-3 rounded-md border-2 border-[#2b3c4f]"
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
const solutions = [
	'E-commerce Development',
	'Information Architecture',
	'SEO',
	'Application Development',
	'UI/UX Design',
	'Content Management Systems',
	'Web Analytics',
	'Cloud Solutions',
	'Security Audits',
	'Accessibility Compliance',
]

const servicesContent = [
	{
		title: 'WordPress Development',
		description:
			"Our WordPress services are tailored to empower your digital presence with both flexibility and power. As the world's leading content management system, WordPress offers an unparalleled blend of usability and customization, making it the ideal platform for everything from vibrant blogs to robust e-commerce sites. We provide custom theme design, plugin development, and ongoing maintenance to ensure your WordPress site remains secure and up-to-date.",
		image: './assets/svgs/1.svg',
	},
	{
		title: 'Shopify Development',
		description:
			"Specializing in Shopify, we offer bespoke e-commerce solutions that drive sales and enhance the online shopping experience. Shopify's robust platform is the cornerstone of our approach, allowing us to design visually stunning and highly functional online stores. From custom theme development to seamless app integration, we ensure your store not only stands out but also operates flawlessly, catering to your unique business needs.",
		image: './assets/svgs/2.svg',
	},
	{
		title: 'UX/UI Design',
		description:
			"Our UX/UI design services ensure that your digital products are not only aesthetically pleasing but also highly functional and user-friendly. We focus on creating engaging user experiences that drive user satisfaction and conversions. Our design process involves thorough research, user testing, and iterative design to build interfaces that meet your users' needs and exceed their expectations.",
		image: './assets/svgs/3.svg',
	},
	{
		title: 'Website Optimization',
		description:
			'Enhance your website’s performance and user experience with our optimization services. We focus on improving site speed, navigation, and responsiveness to ensure your website operates smoothly across all devices. This service is crucial for businesses looking to improve their existing online platforms and provide a seamless user experience.',
		image: './assets/svgs/4.svg',
	},
	{
		title: 'SEO',
		description:
			'Elevate your site’s visibility on search engines with our comprehensive SEO services. We employ the latest strategies in keyword research, content optimization, link building, and analytics to boost your rankings and attract more traffic. Our SEO experts are dedicated to making your website more discoverable and ensuring it attracts and retains high-quality traffic.',
		image: './assets/svgs/5.svg',
	},
	{
		title: 'Consultation Services',
		description:
			'At The Web Masters, our consultation services are designed to help you navigate the complexities of the digital landscape. Whether you’re looking to start a new project or enhance an existing website, our expert consultants provide personalized guidance and strategic insights tailored to your business goals. We assist in defining your digital strategy, choosing the right technologies, and optimizing your online presence for maximum impact.',
		image: './assets/svgs/6.svg',
	},
]

import { useHead } from '@unhead/vue'

useHead({
	title: 'Our Services - Ottawa Web Masters',
})
</script>

<style scoped>
.container {
	max-width: 1200px;
}
</style>
