<template>
  <section
    class="justify-center bg-[#2b3d4f] text-white py-12 flex flex-col gap-12 min-h-[50vh]"
    aria-labelledby="testimonials-heading"
  >
    <h2 id="testimonials-heading" class="text-4xl md:text-5xl font-bold text-center text-white">
      Trusted By
    </h2>
    <div
      class="carousel mx-auto"
      role="region"
      aria-roledescription="carousel"
      aria-labelledby="testimonials-heading"
    >
      <div v-for="item in testimony" :key="item.name" class="carousel-item w-3/4 md:w-1/2 mx-auto">
        <div class="flex flex-col lg:flex-row gap-6 text-center px-1">
          <img
            :src="item.image"
            class="p-3 w-[200px] mx-auto rounded-md"
            :alt="`Image of ${item.name}`"
          />
          <blockquote
            class="my-4 md:my-0 italic w-100 md:w-3/4 text-justify lg:text-center text-xl self-center"
            role="document"
          >
            {{ item.text }}
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { testimony } from '@/data/testimony.js'
</script>
