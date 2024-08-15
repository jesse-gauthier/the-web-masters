<template>
	<footer
		class="footer p-10 bg-[#2b3d4f] flex flex-wrap justify-center gap-12 text-white min-h-[10vh]"
		role="contentinfo"
	>
		<div class="max-w-[300px]" data-aos="fade-up">
			<h4 class="footer-title">Our Mission</h4>
			<p>
				Our mission is to craft high-quality websites designed to empower
				businesses with a strong, reliable foundation for growth and success.
			</p>
			<div>
				<p class="footer-title">Quick Contact</p>
				<a href="mailto:Jesse@ottawawebmasters.ca">Jesse@ottawawebmasters.ca</a>
			</div>
		</div>
		<nav aria-label="Services" data-aos="fade-up">
			<h2 class="footer-title">Services</h2>
			<ul class="">
				<li>
					<router-link class="link link-hover" to="/services"
						>Web Development</router-link
					>
				</li>
				<li>
					<router-link class="link link-hover" to="/services"
						>WordPress</router-link
					>
				</li>
				<li>
					<router-link class="link link-hover" to="/services"
						>UX Design</router-link
					>
				</li>
				<li>
					<router-link class="link link-hover" to="/services"
						>Digital Marketing</router-link
					>
				</li>
			</ul>
		</nav>
		<nav data-aos="fade-up" aria-label="Company">
			<h2 class="footer-title">Company</h2>
			<ul>
				<!-- <li><a href="/about-us" class="link link-hover">About us</a></li> -->
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
			</ul>
		</nav>
	</footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
