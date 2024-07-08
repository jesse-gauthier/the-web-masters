<script setup>
import HeroComp from '@/components/HeroComp.vue'
import AboutComp from '@/components/about/AboutComp.vue'
import ServicesComp from '@/components/serviceComps/ServicesComp.vue'
import FaqComp from '@/components/faq/FaqComp.vue'
</script>

<template>
  <main class="flex flex-col">
    <HeroComp id="hero" />
    <AboutComp id="about" />
    <ServicesComp id="services" />
    <FaqComp id="faq" />
  </main>
</template>

<style>
svg {
  color: #e89e1d;
  align-self: center;
  margin: auto 0;
}
</style>
