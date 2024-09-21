<template>
	<footer
		class="footer p-10 bg-[#2b3d4f] flex flex-wrap justify-center gap-12 text-white min-h-[10vh]"
		role="contentinfo"
	>
		<div class="max-w-[300px] flex flex-wrap" data-aos="fade-up">
			<h4 class="text-2xl">Our Mission</h4>
			<p>
				Our mission is to craft high-quality websites designed to empower
				businesses with a strong, reliable foundation for growth and success.
			</p>
			<div class="flex flex-col">
				<h4 class="text-2xl">Quick Contact</h4>
				<a href="mailto:Jesse@ottawawebmasters.ca"
					>Email: Jesse@ottawawebmasters.ca</a
				>
				<a href="tel:3439998984">Phone: 343 999-8984 </a>
			</div>
		</div>
		<div class="flex flex-wrap gap-12">
			<!-- Services -->
			<nav aria-label="Services" data-aos="fade-up">
				<h4 class="text-2xl">Services</h4>
				<ul>
					<li>
						<RouterLink class="link link-hover" to="/services"
							>Web Development</RouterLink
						>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/shopify"
							>Shopify</RouterLink
						>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/wordpress"
							>WordPress</RouterLink
						>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/uxdesign"
							>UX Design</RouterLink
						>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/seo">SEO</RouterLink>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/ottawa-seo"
							>Ottawa SEO</RouterLink
						>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/ottawa-wordpress"
							>Ottawa WordPress</RouterLink
						>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/ottawa-shopify"
							>Ottawa Shopify</RouterLink
						>
					</li>
				</ul>
			</nav>
			<!-- Company -->
			<nav data-aos="fade-up" aria-label="Company">
				<h4 class="text-2xl">Company</h4>
				<ul>
					<li>
						<RouterLink class="link link-hover" to="/about"
							>About Us</RouterLink
						>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/contact"
							>Contact</RouterLink
						>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/ourwork"
							>Portfolio</RouterLink
						>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/privacy-policy"
							>Privacy Policy</RouterLink
						>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/freeseo"
							>Free SEO Audit</RouterLink
						>
					</li>
					<li>
						<RouterLink class="link link-hover" to="/freeseo"
							>Free SEO Check List</RouterLink
						>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
	AOS.init({
		duration: 3000,
	})
})
</script>
