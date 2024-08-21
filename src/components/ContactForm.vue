<template>
	<section
		id="contact_banner_side"
		class="flex flex-col pt-4 bg-fixed"
		aria-labelledby="connect-heading"
	>
		<div class="py-1 md:p-8 w-[100%] blue-bg text-center md:w-3/4 mx-auto">
			<h3 id="connect-heading" class="text-3xl py-3 text-white font-normal">
				Contact Us
			</h3>
			<div>
				<VanillaContact />
			</div>
		</div>
	</section>
</template>

<script setup>
import VanillaContact from './contactForms/VanillaContact.vue'
</script>

<style scoped>
#contact_banner_side {
	background-image: url('../assets/branding/contact-banner.jpg');
}
</style>
