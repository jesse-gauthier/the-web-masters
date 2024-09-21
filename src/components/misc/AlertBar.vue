<template>
	<div
		v-if="isVisible"
		:class="[
			'z-50 text-center bg-orange flex w-screen justify-center max-w-screen',
			{ fixed: isSticky },
		]"
	>
		<router-link
			to="/freeseo"
			class="opacity-100 hover:text-white grow text-2xl rounded-none font-subheading py-1"
		>
			Get a Free SEO Audit
		</router-link>
		<button @click="closeAlert" class="text-white mr-14">X</button>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isSticky = ref(false)
const isVisible = ref(true)

const handleScroll = () => {
	isSticky.value = window.scrollY > 65
}

const closeAlert = () => {
	isVisible.value = false
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>
