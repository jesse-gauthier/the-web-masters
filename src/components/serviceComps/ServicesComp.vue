<template>
	<div
		class="hidden md:block pt-14 w-[65vw] mx-auto"
		role="region"
		aria-label="Solutions"
	>
		<h3 class="capitalize text-4xl font-bold text-center mb-12">
			Featured Services
		</h3>
		<div class="inner-wrapper">
			<ul class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
				<li
					class="p-8 rounded-md border-2 border-[#2b3c4f50]"
					v-for="solution of solutions"
					:key="solution"
					role="listitem"
				>
					{{ solution }}
				</li>
			</ul>
			<router-link
				to="services"
				class="my-12 mx-auto flex w-[fit-content] px-6 btn bg-white border-1 border-[#2b3c4f] hover:bg-[#2b3d4f] hover:text-white hover:underline underline-offset-4"
				role="button"
				aria-label="More Services"
				>All Services</router-link
			>
		</div>
	</div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const solutions = [
	'E-commerce Development',
	'Search Engine Optimization',
	'Application Development',
	'User Experience Design',
	'Web Analytics',
	'Security Audits',
	'Accessibility Compliance',
]
</script>
