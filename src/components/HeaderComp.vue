<template>
	<header
		:class="[
			'w-[100%] bg-[#2b3d4f] flex justify-between items-center px-5 text-white overflow-hidden transition-all duration-300',
			{ sticky: isSticky },
		]"
		:style="{ padding: isSticky ? '0.5rem 1rem' : '1rem 1.25rem' }"
		role="banner"
	>
		<div class="navbar brand-font">
			<!-- Mobile -->
			<div class="flex justify-between w-full lg:navbar-start">
				<div class="flex justify-between align-middle w-screen">
					<router-link
						class="transition-all duration-300"
						:class="
							isSticky
								? 'max-w-[10dvw] lg:max-w-[7dvw] xl:max-w-[3dvw]'
								: 'max-w-[75dvw] lg:max-w-[15dvw] xl:max-w-[17dvw]'
						"
						to="/"
						aria-label="Home"
					>
						<LogoComponent />
					</router-link>
					<div
						tabindex="0"
						role="button"
						aria-label="Toggle Navigation Menu"
						class="btn btn-ghost lg:hidden self-center"
						@click="isOpen = !isOpen"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-10"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<!-- Nav -->
					<div
						v-if="isOpen"
						tabindex="0"
						class="fixed h-[100dvh] bg-[#2b3d4f] w-screen left-0 top-0 z-50 py-3 px-8"
						aria-label="Mobile Navigation Menu"
					>
						<div class="mr-8">
							<div class="flex justify-between">
								<router-link
									@click="isOpen = !isOpen"
									:class="
										isSticky
											? 'max-w-[10dvw] lg:max-w-[7dvw] xl:max-w-[5dvw]'
											: 'max-w-[20dvw] lg:max-w-[15dvw] xl:max-w-[7dvw]'
									"
									to="/"
									aria-label="Home"
								>
									<LogoComponent />
								</router-link>
								<div
									tabindex="0"
									role="button"
									aria-label="Close Navigation Menu"
									class="btn btn-ghost lg:hidden self-center"
									@click="isOpen = !isOpen"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-10 w-10"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 6h16M4 12h8m-8 6h16"
										/>
									</svg>
								</div>
							</div>
							<ul class="text-right text-xl *:my-2 mt-12" role="menu">
								<li v-for="(link, index) in links" :key="link.path" role="none">
									<router-link
										class="poppins-regular btn w-[200px] font-medium"
										:to="link.path"
										@click="isOpen = false"
										:aria-label="link.name"
										role="menuitem"
										active-class="active"
									>
										{{ link.name }}
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- Desktop -->
			<div class="navbar-end hidden lg:flex self-end">
				<ul class="menu menu-horizontal px-1 align-end" role="menubar">
					<li
						v-for="(link, index) in links"
						:key="link.path"
						@mouseenter="showDropdown = index"
						@mouseleave="showDropdown = null"
						class="relative"
						role="none"
					>
						<router-link
							:to="link.path"
							class="text-xl state-focus hover:underline underline-offset-4 font-medium"
							:aria-label="link.name"
							role="menuitem"
							active-class="active"
						>
							{{ link.name }}
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import LogoComponent from './branding/LogoComponent.vue'

const isOpen = ref(false)
const showDropdown = ref(null)
const isSticky = ref(false)

const links = [
	{ name: 'Home', path: '/' },
	{ name: 'About', path: '/about' },
	{
		name: 'Services',
		path: '/services',
		subPages: [{ name: 'WordPress', path: 'wordpress' }],
	},
	{ name: 'Contact', path: '/contact' },
	{ name: 'Free SEO Audit', path: '/freeseo' },
]

const toggleDropdown = (index) => {
	showDropdown.value = showDropdown.value === index ? null : index
}

const handleScroll = () => {
	isSticky.value = window.scrollY > 65
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.active {
	text-decoration: underline;
	text-decoration-thickness: 2px;
	text-underline-offset: 8px;
	text-decoration-color: #febf45;
}

.fa-canadian-maple-leaf {
	color: #ff0000;
}

.menu {
	top: 7dvh;
	right: 0dvw !important;
}
.state-focus:focus {
	color: orange !important;
}

.dropdown {
	position: absolute;
	top: 100%;
	left: -20%;
	background-color: #273441;
	padding: 10px;
	border-radius: 3px;
}

.sticky {
	position: sticky;
	top: 0;
	z-index: 1000;
}
</style>
