<template>
	<div
		id="contact_banner"
		class="min-h-[80vh] flex justify-center items-center bg-fixed text-center"
	>
		<h1
			class="text-5xl font-bold text-orange-500 p-8 bg-white bg-opacity-90 rounded-xl"
		>
			We Would Love To Work With You
		</h1>
	</div>
</template>

<script setup>
import { useHead } from '@unhead/vue'

useHead({
	title: 'Contact Us - Ottawa Web Masters',
	meta: [
		{
			name: 'description',
			content:
				'Get in touch with Ottawa Web Masters. We are excited to collaborate with you on your next web project. Contact us today to start your journey towards a better online presence.',
		},
		{ property: 'og:title', content: 'Contact Us - Ottawa Web Masters' },
		{
			property: 'og:description',
			content:
				'Reach out to Ottawa Web Masters for expert web development and digital marketing services. We look forward to working with you.',
		},
		{
			property: 'og:image',
			content: 'https://yourwebsite.com/path-to-contact-banner-image.jpg',
		}, // replace with actual image URL
		{ property: 'og:url', content: 'https://yourwebsite.com/contact' },
		{
			name: 'keywords',
			content:
				'contact, Ottawa Web Masters, web development, digital marketing, web design',
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
