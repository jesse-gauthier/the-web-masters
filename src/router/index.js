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
import ShopifyServicesView from '@/views/ShopifyServicesView.vue'
import FreeSeoForm from '@/views/FreeSeoForm.vue'
import SeoServicesView from '@/views/SeoServicesView.vue'

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
			name: 'WordPress',
			component: WordPressServiceView,
		},
		{
			path: '/seo',
			name: 'Search Optimization',
			component: SeoServicesView,
		},
		{
			path: '/shopify',
			name: 'Shopify',
			component: ShopifyServicesView,
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
			path: '/freeseo',
			name: 'Free Seo Report',
			component: FreeSeoForm,
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
		return { top: 0 }
	},
})

export default router
