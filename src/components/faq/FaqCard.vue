<template>
  <div
    class="h-full bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer flex flex-col"
    @click="toggleExpand"
    :class="{ 'high-index': isExpanded }"
  >
    <div
      v-if="faq"
      class="px-4 py-3 flex gap-3 items-center border-b border-gray-300"
      role="button"
      :aria-expanded="isExpanded"
      :aria-controls="'answer-' + faq.id"
      tabindex="0"
      @keydown.enter="toggleExpand"
      @keydown.space.prevent="toggleExpand"
    >
      <h4
        class="m-0 text-lg font-semibold text-gray-800"
        role="heading"
        aria-level="4"
      >
        {{ faq.question }}
      </h4>
      <span class="ml-auto text-primary font-bold">{{
        isExpanded ? "-" : "+"
      }}</span>
    </div>
    <div class="relative">
      <p
        class="bg-white px-4 py-3 text-gray-700 text-sm leading-relaxed transition-all duration-300 absolute top-0 left-0 w-full bg-white z-10"
        v-if="isExpanded"
        :id="'answer-' + faq.id"
        tabindex="-1"
        ref="answer"
      >
        {{ faq.answer }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// Define props using best practices for Vue 2025 without TypeScript
const props = defineProps({
  faq: {
    type: Object,
    required: true,
  },
});

const isExpanded = ref(false);
const answer = ref(null);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

// Watch for the expanded state and focus on the answer when it's expanded
watch(isExpanded, (newVal) => {
  if (newVal && answer.value) {
    // Focus the answer paragraph when expanded
    answer.value.focus();
  }
});
</script>

<style>
.high-index {
  z-index: 9999;
}
</style>
