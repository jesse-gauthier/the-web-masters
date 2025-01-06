<template>
  <section
    class="justify-center bg-[#2b3d4f] text-white py-12 flex flex-col gap-12 min-h-[50vh]"
    aria-labelledby="testimonials-heading"
  >
    <!-- Section for testimonials with hard-coded reviews -->
    <div
      data-aos="fade-up"
      class="mx-auto w-[95dvw] md:w-[75dvw]"
      role="region"
      aria-labelledby="testimonials-heading"
    >
      <!-- First Testimonial -->
      <div class="max-w-4xl mx-auto mb-8">
        <div
          class="flex flex-col lg:flex-row justify-center gap-8 items-center"
        >
          <!-- Testimonial image -->
          <img
            src="/assets/projects/county_cooperage/logowh.svg"
            class="w-[200px] h-[200px] rounded-full object-fit border-4 border-white shadow-lg p-5"
            alt="county cooperage logo"
          />

          <!-- Testimonial text block -->
          <div class="text-center lg:text-left flex flex-col gap-4">
            <h3 class="text-xl md:text-2xl font-light italic">
              "Web Masters brings exceptional talent to website design and
              Google Analytics, constantly leveling up our digital strategies
              with fresh, innovative ideas. "
            </h3>
            <p class="text-lg font-light">Joe, CEO of The County Cooperage</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No dynamic logic required as reviews are hard-coded
</script>
