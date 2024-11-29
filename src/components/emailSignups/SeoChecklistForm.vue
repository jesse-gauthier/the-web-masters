<template>
  <div
    data-aos="fade-up"
    :class="{ hidden: !isOpen }"
    class="fixed top-[30%] left-[30%] bg-white p-8 rounded-lg shadow-lg h-fit py-14 w-fit"
  >
    <div class="text-center">
      <!-- <button class="absolute right-0 mr-2 top-0" @click="closePopup">X</button> -->
      <h3 class="text-3xl poppins-regular leading-relaxed">
        <span class="">Get Your </span>
        <span class="bg-[#E89E1D] px-5 text-white rounded py-2 font-light"
          >Free 40</span
        >
        item SEO Checklist
      </h3>
      <p class="mt-2 text-sm text-gray-600">
        Enter your email below to receive a free copy of our 40 item SEO
        checklist.
      </p>
    </div>
    <form
      v-if="!formSubmitted"
      @submit.prevent="submitChecklistForm"
      class="mt-8 space-y-6 max-w-md mx-auto"
    >
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email" class="sr-only">Email Address</label>
          <input
            v-model="checklistForm.email"
            id="email"
            name="email"
            type="email"
            required
            class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#febf45] focus:border-[#febf45] focus:z-10 sm:text-sm"
            placeholder="Email Address"
          />
        </div>
      </div>
      <div class="flex flex-col justify-between gap-4">
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-[#E89E1D] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E89E1D]"
        >
          Download Checklist
        </button>
        <button
          type="button"
          @click="closePopup"
          class="w-full text-sm text-gray-500 underline focus:outline-none"
        >
          I don't want a free checklist
        </button>
      </div>
    </form>
    <div v-else class="mt-8 text-center text-green-600">
      <p>Check your email for the download link!</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { logsCustomEvents } from "@/supabaseClient";

const isOpen = ref(false); // Initialize as false
const checklistForm = reactive({
  email: "",
});
const formSubmitted = ref(false);

const submitChecklistForm = async () => {
  const randomUserId = localStorage.getItem("randomUserId") || "anno";
  await logsCustomEvents("seo_checklist_download", randomUserId);
  try {
    const response = await fetch(
      "https://ottawawebmasters.ca/seo_checklist.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checklistForm),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    formSubmitted.value = true;

    if (window.gtag) {
      window.gtag("event", "email_submit", {
        event_category: "Checklist",
        event_label: "SEO Checklist Email Submission",
        value: 1,
      });
    }

    // Optionally update the timestamp here if you want the popup to stay closed
    localStorage.setItem("popupClosedTimestamp", Date.now());

    setTimeout(() => {
      formSubmitted.value = false;
      checklistForm.email = "";
    }, 5000);
  } catch (error) {
    console.error("Error:", error);
  }
};

const closePopup = () => {
  isOpen.value = false;
  localStorage.setItem("popupClosedTimestamp", Date.now());
};

onMounted(() => {
  const popupClosedTimestamp = parseInt(
    localStorage.getItem("popupClosedTimestamp"),
    10
  );
  const delay = 3000; // Delay in milliseconds (e.g., 3000ms = 3 seconds)

  if (popupClosedTimestamp) {
    const now = Date.now();
    const timeDiff = now - popupClosedTimestamp;
    const hours24 = 24 * 60 * 60 * 1000; // Milliseconds in 24 hours
    if (timeDiff < hours24) {
      isOpen.value = false;
    } else {
      // Remove the old timestamp since it's expired
      localStorage.removeItem("popupClosedTimestamp");
      // Set a delay before showing the popup
      setTimeout(() => {
        isOpen.value = true;
      }, delay);
    }
  } else {
    // Set a delay before showing the popup
    setTimeout(() => {
      isOpen.value = true;
    }, delay);
  }
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
