<template>
  <div class="bg-white min-h-[40vh] py-8" role="main">
    <!-- Outer wrapper for the section, providing background color and vertical padding -->
    <div class="inner-wrapper px-4 lg:px-16" data-aos="fade-up">
      <!-- Grid layout for organizing images and text side by side -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col gap-4">
          <!-- First image: Displayed with responsive width, rounded corners, and shadow -->
          <img
            class="h-auto w-full rounded-xl object-cover shadow-md"
            src="@/assets/images/job.jpg"
            alt="Dedicated web development team in action"
          />
          <!-- Second image: Same styling as the first, ensuring design consistency -->
          <img
            class="h-auto w-full rounded-xl object-cover shadow-md"
            src="@/assets/images/business.jpg"
            alt="Business professionals collaborating on a project"
          />
        </div>
        <div class="flex flex-col gap-6 justify-center">
          <!-- Heading with primary title and a secondary line styled for emphasis -->
          <h2 class="font-bold text-2xl md:text-3xl text-gray-800">
            Based in Canada's Capital:
            <span class="block mt-2 text-bluewood"
              >Expert Web Developers and Designers</span
            >
          </h2>
          <!-- Introduction paragraph explaining the company's expertise and services -->
          <p class="text-base md:text-lg text-gray-600 leading-relaxed">
            At <span class="font-semibold">The Web Masters</span>, we specialize
            in creating digital experiences that leave a lasting impression
            worldwide. From enhancing your branding to crafting sleek websites,
            improving user experiences, optimizing SEO, and mastering digital
            marketing – we’ve got you covered.
          </p>
          <!-- Paragraph explaining the company's value proposition for clients -->
          <p class="text-base md:text-lg text-gray-600 leading-relaxed">
            We partner with clients looking for smart tech solutions that
            streamline their business operations and elevate their success.
            Every solution we create prioritizes usability, accessibility, and
            reliability, making life easier for end users.
          </p>
          <!-- Closing paragraph reinforcing the company's dedication and tailored solutions -->
          <p class="text-base md:text-lg text-gray-600 leading-relaxed">
            Our dedicated team of tech experts is passionate about delivering
            innovative and tailored solutions for businesses of all sizes.
          </p>
          <!-- Call-to-action button encouraging users to contact for a free audit -->
          <router-link
            class="btn w-fit btn-success text-white transition duration-300"
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
