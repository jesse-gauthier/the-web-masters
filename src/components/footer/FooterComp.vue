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
			<div>
				<h4 class="text-2xl">Quick Contact</h4>
				<a href="mailto:Jesse@ottawawebmasters.ca">Jesse@ottawawebmasters.ca</a>
			</div>
		</div>
		<div class="flex flex-wrap gap-12">
			<!-- Services -->
			<nav aria-label="Services" data-aos="fade-up">
				<h4 class="text-2xl">Services</h4>
				<ul class="">
					<li>
						<router-link class="link link-hover" to="/services"
							>Web Development</router-link
						>
					</li>
					<li>
						<router-link class="link link-hover" to="/shopify"
							>Shopify</router-link
						>
					</li>
					<li>
						<router-link class="link link-hover" to="/wordpress"
							>WordPress</router-link
						>
					</li>
					<li>
						<router-link class="link link-hover" to="/services"
							>UX Design</router-link
						>
					</li>
					<li>
						<router-link class="link link-hover" to="/seo">SEO</router-link>
					</li>
					<li>
						<router-link class="link link-hover" to="/ottawa-seo"
							>Ottawa Seo</router-link
						>
					</li>
					<li>
						<router-link class="link link-hover" to="/ottawa-wordpress"
							>Ottawa WordPress</router-link
						>
					</li>
				</ul>
			</nav>
			<!-- Company -->
			<nav data-aos="fade-up" aria-label="Company">
				<h4 class="text-2xl">Company</h4>
				<ul>
					<li><a href="/about-us" class="link link-hover">About us</a></li>
					<li>
						<router-link class="link link-hover" to="/contact"
							>Contact</router-link
						>
					</li>
					<li>
						<router-link class="link link-hover" to="/ourwork"
							>Portfolio</router-link
						>
					</li>
					<li>
						<router-link class="link link-hover" to="/privacy-policy"
							>Privacy Policy</router-link
						>
					</li>
					<li>
						<router-link class="link link-hover" to="/freeseo"
							>Free SEO Audit</router-link
						>
					</li>
					<li>
						<router-link class="link link-hover" to="/freeseo"
							>Free SEO Check List</router-link
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

onMounted(() => {
	AOS.init({
		duration: 3000,
	})
})
</script>
