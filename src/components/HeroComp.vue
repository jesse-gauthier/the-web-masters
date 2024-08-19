<template>
	<div
		class="hero min-h-screen overflow-hidden bg-opacity-5 bg-fixed"
		role="img"
		style="background-image: url('../assets/workspace.jpg')"
		aria-label="Background image of digital themes representing online presence"
	>
		<div
			data-aos="fade-up"
			class="hero-content text-neutral-content inner-wrapper"
		>
			<div class="md:grid grid-cols-1 md:grid-cols-6 gap-x-5">
				<div
					class="self-center md:col-span-4 lg:col-span-3 md:col-start-1 text-black"
				>
					<h1
						class="mb-5 text-4xl md:text-5xl font-bold tracking-widest text-white"
					>
						Ottawa Web Design, SEO and E-Commerce Strategy
					</h1>
					<p class="mb-5 text-2xl font-medium text-left text-white">
						Our web design and SEO strategies are designed to significantly
						increase traffic and lead generation for your business.
					</p>
					<span class="block text-3xl my-8 orange-bg w-fit rounded py-2 px-3"
						>Backed By Our Guarantee!</span
					>
					<router-link
						to="/contact"
						class="flex btn btn-lg w-fit bg-white border-1 border-[#2b3c4f] hover:bg-[#2b3d4f] hover:text-white"
						role="button"
						aria-label="Start your project with us"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							class="fill-[#efaa1d]"
							width="25"
						>
							<path
								d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
							/>
						</svg>

						Get Started</router-link
					>
				</div>
				<img
					class="hidden w-[100%] mt-5 md:mt-0 rounded-xl self-center md:col-span-2 md:col-start-5 max-h-[70vh]"
					src="../assets/images/hero.jpg"
					alt="hero image"
				/>
			</div>
		</div>
	</div>
</template>
