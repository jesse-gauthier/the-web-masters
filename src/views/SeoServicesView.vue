<template>
	<section>
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
			<div class="hero-content flex-col text-neutral-content">
				<h1 class="text-5xl max-w-4xl text-center">SEO Services Ottawa</h1>
				<p class="max-w-3xl text-lg text-start">
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
		<div class="max-w-4xl mx-auto">
			<!-- Starting Content -->
			<div class="mt-7">
				<div class="inner-wrapper py-4 flex flex-col gap-5">
					<!-- Why Choose -->
					<div class="flex flex-col justify-start">
						<h3 class="text-3xl font-bold text-center">
							Why Choose OttawaWebMasters.ca for Your SEO Needs?
						</h3>
						<div class="bg-[#e89e1d] h-[2.5px] mt-2 mb-4 w-1/3 mx-auto"></div>
						<ol class="list-decimal w-2/3 mx-auto">
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
						<h3 class="text-3xl font-bold">Our 6 Step SEO Process</h3>
						<ul class="grid grid-cols-1 md:grid-cols-3 gap-5">
							<li
								class="border-4 border-[#e89e1d] rounded-md py-4 px-2 text-center"
							>
								<h4
									class="cursor-pointer font-bold"
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
									class="cursor-pointer font-bold"
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
									class="cursor-pointer font-bold"
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
									class="cursor-pointer font-bold"
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
									class="cursor-pointer font-bold"
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
									class="cursor-pointer font-bold"
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
			<div class="my-8 mx-auto">
				<h3 class="text-3xl font-bold">Our Seo Services</h3>
				<ul class="list-disc list-inside marker:text-[#e89e1d] marker:text-3xl">
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
			<div class="inner-wrapper">
				<h3 class="text-3xl font-bold">Our Packages</h3>
				<ul>
					<li>
						<h3>Essential Package</h3>
						<p>$1200 Per Month</p>
						<p>Ranking improvements within 2-3 months</p>
						<ul>
							<li>20 Quality Backlinks</li>
							<li>Directory Citations (For Google Local Listing)</li>
							<li>Keyword Ranking Reports (Real Time Results)</li>
							<li>Link Building Reports</li>
							<li>Google Webmaster Tools and Google G4 Analytics Setup</li>
						</ul>
						<p><strong>GET STARTED</strong></p>
					</li>
					<li>
						<h3>Premier Package</h3>
						<p>$2300 Per Month</p>
						<p>Ranking improvements within 1-2 months</p>
						<ul>
							<li>40 Quality Backlinks</li>
							<li>Directory Citations (For Google Local Listing)</li>
							<li>Keyword Ranking Reports (Real Time Results)</li>
							<li>Link Building Reports</li>
							<li>Google Webmaster Tools and Google G4 Analytics Setup</li>
							<li>Google Ad Setup ($100 Free Credit)</li>
						</ul>
						<p><strong>GET STARTED</strong></p>
					</li>
					<li>
						<h3>Most Popular: Elite Package</h3>
						<p>$5000 Per Month</p>
						<p>Ranking improvements within 1 month</p>
						<ul>
							<li>100 Quality Backlinks</li>
							<li>Directory Citations (For Google Local Listing)</li>
							<li>Keyword Ranking Reports (Real Time Results)</li>
							<li>Link Building Reports</li>
							<li>Google Webmaster Tools and Google G4 Analytics Setup</li>
							<li>Google Ad Setup ($200 Free Credit)</li>
						</ul>
						<p><strong>GET STARTED</strong></p>
					</li>
				</ul>
			</div>
			<!-- Extra Text -->
			<div class="inner-wrapper">
				<p class="text-lg text-start">
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
import { ref } from 'vue'

const openSection = ref(null)

const toggleDetails = (section) => {
	openSection.value = openSection.value === section ? null : section
}
</script>
