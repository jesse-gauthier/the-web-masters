/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import { useHead } from '@unhead/vue'
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

// Blogs
import OttawaWordpress from '@/landingpages/OttawaWordpress.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: { robots: 'index, follow' },
		},
		{
			path: '/services',
			name: 'services',
			component: ServicesView,
			meta: { robots: 'index, follow' },
		},
		{
			path: '/wordpress',
			name: 'WordPress',
			component: WordPressServiceView,
			meta: { robots: 'index, follow' },
		},
		{
			path: '/seo',
			name: 'Search Optimization',
			component: SeoServicesView,
			meta: { robots: 'index, follow' },
		},
		{
			path: '/shopify',
			name: 'Shopify',
			component: ShopifyServicesView,
			meta: { robots: 'index, follow' },
		},
		{
			path: '/ourwork',
			name: 'Our Work',
			component: OurWorkView,
			meta: { robots: 'index, follow' },
		},
		{
			path: '/contact',
			name: 'Contact Us',
			component: ContactView,
			meta: { robots: 'index, follow' },
		},
		{
			path: '/freeseo',
			name: 'Free Seo Report',
			component: FreeSeoForm,
			meta: { robots: 'index, follow' },
		},
		{
			path: '/privacy-policy',
			name: 'Privacy Policy',
			component: PrivacyPolicy,
			meta: { robots: 'noindex, nofollow' },
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: NotFound,
			meta: { robots: 'noindex, nofollow' },
		},
		{
			path: '/about',
			name: 'About Page',
			component: AboutPage,
			meta: { robots: 'index, follow' },
		},
		{
			path: '/OttawaWordPress',
			name: 'Ottawa Wordpress',
			component: OttawaWordpress,
			meta: { robots: 'index, follow' },
		},
	],
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
})

// Add a navigation guard to set the canonical and robots tags
router.afterEach((to) => {
	useHead({
		link: [
			{
				rel: 'canonical',
				href: `${window.location.origin}${to.fullPath}`,
			},
		],
		meta: [
			{
				name: 'robots',
				content: to.meta.robots || 'index, follow', // Default to index, follow if not specified
			},
		],
	})
})

export default router
