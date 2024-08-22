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
			></div>
			<!-- Fallback link for users who may not see the map -->
			<p class="text-center mt-4">
				<a
					href="https://www.openstreetmap.org/search?query=Ottawa%2C%20Ontario"
					target="_blank"
					rel="noopener noreferrer"
				>
					View our location on OpenStreetMap
				</a>
			</p>
		</div>
	</section>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Define props using defineProps
const props = defineProps({
	heading: {
		type: String,
		required: true,
	},
})

// Destructure the text prop
const { heading } = props

// Initialize the map once the component is mounted
onMounted(() => {
	const map = L.map('my-map-canvas').setView([45.4215, -75.6972], 13)

	L.tileLayer(
		'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
		{
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
			maxZoom: 18,
		}
	).addTo(map)

	L.marker([45.4215, -75.6972])
		.addTo(map)
		.bindPopup('Ottawa, Ontario')
		.openPopup()
})
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
