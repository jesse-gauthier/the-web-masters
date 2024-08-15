<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/footer/FooterComp.vue'
import ContactForm from '@/components/ContactForm.vue'
import CookiesBanner from './components/CookiesBanner.vue'
</script>

<template>
	<HeaderComp />
	<div class="text-center orange-bg flex">
		<router-link
			to="/freeseo"
			class="btn btn-ghost hover:text-white text-2xl w-screen rounded-none underline"
			>Get a Free SEO Audit</router-link
		>
	</div>
	<RouterView />
	<ContactForm data-aos="fade-up" id="contact_form" />
	<CookiesBanner />
	<FooterComp />
	<aside class="bg-[#2b3d4f] text-white text-center py-4">
		<p>Copyright © 2024 - All right reserved</p>
	</aside>
</template>

<style scoped></style>
