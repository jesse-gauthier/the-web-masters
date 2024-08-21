<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue'
import AlertBar from './components/misc/AlertBar.vue'
import FooterComp from './components/footer/FooterComp.vue'
import ContactForm from '@/components/ContactForm.vue'
import CookiesBanner from './components/CookiesBanner.vue'
</script>

<template>
	<!-- Skip Links for Accessibility -->
	<nav aria-label="Skip links" class="skip-links">
		<a href="#main-content" class="skip-link">Skip to main content</a>
		<a href="#footer" class="skip-link">Skip to footer</a>
	</nav>

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

<style scoped>
.skip-links {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
}

.skip-link {
	position: absolute;
	left: -999px;
	top: -999px;
	padding: 8px;
	background-color: #005a9c;
	color: white;
	text-decoration: none;
	border-radius: 4px;
}

.skip-link:focus {
	position: static;
	left: auto;
	top: auto;
	margin: 8px;
}
</style>
