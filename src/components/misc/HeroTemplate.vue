<template>
	<section
		class="hero min-h-screen"
		:style="{ backgroundImage: `url(${backgroundImage})` }"
		aria-labelledby="about-us-heading"
	>
		<div class="hero-overlay bg-opacity-70"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-lg mx-auto">
				<h1
					id="about-us-heading"
					class="text-3xl text-orange p-8 bg-white bg-opacity-90 rounded-xl font-medium"
				>
					{{ title }}
				</h1>
				<p
					class="text-xl mt-4 bg-white bg-opacity-80 p-4 rounded-md text-bluewood"
				>
					{{ subTitle }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	backgroundImage: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	subTitle: {
		type: String,
		required: true,
	},
})
</script>

<style scoped>
.hero {
	background-size: cover;
	background-position: center;
}
</style>
