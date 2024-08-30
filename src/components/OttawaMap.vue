<template>
	<!-- Location Section -->
	<section data-aos="fade-up" class="my-8">
		<h2 class="text-center text-4xl font-medium capitalize mb-8">
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

// Define props using defineProps
const props = defineProps({
	heading: {
		type: String,
		required: true,
	},
})

// Destructure the text prop
const { heading } = props

// Initialize the map only when the section is in view
onMounted(() => {
	const loadMap = () => {
		import('leaflet').then((L) => {
			import('leaflet/dist/leaflet.css')
			const map = L.map('my-map-canvas', {
				center: [45.4215, -75.6972],
				zoom: 13,
				zoomControl: false, // Disable zoom control buttons
				scrollWheelZoom: false, // Disable zooming with scroll wheel
				doubleClickZoom: false, // Disable zooming with double click
				tap: false, // Disable zooming with tap on touch devices
				dragging: false, // Disable map dragging to prevent panning
			})

			L.tileLayer(
				'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
				{
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
					maxZoom: 18,
				}
			).addTo(map)
		})
	}

	// Use IntersectionObserver to lazy load the map
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				loadMap()
				observer.disconnect()
			}
		},
		{ threshold: 0.1 }
	)

	observer.observe(document.getElementById('my-map-canvas'))
})
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
