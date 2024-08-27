<template>
	<div
		class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
	>
		<div class="flex justify-center">
			<LogoComponent />
		</div>
		<h1 class="text-6xl font-bold text-blue-600">404</h1>
		<p class="text-lg text-gray-600 mt-4">
			Sorry, the page you are looking for does not exist.
		</p>
	</div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
// Dynamic import for LogoComponent

import LogoComponent from '@/components/branding/LogoComponent.vue'

useHead({
	title: 'Page Not Found - My Website',
	meta: [
		{
			name: 'description',
			content:
				'The page you are looking for does not exist. Please check the URL or return to the homepage.',
		},
		{
			name: 'robots',
			content: 'noindex, nofollow',
		},
	],
})
</script>

<style scoped></style>
