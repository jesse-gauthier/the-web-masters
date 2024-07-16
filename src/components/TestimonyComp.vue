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
			<div
				v-for="item in testimony"
				:key="item.name"
				class="flex flex-col justify-center"
			>
				<div class="flex flex-col lg:flex-row gap-6 text-center px-1">
					<img
						:src="item.image"
						class="p-3 w-[200px] mx-auto rounded-md"
						:alt="`Image of ${item.name}`"
					/>
					<blockquote
						class="my-4 md:my-0 italic w-100 text-justify lg:text-center text-lg self-center"
						role="document"
					>
						<span>{{
							isExpanded[item.name] ? item.text : truncatedText(item.text)
						}}</span>
						<button
							@click="toggleText(item.name)"
							class="underline hover-orange mx-auto"
						>
							{{ isExpanded[item.name] ? 'Hide Review' : 'Full Review' }}
						</button>
					</blockquote>
				</div>
				<a :href="item.link" class="btn mx-auto">View The Work</a>
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
