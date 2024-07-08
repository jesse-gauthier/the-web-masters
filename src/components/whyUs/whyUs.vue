<template>
  <section
    class="w-[90vw] mx-auto min-h-[55vh] flex flex-col justify-center"
    aria-label="How We Work Process"
    itemscope
    itemtype="https://schema.org/HowToSection"
  >
    <h3 class="py-3 text-3xl mb-5" id="how-we-work-heading">How We Work:</h3>
    <ol
      class="grid grid-cols-2 md:grid-col-2 lg:grid-cols-4 gap-3 justify-evenly py-7"
      role="list"
      aria-labelledby="how-we-work-heading"
    >
      <li v-for="(step, index) in howWeWork" :key="step">
        <StepCard :step="step" :index="index" tabindex="0" />
      </li>
    </ol>
  </section>
</template>

<script setup>
import StepCard from './StepCard.vue'

const howWeWork = [
  { name: 'Discovery', desc: 'Identify the client’s needs and the project scope.' },
  { name: 'Research', desc: 'Gather information on market trends and user preferences.' },
  { name: 'Mockup', desc: 'Create visual drafts to explore different design options.' },
  { name: 'User Testing', desc: 'Conduct tests with real users to gather feedback.' },
  { name: 'Development', desc: 'Build and implement the actual product.' },
  { name: 'Bug Hunting', desc: 'Identify and fix any issues in the software.' },
  { name: 'Launch', desc: 'Deploy the finished product to the live environment.' },
  { name: 'Repeat', desc: 'Evaluate the results and plan the next iterations.' }
]
</script>
