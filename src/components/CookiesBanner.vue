<template>
  <div v-if="isVisible" class="fixed bottom-0 w-full bg-gray-800 text-white p-4 text-center">
    <div class="flex justify-center w-[80vw] mx-auto gap-12">
      <p class="self-center">{{ message }}</p>
      <button
        @click="acceptCookies"
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(true)
const message = ref('We use cookies to ensure you get the best experience on our website.')
const buttonText = ref('Agree')

function acceptCookies() {
  isVisible.value = false
  localStorage.setItem('cookiesAccepted', 'true')
}

if (localStorage.getItem('cookiesAccepted') === 'true') {
  isVisible.value = false
}
</script>

<style scoped></style>
