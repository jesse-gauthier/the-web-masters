<template>
	<HeroTemplate
		title="We Would Love To Work With You"
		subTitle="Get in Touch Today to Discuss Your Next Project Contact Form Below"
		backgroundImage="/assets/branding/contact-image.jpg"
	/>
	<section aria-labelledby="location-heading">
		<OttawaMap heading="Located in Our Nation's Capital" />
	</section>
</template>

<script setup>
import { onMounted, defineAsyncComponent } from 'vue'
import { useHead } from '@unhead/vue'
import AOS from 'aos'
import HeroTemplate from '@/components/misc/HeroTemplate.vue'
import OttawaMap from '@/components/OttawaMap.vue'

onMounted(() => {
	AOS.init({
		duration: 3000,
	})
})

useHead({
	title: 'Contact Ottawa Web Masters - Get in Touch for Expert Web Development',
	meta: [
		{
			name: 'description',
			content:
				'Contact Ottawa Web Masters to discuss your web development and digital marketing needs. Our team is ready to collaborate on your next project.',
		},
		{ property: 'og:title', content: 'Contact Us - Ottawa Web Masters' },
		{
			property: 'og:description',
			content:
				'Reach out to Ottawa Web Masters for professional web development services. Let’s work together to bring your digital vision to life.',
		},
		{
			property: 'og:image',
			content: 'https://yourwebsite.com/path-to-contact-image.jpg', // Replace with actual image URL
		},
		{ property: 'og:url', content: 'https://yourwebsite.com/contact' },
		{
			name: 'keywords',
			content:
				'contact, Ottawa Web Masters, web development, digital marketing, web design, get in touch, Ottawa web services, professional web development, collaboration, Ottawa business solutions',
		},
	],
	script: [
		{
			type: 'application/ld+json',
			json: {
				'@context': 'http://schema.org',
				'@type': 'ProfessionalService',
				name: 'Ottawa Web Masters',
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

<style scoped></style>
