<template>
	<!-- Location Section -->
	<section data-aos="fade-up" class="my-8">
		<h2 class="text-center text-4xl font-regular capitalize mb-8">
			{{ heading }}
		</h2>
		<div style="max-width: 100%; overflow: hidden; height: 500px">
			<div
				id="my-map-canvas"
				style="height: 100%; width: 100%; max-width: 100%"
			>
				<iframe
					style="height: 100%; width: 100%; border: 0"
					frameborder="0"
					src="https://www.google.com/maps/embed/v1/place?q=Ottawa+Ontario&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
					alt="Google Map showing the location of Ottawa Web Masters"
				></iframe>
			</div>
			<!-- Fallback link for users who may not see the iframe -->
			<p class="text-center mt-4">
				<a
					href="https://www.google.com/maps/place/Ottawa,+ON,+Canada"
					target="_blank"
					rel="noopener noreferrer"
				>
					View our location on Google Maps
				</a>
			</p>
		</div>
	</section>
</template>

<script setup>
import { defineProps } from 'vue'

// Define props using defineProps
const props = defineProps({
	heading: {
		type: String,
		required: true,
	},
})

// Destructure the text prop
const { heading } = props
</script>
