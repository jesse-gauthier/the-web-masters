<template>
  <div class="bg-white min-h-[40vh] py-8" role="main">
    <div class="inner-wrapper">
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
          <h2 class="font-bold text-xl">
            Based in Canada's Capital:<br />
            <span class="block mt-2">Expert Web Developers and Designers</span>
          </h2>
          <p class="text-md">
            At The Web Masters, we craft impactful digital experiences that resonate globally. Our
            expertise spans Branding, Web Design, Web Development, UX Design, SEO, and Digital
            Marketing. Our clients seek technological solutions that not only automate and enhance
            business operations but also optimize overall performance. The solutions we develop aim
            to improve the end user experience by focusing on usability, accessibility, and
            availability.
          </p>
          <p class="text-md">
            Our highly skilled technical team is dedicated to delivering innovative solutions
            tailored to meet the diverse needs of our clients at every level.
          </p>
          <router-link
            class="underline hover-orange mx-auto"
            to="/contact"
            aria-label="Contact us for a free consultation"
          >
            Get a Free Consultation
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
