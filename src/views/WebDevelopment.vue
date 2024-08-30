<template>
	<section>
		<div>
			<!-- Hero Section -->
			<section
				class="hero min-h-screen bg-fixed"
				style="background-image: url('./assets/webdev-hero.jpg')"
			>
				<div class="hero-overlay bg-opacity-60"></div>
				<div class="hero-content flex-col md:max-w-[55dvw]">
					<h1
						class="text-center text-3xl md:text-5xl text-orange-500 p-8 bg-white bg-opacity-90 rounded-xl font-medium"
					>
						Custom Web Development Solutions
					</h1>
					<div class="flex justify-center space-x-4 mt-6">
						<router-link
							to="/contact"
							class="flex btn w-fit bg-white border border-[#2b3c4f] hover:bg-[#2b3d4f] hover:text-white"
							role="button"
							aria-label="Start your project with us"
						>
							Get Started
						</router-link>
					</div>
				</div>
			</section>

			<main class="inner-wrapper px-2">
				<!-- Information Text Section -->
				<section
					class="inner-wrapper px-3 py-12 min-h-[50dvh] flex flex-col justify-center mx-auto w-fit"
				>
					<h3 class="text-4xl font-medium text-gray-800">
						Comprehensive Web Development Services
					</h3>
					<hr class="my-6 bg-[#2b3d4f] h-[3px]" />
					<p class="text-lg text-gray-600 max-w-3xl">
						Our custom web development solutions are designed to help businesses
						of all sizes establish a strong online presence. We specialize in
						creating fully responsive, feature-rich websites that are tailored
						to meet your unique business goals. Whether you need a simple
						website or a complex web application, our experienced team is here
						to deliver exceptional results.
					</p>
					<p class="text-lg text-gray-600 max-w-3xl mt-4">
						From the initial consultation to the final deployment, we work
						closely with you to ensure that every aspect of your website aligns
						with your vision. Our development process emphasizes user
						experience, performance, and scalability, ensuring that your website
						can grow alongside your business.
					</p>
				</section>

				<!-- New Content Section -->
				<section
					class="md:max-w-[75vw] mx-auto p-8 bg-white bg-opacity-90 rounded-lg mt-8"
				>
					<h2
						id="web-development"
						class="text-center text-4xl font-medium text-gray-800"
					>
						Tailored Web Development for Your Business
					</h2>
					<p class="mt-4">
						We offer a wide range of web development services that are
						customized to meet your specific needs. Our team is proficient in
						the latest web technologies and frameworks, ensuring that your
						website is built using the best practices in the industry.
					</p>
					<ul class="list-disc list-inside mt-6">
						<li>Custom website design and development</li>
						<li>Web application development</li>
						<li>eCommerce development</li>
						<li>Content management systems (CMS)</li>
						<li>API integration and development</li>
					</ul>
					<p class="mt-6">
						Whether you're starting from scratch or looking to enhance your
						existing website, we have the expertise to help you achieve your
						goals. Contact us today to learn more about our custom web
						development solutions.
					</p>
				</section>

				<!-- Technologies Section -->
				<section
					class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 justify-items-center"
				></section>

				<!-- Services Section -->
				<section
					class="flex flex-col text-center max-w-[80vw] mx-auto my-12 gap-8"
				>
					<h2 class="text-4xl font-semibold text-gray-800">Our Services</h2>
					<p class="text-lg text-gray-600 max-w-2xl mx-auto">
						Explore our wide range of web development services designed to help
						your business succeed online.
					</p>
					<hr class="my-6 border-t-2 border-[#2b3d4f] mx-auto w-24" />
					<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<li
							class="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow border border-gray-200"
						>
							<h3 class="text-xl font-semibold text-[#2b3d4f] mb-2">
								Custom Web Applications
							</h3>
							<p class="text-gray-600">
								We build custom web applications tailored to meet your business
								requirements, from concept to completion.
							</p>
						</li>
						<li
							class="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow border border-gray-200"
						>
							<h3 class="text-xl font-semibold text-[#2b3d4f] mb-2">
								eCommerce Development
							</h3>
							<p class="text-gray-600">
								Our eCommerce solutions are designed to provide a seamless
								shopping experience, boosting sales and customer satisfaction.
							</p>
						</li>
						<li
							class="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow border border-gray-200"
						>
							<h3 class="text-xl font-semibold text-[#2b3d4f] mb-2">
								Content Management Systems
							</h3>
							<p class="text-gray-600">
								We develop robust CMS solutions that make it easy to manage your
								website's content and streamline your operations.
							</p>
						</li>
						<li
							class="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow border border-gray-200"
						>
							<h3 class="text-xl font-semibold text-[#2b3d4f] mb-2">
								Responsive Web Design
							</h3>
							<p class="text-gray-600">
								Our responsive designs ensure that your website looks and
								functions perfectly on any device, enhancing the user
								experience.
							</p>
						</li>
						<li
							class="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow border border-gray-200"
						>
							<h3 class="text-xl font-semibold text-[#2b3d4f] mb-2">
								API Integration
							</h3>
							<p class="text-gray-600">
								We integrate third-party APIs to extend the functionality of
								your website, providing a seamless experience for your users.
							</p>
						</li>
					</ul>
				</section>

				<!-- Client Testimonials Section -->
				<section class="mt-16" aria-labelledby="client-testimonials">
					<h2
						id="client-testimonials"
						class="text-center text-3xl font-medium text-gray-800"
					>
						What Our Clients Say
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
						<div class="p-4 bg-gray-100 rounded-lg shadow">
							<p class="text-lg">
								"Our new web application has transformed the way we do business.
								The custom solution they developed for us has streamlined our
								processes and improved our efficiency."
							</p>
							<p class="mt-4 text-sm text-right font-bold">
								- Alex J., Operations Manager
							</p>
						</div>
						<div class="p-4 bg-gray-100 rounded-lg shadow">
							<p class="text-lg">
								"The eCommerce site they built for us is fantastic! It's
								user-friendly, visually appealing, and has significantly
								increased our online sales."
							</p>
							<p class="mt-4 text-sm text-right font-bold">
								- Sarah L., Business Owner
							</p>
						</div>
					</div>
				</section>

				<!-- Web Development Process Section -->
				<section class="mt-16" aria-labelledby="development-process">
					<h2
						id="development-process"
						class="text-center text-4xl font-semibold text-gray-800"
					>
						Our Web Development Process
					</h2>
					<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						<div
							class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
						>
							<h3 class="text-2xl font-bold text-[#2b3d4f] mb-2">
								Step 1: Discovery and Planning
							</h3>
							<p class="text-gray-600">
								We begin by understanding your business needs and goals, and
								then we develop a detailed plan to bring your vision to life.
							</p>
						</div>
						<div
							class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
						>
							<h3 class="text-2xl font-bold text-[#2b3d4f] mb-2">
								Step 2: Design and Prototyping
							</h3>
							<p class="text-gray-600">
								Our design team creates prototypes and mockups to visualize the
								final product, ensuring that it aligns with your brand and
								objectives.
							</p>
						</div>
						<div
							class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
						>
							<h3 class="text-2xl font-bold text-[#2b3d4f] mb-2">
								Step 3: Development
							</h3>
							<p class="text-gray-600">
								Our developers build your website or application using the
								latest technologies, ensuring it's fast, secure, and scalable.
							</p>
						</div>
						<div
							class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
						>
							<h3 class="text-2xl font-bold text-[#2b3d4f] mb-2">
								Step 4: Testing and Quality Assurance
							</h3>
							<p class="text-gray-600">
								We conduct rigorous testing to ensure that your website or
								application works flawlessly across all platforms and devices.
							</p>
						</div>
						<div
							class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500"
						>
							<h3 class="text-2xl font-bold text-[#2b3d4f] mb-2">
								Step 5: Deployment and Support
							</h3>
							<p class="text-gray-600">
								We launch your website or application and provide ongoing
								support to ensure it continues to meet your business needs.
							</p>
						</div>
					</div>
				</section>

				<!-- FAQ Section -->
				<section class="mt-16" aria-labelledby="faqs">
					<h2
						id="faqs"
						class="text-center text-4xl font-semibold text-gray-800"
					>
						Frequently Asked Questions
					</h2>
					<div class="mt-12 space-y-4">
						<div
							class="border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md"
						>
							<input type="checkbox" class="peer hidden" id="faq1" />
							<label
								for="faq1"
								class="block p-4 bg-gray-100 cursor-pointer text-xl font-medium text-gray-800"
							>
								What types of web development services do you offer?
							</label>
							<div class="p-4 bg-white peer-checked:block hidden">
								<p>
									We offer a comprehensive range of services, including custom
									website development, web applications, eCommerce solutions,
									CMS development, and API integration.
								</p>
							</div>
						</div>
						<div
							class="border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md"
						>
							<input type="checkbox" class="peer hidden" id="faq2" />
							<label
								for="faq2"
								class="block p-4 bg-gray-100 cursor-pointer text-xl font-medium text-gray-800"
							>
								How long does it take to develop a custom website?
							</label>
							<div class="p-4 bg-white peer-checked:block hidden">
								<p>
									The timeline depends on the complexity of the project, but
									most websites can be completed within 4 to 8 weeks.
								</p>
							</div>
						</div>
						<div
							class="border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md"
						>
							<input type="checkbox" class="peer hidden" id="faq3" />
							<label
								for="faq3"
								class="block p-4 bg-gray-100 cursor-pointer text-xl font-medium text-gray-800"
							>
								Do you offer post-launch support?
							</label>
							<div class="p-4 bg-white peer-checked:block hidden">
								<p>
									Yes, we provide ongoing support and maintenance to ensure your
									website or application continues to perform optimally.
								</p>
							</div>
						</div>
						<div
							class="border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md"
						>
							<input type="checkbox" class="peer hidden" id="faq4" />
							<label
								for="faq4"
								class="block p-4 bg-gray-100 cursor-pointer text-xl font-medium text-gray-800"
							>
								Can you help with SEO and digital marketing?
							</label>
							<div class="p-4 bg-white peer-checked:block hidden">
								<p>
									Absolutely! We offer SEO services and can integrate your
									website with various digital marketing tools to help you reach
									your target audience.
								</p>
							</div>
						</div>
						<div
							class="border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md"
						>
							<input type="checkbox" class="peer hidden" id="faq5" />
							<label
								for="faq5"
								class="block p-4 bg-gray-100 cursor-pointer text-xl font-medium text-gray-800"
							>
								What technologies do you use?
							</label>
							<div class="p-4 bg-white peer-checked:block hidden">
								<p>
									We use a variety of technologies, including HTML5, CSS3,
									JavaScript, React, Vue.js, Node.js, and various content
									management systems like WordPress and Drupal.
								</p>
							</div>
						</div>
					</div>
				</section>

				<!-- Contact CTA Section -->
				<section class="mt-16 text-center" aria-labelledby="contact-cta">
					<h2 id="contact-cta" class="text-3xl font-medium text-gray-800">
						Ready to Build Your Custom Web Solution?
					</h2>
					<p class="mt-4">
						Contact us today for a consultation and find out how our web
						development services can help your business succeed online.
					</p>
					<router-link
						to="/contact"
						class="inline-block mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600"
					>
						Request a Quote
					</router-link>
				</section>
			</main>
		</div>
	</section>
</template>

<script setup>
import { useHead } from '@unhead/vue'

// Set the SEO meta tags using useHead
useHead({
	title: 'Custom Web Development Solutions | Your Business, Your Way',
	meta: [
		{
			name: 'description',
			content:
				'We offer custom web development solutions that are tailored to your business needs. From web applications to eCommerce sites, our team has the expertise to deliver exceptional results.',
		},
		{
			name: 'keywords',
			content:
				'custom web development, web development services, eCommerce development, CMS development, web applications, responsive web design, API integration, web solutions, business websites',
		},
		{
			property: 'og:title',
			content: 'Custom Web Development Solutions | Your Business, Your Way',
		},
		{
			property: 'og:description',
			content:
				'Partner with us to build a custom web solution that meets your business goals. We specialize in web applications, eCommerce sites, and responsive web design.',
		},
		{
			property: 'og:image',
			content: '/assets/webdev-hero.jpg',
		},
		{
			property: 'og:url',
			content: 'https://yourwebsite.com/custom-web-development',
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
	],
})
</script>
