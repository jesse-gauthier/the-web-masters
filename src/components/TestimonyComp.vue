<template>
	<section
		class="justify-center bg-[#2b3d4f] text-white py-12 flex flex-col gap-12 min-h-[50vh]"
		aria-labelledby="testimonials-heading"
	>
		<div
			class="mx-auto w-[80dvw] md:w-[60dvw]"
			role="region"
			aria-labelledby="testimonials-heading"
		>
			<div v-for="item in testimony" :key="item.name" class="hero">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<img
						:src="item.image"
						class="p-3 w-[280px] mx-auto rounded-md"
						:alt="`Image of ${item.name}`"
					/>
					<div
						class="flex flex-col gap-4 justify-center align-middle self-center"
					>
						<h3 class="text-3xl capitalize m-0 self-center italic text-center">
							Web Masters is an exceptional talent in website design and Google
							Analytics, consistently enhancing our digital strategies with
							innovative solutions.
						</h3>
						<a :href="item.link" class="btn mx-auto">View Project</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'
import { testimony } from '@/data/testimony.js'

const isExpanded = ref({})

const toggleText = (name) => {
	isExpanded.value[name] = !isExpanded.value[name]
}

const truncatedText = (text, length = 100) => {
	return text.length > length ? text.slice(0, length) + '...' : text
}
</script>
