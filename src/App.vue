<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import AOS from 'aos'
import SkipLinks from './components/accessiblity/SkipLinks.vue'
import HeaderComp from './components/HeaderComp.vue'
import AlertBar from './components/misc/AlertBar.vue'
import FooterComp from './components/footer/FooterComp.vue'
import ContactForm from '@/components/ContactForm.vue'
import CookiesBanner from './components/CookiesBanner.vue'

onMounted(() => {
	AOS.init({
		duration: 3000,
		once: true,
	})
})
</script>

<template>
	<SkipLinks />
	<HeaderComp />
	<AlertBar />
	<main id="main-content">
		<RouterView />
		<ContactForm data-aos="fade-up" id="contact_form" />
	</main>
	<CookiesBanner />
	<FooterComp id="footer" />
	<aside class="bg-[#2b3d4f] text-white text-center py-4">
		<p class="text-xl">Copyright © 2024 - All right reserved</p>
	</aside>
</template>
