<template>
	<div :class="['z-50 text-center orange-bg flex', { fixed: isSticky }]">
		<router-link
			to="/freeseo"
			class="brand-font opacity-100 hover:text-white text-2xl w-screen rounded-none underline py-1"
			>Get a Free SEO Audit</router-link
		>
	</div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isSticky = ref(false)

const handleScroll = () => {
	isSticky.value = window.scrollY > 0
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>
