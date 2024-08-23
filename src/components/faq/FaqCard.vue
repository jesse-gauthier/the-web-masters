<template>
	<div class="h-[100%]" @click="toggleExpand">
		<div
			v-if="faq"
			class="px-3 flex gap-3 align-middle py-2"
			role="button"
			:aria-expanded="isExpanded"
			:aria-controls="'answer-' + faq.id"
			tabindex="0"
			@keydown.enter="toggleExpand"
			@keydown.space.prevent="toggleExpand"
		>
			<h4 class="m-0" role="heading" aria-level="4">
				{{ faq.question }}
			</h4>
		</div>
		<p
			class="p-3 border-t-2 mt-2 border-orange-400"
			v-if="isExpanded"
			:id="'answer-' + faq.id"
			tabindex="-1"
			ref="answer"
		>
			{{ faq.answer }}
		</p>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
	faq: {
		type: Object,
		required: true,
	},
})

const isExpanded = ref(false)
const answer = ref(null)

const toggleExpand = () => {
	isExpanded.value = !isExpanded.value
}

// Watch for the expanded state and focus on the answer when it's expanded
watch(isExpanded, (newVal) => {
	if (newVal && answer.value) {
		// Focus the answer paragraph when expanded
		answer.value.focus()
	}
})
</script>
