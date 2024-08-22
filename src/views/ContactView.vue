<template>
	<div
		id="contact_banner"
		class="min-h-[80vh] flex justify-center items-center bg-fixed text-center"
		aria-labelledby="contact-heading"
	>
		<h1
			id="contact-heading"
			data-aos="fade-up"
			class="text-5xl font-bold text-orange-500 p-8 bg-white bg-opacity-90 rounded-xl"
		>
			We Would Love To Work With You
		</h1>
	</div>
	<section aria-labelledby="location-heading">
		<OttawaMap heading="Located in Our Nation's Capital" />
	</section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import OttawaMap from '@/components/OttawaMap.vue'
import AOS from 'aos'

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
				'contact, Ottawa Web Masters, web development, digital marketing, web design, get in touch, Ottawa web services',
		},
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
