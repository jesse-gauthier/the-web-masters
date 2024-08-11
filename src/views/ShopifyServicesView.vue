<template>
	<section class="">
		<div class="">
			<!-- Hero -->
			<section
				class="hero min-h-screen bg-fixed"
				:style="{ backgroundImage: `url(${backgroundImage})` }"
			>
				<div class="hero-content flex-col text-[#0e2a24] max-w-[55dvw]">
					<h1
						class="md:text-8xl text-6xl font-bold text-center bg-[#ffffff26] py-8"
					>
						Custom Shopify Solutions in Ottawa, ON
					</h1>
					<div class="flex justify-center space-x-4">
						<router-link
							to="/contact"
							class="flex btn w-fit bg-white border-1 border-[#2b3c4f] hover:bg-[#2b3d4f] hover:text-white"
							role="button"
							aria-label="Start your Shopify project with us"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								width="25"
								aria-hidden="true"
								focusable="false"
							>
								<!-- SVG Path for the button icon -->
							</svg>
							Get Started</router-link
						>
					</div>
				</div>
			</section>

			<!-- Information Text -->
			<section
				class="inner-wrapper px-3 py-4 min-h-[50dvh] flex flex-col justify-center"
			>
				<h2 class="text-4xl">
					Elevate Your Shopify Store with Expert Development in Ottawa, ON
				</h2>
				<hr class="my-6 bg-[#2b3d4f] h-[3px]" />
				<p class="text-lg self-center text-gray-600">
					We specialize in creating stunning Shopify stores tailored
					specifically for small businesses in Ottawa, ON. Our experienced team
					is dedicated to ensuring your online presence is not only strong and
					effective but also visually appealing and engaging. We understand the
					unique needs of small businesses and work closely with you to design a
					Shopify store that reflects your brand, attracts customers, and drives
					growth. From responsive design and seamless user experience to robust
					functionality and SEO optimization, we take care of every detail to
					help your business succeed online. Partner with us to elevate your
					digital presence and make a lasting impression on your audience.
				</p>
			</section>

			<!-- Icons for Shopify, Liquid, and Polaris -->
			<section class="inner-wrapper">
				<h2 class="text-4xl">We Only Work With The Best</h2>
				<hr class="my-6 bg-[#2b3d4f] h-[3px]" />
				<div class="grid grid-cols-2 md:grid-cols-5 content-end gap-4 p-6">
					<img class="self-center" :src="shopifylogo" alt="" />
					<img class="self-center" :src="pageflylogo" alt="" />
					<img class="self-center" :src="klaviyo_logo" alt="" />
					<img class="self-center" :src="qb_logo" alt="" />
					<img class="self-center" :src="shipstationlogo" alt="" />
				</div>
			</section>

			<ProjectsComp />

			<!-- Services -->
			<section
				class="flex flex-col text-center max-w-[80dvw] mx-auto my-5 gap-4"
			>
				<h2 class="text-2xl font-bold text-gray-800">Our Services</h2>
				<ul
					class="list-disc list-inside mx-auto text-gray-600 grid md:grid-cols-8 gap-5"
				>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
						Custom Shopify theme development
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
						App development and customization
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
						Responsive design for mobile and tablet
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
						SEO optimization and performance enhancements
					</li>
					<li class="p-3 rounded-md border-2 border-[#2b3c4f] col-span-4">
						eCommerce solutions and integrations
					</li>
				</ul>
			</section>
		</div>
	</section>
</template>

<script setup>
import ProjectsComp from '@/components/ProjectsComp.vue'
import pageflylogo from '@/assets/pageflylogo.png'
import shopifylogo from '@/assets/shopifylogo.svg'
import klaviyo_logo from '@/assets/klaviyo_logo.webp'
import qb_logo from '@/assets/qb-logo.svg'
import shipstationlogo from '@/assets/shipstation_logo.webp'
import backgroundImage from '@/assets/shopify-background.webp'
</script>
