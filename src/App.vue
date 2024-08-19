<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue'
import AlertBar from './components/misc/AlertBar.vue'
import FooterComp from './components/footer/FooterComp.vue'
import ContactForm from '@/components/ContactForm.vue'
import CookiesBanner from './components/CookiesBanner.vue'
</script>

<template>
	<HeaderComp />
	<AlertBar />
	<RouterView />
	<ContactForm data-aos="fade-up" id="contact_form" />
	<CookiesBanner />
	<FooterComp />
	<aside class="bg-[#2b3d4f] text-white text-center py-4">
		<p>Copyright © 2024 - All right reserved</p>
	</aside>
</template>

<style scoped></style>
