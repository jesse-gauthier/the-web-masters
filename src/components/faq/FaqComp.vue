<template>
	<section class="inner-wrapper">
		<h3 class="text-center text-5xl">Frequently Asked Questions</h3>
		<ul class="my-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
			<li
				class="shadow border-[0.50px] border-[#577594] rounded-md cursor-pointer self-start mx-auto md:mx-0 max-w-[50dvw] lg:max-w-[22dvw]"
				v-for="faq in faqs"
				:key="faq.question"
			>
				<FaqCard :faq="faq" />
			</li>
		</ul>
	</section>
</template>

<script setup>
import FaqCard from './FaqCard.vue'

const faqs = [
	{
		question: 'What services do you offer?',
		icon: 'fa-solid fa-circle-info',
		answer:
			'Our range of services includes Web Development, UX Design, SEO, Application Development, E-commerce Development, Information Architecture, UI/UX Design, Content Management, Web Analytics, Cloud Solutions, Security Audits, Accessibility Compliance, Website Refresh, and more. For each service, we offer a free consultation to help identify your unique needs and tailor an optimal solution.',
	},
	{
		question: 'How long does it take to build a website?',
		icon: 'fa-solid fa-clock',
		answer:
			'The timeline to build a website varies based on the complexity of the project, number of pages, and specific functionalities required. A simple informational website could take 4-6 weeks, while a complex e-commerce site could take 12-16 weeks. However, we always aim to work within our clients schedules and will provide a more accurate timeline after the initial discovery session.',
	},
	{
		question: 'Can you help us rank higher in search engines?',
		icon: 'fa-solid fa-magnifying-glass-chart',
		answer:
			'Yes, our team specializes in SEO strategies tailored to your business. We conduct thorough keyword research, optimize your websites content and structure, and develop a link-building strategy to help improve your search engine rankings. We also provide ongoing SEO monitoring and adjustments to ensure your website maintains its ranking over time.',
	},
	{
		question: 'Will our website be mobile-friendly?',
		icon: 'fa-solid fa-mobile-screen-button',
		answer:
			'Absolutely, all our websites are designed with a responsive layout to ensure they perform optimally on various devices, including desktops, laptops, tablets, and mobile phones. We understand the importance of mobile traffic in todays digital landscape and ensure your website provides a seamless user experience across all platforms',
	},
	{
		question: 'Do you offer ongoing support and maintenance?',
		icon: 'fa-solid fa-screwdriver-wrench',
		answer: `We offer different levels of support and maintenance packages based on your needs. These range from basic support, which includes regular updates and performance checks, to premium packages that offer priority support, security monitoring, and regular content updates. During our consultation, we'll discuss these options to identify what suits your business best.`,
	},
	{
		question: 'How much will a website cost?',
		icon: 'fa-solid fa-dollar-sign',
		answer: `The cost of a website varies based on its complexity, the time required to develop it, and any specific features or custom designs. We offer packages for different budgets and can provide a detailed quote after understanding your specific needs during our consultation.`,
	},
	{
		question: 'Can you integrate third-party services into our website?',
		icon: 'fa-solid fa-plug',
		answer: `Yes, we have extensive experience integrating a variety of third-party services, such as payment gateways, booking systems, CRM systems, social media APIs, and more. We ensure these integrations are seamless and enhance the overall functionality and user experience of your website.
`,
	},
	{
		question: 'Will I be able to make changes to the website myself?',
		icon: 'fa-solid fa-user-gear',
		answer: `Yes, we build our websites on user-friendly platforms and provide training on how to update and manage your website's content. We believe in empowering our clients to have control over their digital assets while also offering support when needed.
`,
	},
	{
		question: 'What is your project management process?',
		icon: 'fa-solid fa-diagram-project',
		answer: `Our project management process is designed to ensure smooth execution and timely delivery. It involves five key stages: Discovery - where we understand your business and goals, Design - where we create the visual layout, Development - where we build the functional website, Testing - where we ensure everything works perfectly, and Deployment - where we launch your website.`,
	},
	{
		question: 'Do you provide training on how to use the website?',
		icon: 'fa-solid fa-chalkboard-user',
		answer: `Absolutely, we provide comprehensive training on how to manage and update your website. This includes adding new content, updating existing content, managing SEO settings, analyzing website analytics, and more. We offer this training in person or via video call, and we provide ongoing support if you have further questions.`,
	},
]
</script>
