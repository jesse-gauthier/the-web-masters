<template>
	<section class="">
		<!-- Hero -->
		<div
			class="hero min-h-[75dvh]"
			style="
				background-image: url('/assets/seohero.jpg');
				background-repeat: no-repeat;
				background-size: cover;
			"
		>
			<div class="hero-overlay bg-opacity-60"></div>
			<div
				data-aos="fade-up"
				class="hero-content flex-col text-neutral-content"
			>
				<h1 class="text-5xl max-w-4xl text-center">SEO Services Ottawa</h1>
				<p class="max-w-3xl text-xl text-start">
					At Ottawa SEO Masters, we’re dedicated to optimizing websites for
					better search engine rankings and user experiences. SEO is more than
					just keywords; it’s about making your site accessible and
					user-friendly. Let us help you enhance visibility and ensure your site
					reaches everyone effectively.
				</p>
				<router-link to="/freeseo" class="btn btn-outline bg-white"
					>Get A Free SEO audit</router-link
				>
			</div>
		</div>
		<div class="max-w-4xl mx-auto flex flex-col gap-y-8 p-4">
			<SeoChecklistForm />
			<!-- Starting Content -->
			<div data-aos="fade-up">
				<div class="inner-wrapper py-4 flex flex-col gap-5">
					<!-- Why Choose -->
					<div class="flex flex-col justify-start">
						<h3 class="text-3xl font-medium text-center">
							Why Choose OttawaWebMasters.ca for Your SEO Needs?
						</h3>
						<div class="bg-[#e89e1d] h-[2.5px] mt-2 mb-4 w-1/3 mx-auto"></div>
						<ol
							class="list-decimal w-2/3 mx-auto text-lg flex flex-col gap-y-4"
						>
							<li>
								<span class="font-bold">Results-Driven Approach:</span> We focus
								on delivering measurable outcomes for your business, including
								improved search engine rankings, increased organic traffic, and
								higher conversions.
							</li>
							<li>
								<span class="font-bold">Customized SEO Strategies:</span> Our
								team creates tailored SEO plans aligned with your unique
								business goals, target audience, and industry.
							</li>
							<li>
								<span class="font-bold">Transparency & Communication:</span> We
								prioritize open communication, providing regular updates and
								reports on your website's SEO performance, keeping you informed
								throughout the process.
							</li>
							<li>
								<span class="font-bold">Ethical SEO Practices:</span> We follow
								search engine guidelines and use white-hat SEO techniques to
								ensure sustainable, long-lasting results.
							</li>
							<li>
								<span class="font-bold">Experienced SEO Team:</span> Our
								specialists have extensive industry knowledge and experience,
								enabling us to deliver effective, up-to-date strategies.
							</li>
						</ol>
					</div>
					<!-- Our Process -->
					<div class="mt-5">
						<h3 class="text-3xl font-medium">Our 6 Step SEO Process</h3>
						<ul class="grid grid-cols-1 md:grid-cols-3 gap-5">
							<li
								class="border-4 border-[#e89e1d] rounded-md py-4 px-2 text-center"
							>
								<h4
									class="cursor-pointer font-medium"
									@click="toggleDetails('audit')"
								>
									SEO Audit & Analysis
								</h4>
								<div
									v-if="openSection === 'audit'"
									class="bg-[#e89e1d] h-[2.5px] mt-2 mb-4 w-1/3 mx-auto"
								></div>
								<p v-if="openSection === 'audit'">
									We start by conducting a comprehensive SEO audit of your
									website to identify areas for improvement and uncover any
									issues that may be negatively impacting your search engine
									rankings.
								</p>
							</li>
							<li
								class="border-4 border-[#e89e1d] rounded-md py-4 px-2 text-center"
							>
								<h4
									class="cursor-pointer font-medium"
									@click="toggleDetails('keyword')"
								>
									Keyword Research & Strategy
								</h4>
								<div
									v-if="openSection === 'keyword'"
									class="bg-[#e89e1d] h-[2.5px] mt-2 mb-4 w-1/3 mx-auto"
								></div>
								<p v-if="openSection === 'keyword'">
									Our team conducts in-depth keyword research to identify
									relevant, high-traffic search terms for your business. We then
									develop a tailored SEO strategy to target these keywords and
									increase your website's visibility.
								</p>
							</li>
							<li
								class="border-4 border-[#e89e1d] rounded-md py-4 px-2 text-center"
							>
								<h4
									class="cursor-pointer font-medium"
									@click="toggleDetails('onPage')"
								>
									On-Page Optimization
								</h4>
								<div
									v-if="openSection === 'onPage'"
									class="bg-[#e89e1d] h-[2.5px] mt-2 mb-4 w-1/3 mx-auto"
								></div>
								<p v-if="openSection === 'onPage'">
									We optimize your website's content, metadata, and technical
									elements, ensuring search engines can effectively crawl,
									index, and rank your site for your target keywords.
								</p>
							</li>
							<li
								class="border-4 border-[#e89e1d] rounded-md py-4 px-2 text-center"
							>
								<h4
									class="cursor-pointer font-medium"
									@click="toggleDetails('offPage')"
								>
									Off-Page Optimization
								</h4>
								<div
									v-if="openSection === 'offPage'"
									class="bg-[#e89e1d] h-[2.5px] mt-2 mb-4 w-1/3 mx-auto"
								></div>
								<p v-if="openSection === 'offPage'">
									We work on building a strong backlink profile, leveraging
									content marketing, social media, and other tactics to boost
									your website's authority and improve its search engine
									rankings.
								</p>
							</li>
							<li
								class="border-4 border-[#e89e1d] rounded-md py-4 px-2 text-center"
							>
								<h4
									class="cursor-pointer font-medium"
									@click="toggleDetails('reporting')"
								>
									Reporting & Monitoring
								</h4>
								<div
									v-if="openSection === 'reporting'"
									class="bg-[#e89e1d] h-[2.5px] mt-2 mb-4 w-1/3 mx-auto"
								></div>
								<p v-if="openSection === 'reporting'">
									We provide regular updates on your website's SEO performance,
									including ranking improvements, traffic growth, and other key
									performance indicators. We continually monitor your site and
									make adjustments as needed to ensure ongoing success.
								</p>
							</li>
							<li
								class="border-4 border-[#e89e1d] rounded-md py-4 px-2 text-center"
							>
								<h4
									class="cursor-pointer font-medium"
									@click="toggleDetails('repeat')"
								>
									Repeat
								</h4>
								<div
									v-if="openSection === 'repeat'"
									class="bg-[#e89e1d] h-[2.5px] mt-2 mb-4 w-1/3 mx-auto"
								></div>
								<p v-if="openSection === 'repeat'">
									The SEO journey is never finished!
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- Our Seo Services -->
			<div data-aos="fade-up">
				<h3 class="text-3xl font-medium">Our Seo Services</h3>
				<ul
					class="list-disc list-inside marker:text-[#e89e1d] marker:text-3xl text-lg grid grid-cols-1 md:grid-cols-2"
				>
					<li>SEO Audit & Analysis</li>
					<li>Keyword Research & Strategy</li>
					<li>On-Page Optimization</li>
					<li>Off-Page Optimization</li>
					<li>Local SEO</li>
					<li>E-commerce SEO</li>
					<li>Technical SEO</li>
					<li>SEO Content Writing</li>
					<li>Google Analytics & Search Console Setup</li>
				</ul>
			</div>
			<!-- Packages -->
			<div data-aos="fade-up">
				<h3 class="text-3xl font-medium">Our Packages</h3>
				<ul
					class="flex justify-evenly flex-wrap lg:flex-nowrap *:border-[4px] *:border-[#e89e1d] gap-3"
				>
					<li class="flex flex-col w-3/4 md:w-1/3 rounded-lg">
						<div class="orange-bg px-1 py-5 text-center shadow-xl">
							<h3 class="font-medium text-2xl my-0">Essential Package</h3>
							<p class="italic text-lg my-1">$1500 Per Month</p>
							<p class="font-medium my-0">Results In 2-3 months</p>
						</div>
						<ul class="p-3">
							<li class="font-bold mb-2">Plan Includes:</li>
							<li>20 Backlinks per month</li>
							<li>Comprehensive website audit</li>
							<li>Competitor analysis</li>
							<li>Competitive keyword analysis</li>
							<li>Meta tags (title, description, header tags) optimization</li>
							<li>Mobile optimization</li>
							<li>Site speed optimization</li>
							<li>Local keyword optimization</li>
						</ul>
						<router-link
							to="/contact"
							class="text-center btn btn-outline mt-auto mb-2 mx-2"
							><strong>GET STARTED</strong></router-link
						>
					</li>
					<li
						class="flex flex-col w-3/4 md:w-1/3 rounded-lg shadow-lg shadow-[#e89e1d]"
					>
						<div class="orange-bg px-1 py-5 text-center shadow-xl">
							<h3 class="font-medium text-2xl my-0">Premium Package</h3>
							<p class="italic text-lg my-1">$2500 Per Month</p>
							<p class="font-medium my-0">Results In 1-2 months</p>
						</div>
						<ul class="p-3">
							<li class="font-bold mb-2">Essential +</li>
							<li>Keyword Ranking Reports (Real Time Results)</li>
							<li>Link Building Reports</li>
							<li>Product page optimization</li>
							<li>Conversion tracking setup</li>
							<li>Customized SEO strategies</li>
							<li>Ongoing SEO consulting and support</li>
							<li>Crawl error fixing</li>
							<li>SEO-friendly content writing</li>
						</ul>
						<router-link
							to="/contact"
							class="text-center btn btn-outline mt-auto mb-2 mx-2"
							><strong>GET STARTED</strong></router-link
						>
					</li>
					<li class="flex flex-col w-3/4 md:w-1/3 rounded-lg">
						<div class="orange-bg px-1 py-5 text-center shadow-xl">
							<h3 class="font-medium text-2xl my-0">Ecommerce Package</h3>
							<p class="italic text-lg my-1">$5500 Per Month</p>
							<p class="font-medium my-0">Results In 1 month</p>
						</div>
						<ul class="p-3">
							<li class="font-bold mb-2">Premier +</li>
							<li>Influencer outreach</li>
							<li>Forum and community engagement</li>
							<li>Product page optimization</li>
							<li>Category page SEO</li>
							<li>E-commerce site architecture optimization</li>
							<li>
								Schema markup for products SEO for online marketplaces (e.g.,
								Amazon, Etsy)
							</li>
							<li>Conversion rate optimization</li>
						</ul>
						<router-link
							to="/contact"
							class="text-center btn btn-outline mt-auto mb-2 mx-2"
							><strong>GET STARTED</strong></router-link
						>
					</li>
				</ul>
			</div>
			<div data-aos="fade-up">
				<h3 class="text-3xl font-medium">Looking for something more custom?</h3>
			</div>
			<div data-aos="fade-up">
				<ul
					class="grid grid-cols-1 md:grid-cols-2 gap-5 *:border-4 *:border-[#e89e1d] *:p-3"
				>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Keyword Research & Strategy</h3>
						<p class="text-lg">
							Improve your rankings with targeted keyword research and strategic
							planning, constantly monitored for performance and refinement.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Content Writing</h3>
						<p class="text-lg">
							Engage your audience and boost rankings with high-quality,
							SEO-friendly content designed to improve conversions and reduce
							bounce rates.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Link Building</h3>
						<p class="text-lg">
							Increase authority and performance through expert link-building
							strategies and compelling, optimized content.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Technical SEO</h3>
						<p class="text-lg">
							Optimize your site’s backend for speed and efficiency with
							thorough technical SEO, including server and code improvements.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">On-Page SEO</h3>
						<p class="text-lg">
							Optimize your site’s content and structure for higher rankings and
							seamless integration with search engines.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Off-Page SEO</h3>
						<p class="text-lg">
							Expand your online presence with strategies designed to enhance
							visibility and reputation across the web.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Local SEO</h3>
						<p class="text-lg">
							Dominate local search results with tailored strategies to increase
							visibility and attract more local customers.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Ecommerce SEO</h3>
						<p class="text-lg">
							Boost product visibility and drive sales with specialized SEO
							techniques, including backlinks, social media, and influencer
							partnerships.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
					<li class="flex flex-col gap-3 gradient_bg rounded-lg">
						<h3 class="text-2xl font-medium">Shopify SEO</h3>
						<p class="text-lg">
							Enhance your Shopify platform with targeted SEO, including keyword
							optimization, site structure improvements, and better product
							descriptions.
						</p>
						<router-link
							class="btn btn-outline w-fit mx-auto mt-auto"
							to="/contact"
							>Talk To An SEO Expert</router-link
						>
					</li>
				</ul>
			</div>
		</div>
		<!-- Extra Text -->
		<div data-aos="fade-up" class="bg-[#2b3d4f] min-h-[30dvh] flex">
			<div class="max-w-[95dvw] md:max-w-[50dvw] mx-auto self-center">
				<p class="text-2xl text-center text-white">
					At Ottawa SEO Masters, we’re dedicated to optimizing websites for
					better search engine rankings and user experiences. SEO is more than
					just keywords; it’s about making your site accessible and
					user-friendly. Let us help you enhance visibility and ensure your site
					reaches everyone effectively.
				</p>
			</div>
		</div>
	</section>
