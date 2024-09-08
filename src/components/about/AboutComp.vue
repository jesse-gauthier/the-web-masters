<template>
	<div class="bg-white min-h-[40vh] py-8" role="main">
		<div class="inner-wrapper" data-aos="fade-up">
			<div class="grid grid-cols-1 md:grid-cols-4">
				<div class="col-span-1 md:col-span-2 order-2 flex flex-col gap-3">
					<img
						class="h-100 w-100 rounded-2xl md:max-w-[35dvw] mx-auto"
						src="@/assets/images/job.jpg"
						alt="Dedicated web development team in action"
					/>
					<img
						class="h-100 w-100 rounded-2xl md:max-w-[35dvw] mx-auto"
						src="@/assets/images/business.jpg"
						alt="Business professionals collaborating on a project"
					/>
				</div>
				<div
					class="col-span-1 md:col-span-2 flex flex-col gap-4 md:order-2 justify-center my-3 px-3 md:pr-24 *:text-justify"
				>
					<h2 class="font-bold text-xl poppins-bold">
						Based in Canada's Capital:<br />
						<span class="block mt-2 poppins-bold"
							>Expert Web Developers and Designers</span
						>
					</h2>
					<p class="text-lg poppins-medium">
						At The Web Masters, we’re all about creating digital experiences
						that leave a lasting impression worldwide. From nailing your
						branding to building sleek websites, improving UX, boosting your
						SEO, and mastering digital marketing – we’ve got it covered. Our
						clients come to us looking for smart tech solutions that don’t just
						streamline their business but take it to the next level. Everything
						we build is designed to make life easier for the end user, with a
						strong focus on usability, accessibility, and reliability.
					</p>
					<p class="text-lg poppins-medium">
						Our talented tech team is all about crafting innovative solutions
						that fit our clients’ unique needs, no matter the scale.
					</p>
					<router-link
						class="my-12 mx-auto flex w-[fit-content] px-6 btn bg-white border-1 border-[#2b3c4f] hover:bg-[#2b3d4f] hover:text-white hover:underline underline-offset-4"
						to="/contact"
						aria-label="Contact us for a free consultation"
					>
						Get a Free Website Audit
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
