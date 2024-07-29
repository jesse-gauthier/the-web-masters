/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import WordPressServiceView from '@/views/WordPressServiceView.vue'
import OurWorkView from '@/views/OurWorkView.vue'
import ContactView from '@/views/ContactView.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import NotFound from '@/views/NotFound.vue'
import AboutPage from '@/views/AboutPage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/services',
			name: 'services',
			component: ServicesView,
		},
		{
			path: '/wordpress',
			name: 'WordPressService',
			component: WordPressServiceView,
		},
		{
			path: '/ourwork',
			name: 'Our Work',
			component: OurWorkView,
		},
		{
			path: '/contact',
			name: 'Contact Us',
			component: ContactView,
		},
		{
			path: '/privacy-policy',
			name: 'Privacy Policy',
			component: PrivacyPolicy,
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: NotFound,
		},
		{
			path: '/about',
			name: 'About Page',
			component: AboutPage,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
})

export default router