</template>
<script setup>
import { useHead } from '@unhead/vue'
import { onMounted, ref } from 'vue'
import AOS from 'aos'
import SeoChecklistForm from '@/components/emailSignups/SeoChecklistForm.vue'

onMounted(() => {
	AOS.init({
		duration: 3000,
	})
})

// SEO Metadata
useHead({
	title: 'SEO Services Ottawa - Ottawa SEO Masters',
	meta: [
		{
			name: 'description',
			content:
				'Expert SEO services in Ottawa, helping businesses improve search engine rankings, enhance user experience, and drive more traffic.',
		},
		{
			name: 'keywords',
			content:
				'SEO, Ottawa SEO, SEO Services, Search Engine Optimization, Ottawa, Web Masters, SEO Audit',
		},
		{
			property: 'og:title',
			content: 'SEO Services Ottawa - Ottawa SEO Masters',
		},
		{
			property: 'og:description',
			content:
				'At Ottawa SEO Masters, we’re dedicated to optimizing websites for better search engine rankings and user experiences. Get a free SEO audit today!',
		},
		{
			property: 'og:image',
			content: '/assets/seohero.jpg',
		},
		{
			property: 'og:url',
			content: 'https://www.ottawaseomasters.ca/seo-services-ottawa',
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
	],
})

const openSection = ref(null)

const toggleDetails = (section) => {
	openSection.value = openSection.value === section ? null : section
}
</script>

<style>
.gradient_bg:hover {
	background: linear-gradient(135deg, #e89e1d 0%, #ffcc66 100%);
}
</style>
