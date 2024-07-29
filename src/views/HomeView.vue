<script setup>
import HeroComp from '@/components/HeroComp.vue'
import AboutComp from '@/components/about/AboutComp.vue'
import ServicesComp from '@/components/serviceComps/ServicesComp.vue'
import FaqComp from '@/components/faq/FaqComp.vue'
import TestimonyComp from '@/components/TestimonyComp.vue'
import Packages from '@/components/serviceComps/Packages.vue'
import { useHead } from '@unhead/vue'

useHead({
	title: 'Ottawa Web Masters',
})
</script>

<template>
	<main class="flex flex-col">
		<HeroComp id="hero" />
		<AboutComp id="about" />
		<TestimonyComp />
		<Packages />
		<FaqComp id="faq" />
	</main>
</template>

<style>
svg {
	color: #e89e1d;
	align-self: center;
	margin: auto 0;
}
</style>
