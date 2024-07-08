<template>
  <div
    class="card-body transition duration-300 border-2 rounded-2xl bg-base-100 shadow-xl hover:bg-[#2b3d4f] hover:text-white"
    role="button"
    tabindex="0"
    @click="expanded = !expanded"
    @keydown.enter.space="expanded = !expanded"
    aria-expanded="expanded"
    aria-controls="service-description"
  >
    <div class="flex align-middle justify-center py-6 cursor-pointer hover:text-white">
      <h3 class="inline-flex justify-center card-title md:mx-auto text-2xl font-bold p-3">
        <span>{{ props.service.title }}</span>
        <svg
          class="w-[30px] transition-transform duration-300"
          :class="{ 'rotate-45': expanded, 'rotate-0': !expanded }"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M6 12H18M12 6V18"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </h3>
    </div>
    <div v-if="expanded" class="flex flex-col px-5" id="service-description">
      <p class="text-justify">{{ props.service.description }}</p>
      <!-- <button class="bg-white btn font-normal mt-5">More</button> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  service: {
    type: Object,
    required: true
  }
})

const expanded = ref(false)
</script>

<style scoped>
.card-body {
  padding: 1rem;
}

.card-body:hover * {
  stroke: white !important;
  transition: 80ms;
}
</style>
