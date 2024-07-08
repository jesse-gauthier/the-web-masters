<template>
  <div
    class="px-3 py-4 flex flex-col items-center bg-[#2a3c4d] text-white rounded-lg hover-orange-bg"
    @click="isExpanded = !isExpanded"
    @keydown.enter.space="isExpanded = !isExpanded"
    role="button"
    aria-expanded="isExpanded"
    aria-controls="step-description-{{ props.index }}"
    tabindex="0"
  >
    <span class="text-lg font-bold">{{ props.index + 1 }}.</span>
    <span class="font-semibold">{{ props.step.name }}</span>
    <span
      v-if="isExpanded"
      id="step-description-{{ props.index }}"
      class="m-2 py-2 text-center border-t-2"
    >
      {{ props.step.desc }}
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

const props = defineProps({
  step: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>
