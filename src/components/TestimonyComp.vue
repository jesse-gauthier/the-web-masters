<template>
	<section
		class="justify-center bg-[#2b3d4f] text-white py-12 flex flex-col gap-12 min-h-[50vh]"
		aria-labelledby="testimonials-heading"
	>
		<div
			data-aos="fade-up"
			class="mx-auto w-[95dvw] md:w-[75dvw]"
			role="region"
			aria-labelledby="testimonials-heading"
		>
			<div
				v-for="item in testimony"
				:key="item.name"
				class="hero max-w-3xl mx-auto"
			>
				<div
					class="flex flex-col lg:flex-row-reverse justify-evenly md:gap-x-6"
				>
					<img
						:src="item.image"
						class="w-[280px] mx-auto rounded-md self-start"
						:alt="`Image of ${item.name}`"
					/>

					<h3
						class="text-3xl capitalize md:m-0 self-center align-middle italic md:text-center mt-8"
					>
						Web Masters brings exceptional talent to website design and Google
						Analytics, constantly leveling up our digital strategies with fresh,
						innovative ideas.
					</h3>
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
