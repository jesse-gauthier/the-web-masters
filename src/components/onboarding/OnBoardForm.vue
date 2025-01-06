<template>
  <div class="container mx-auto p-6">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Dynamic Section Rendering -->
      <div v-if="currentSection === 1" class="card bg-base-100 shadow-xl p-6">
        <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Your Name*</span>
            </label>
            <input
              v-model="formData.name"
              type="text"
              class="input input-bordered"
              aria-label="Your name"
              placeholder="John Doe"
              required
            />
            <small v-if="!formData.name" class="text-error"
              >This field is required.</small
            >
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Email Address*</span>
            </label>
            <input
              v-model="formData.email"
              type="email"
              class="input input-bordered"
              aria-label="Email address"
              placeholder="johndoe@example.com"
              required
            />
            <small v-if="!formData.email" class="text-error"
              >This field is required.</small
            >
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Phone Number</span>
            </label>
            <input
              v-model="formData.phone"
              type="tel"
              class="input input-bordered"
              aria-label="Phone number"
              placeholder="+1 234 567 890"
            />
            <small class="text-muted"
              >Include your country code if applicable.</small
            >
          </div>
        </div>
      </div>

      <div v-if="currentSection === 2" class="card bg-base-100 shadow-xl p-6">
        <h2 class="text-2xl font-bold mb-4">Business Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Business Name*</span>
            </label>
            <input
              v-model="formData.businessName"
              type="text"
              class="input input-bordered"
              aria-label="Business name"
              placeholder="Your Business Name"
              required
            />
            <small v-if="!formData.businessName" class="text-error"
              >This field is required.</small
            >
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Target Audience</span>
            </label>
            <input
              v-model="formData.targetAudience"
              type="text"
              class="input input-bordered"
              aria-label="Target audience"
              placeholder="Describe your audience"
            />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Website URL (if existing)</span>
            </label>
            <input
              v-model="formData.websiteUrl"
              type="url"
              class="input input-bordered"
              aria-label="Website URL"
              placeholder="https://example.com"
            />
          </div>
        </div>
      </div>

      <div v-if="currentSection === 3" class="card bg-base-100 shadow-xl p-6">
        <h2 class="text-2xl font-bold mb-4">Technical Requirements</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Hosting Needed?</span>
              <input
                v-model="formData.hostingNeeded"
                type="checkbox"
                class="checkbox"
                aria-label="Hosting needed"
              />
            </label>
          </div>

          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">E-commerce Functionality?</span>
              <input
                v-model="formData.ecommerceNeeded"
                type="checkbox"
                class="checkbox"
                aria-label="E-commerce functionality needed"
              />
            </label>
          </div>
        </div>
      </div>

      <div v-if="currentSection === 4" class="card bg-base-100 shadow-xl p-6">
        <h2 class="text-2xl font-bold mb-4">Project Management</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Budget Range</span>
            </label>
            <select
              v-model="formData.budgetRange"
              class="select select-bordered"
              aria-label="Budget range"
            >
              <option value="">Select Budget Range</option>
              <option value="0-5000">$0 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000+">$10,000+</option>
            </select>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Expected Timeline</span>
            </label>
            <input
              v-model="formData.timeline"
              type="text"
              class="input input-bordered"
              aria-label="Expected timeline"
              placeholder="e.g., 3 months"
            />
          </div>
        </div>
      </div>

      <!-- Navigation and Progress Bar -->
      <div class="mt-6 flex justify-between items-center">
        <button
          v-if="currentSection > 1"
          type="button"
          @click="currentSection--"
          class="btn btn-outline"
        >
          Previous
        </button>

        <button
          v-if="currentSection < totalSections"
          type="button"
          @click="currentSection++"
          class="btn btn-outline border-success text-black"
        >
          Next
        </button>

        <button
          v-if="currentSection === totalSections"
          type="submit"
          class="btn btn-success text-white"
        >
          Submit Form
        </button>
      </div>

      <div class="w-full bg-gray-200 rounded-full h-2.5 mt-4">
        <div
          class="bg-blue-600 h-2.5 rounded-full"
          :style="{ width: `${(currentSection / totalSections) * 100}%` }"
        ></div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DOMPurify from "dompurify";

const formData = ref({
  name: "",
  email: "",
  phone: "",
  businessName: "",
  targetAudience: "",
  websiteUrl: "",
  hostingNeeded: false,
  ecommerceNeeded: false,
  budgetRange: "",
  timeline: "",
});

const currentSection = ref(1);
const totalSections = 4;
const formSubmitted = ref(false);

const sanitizeData = (data) => {
  const sanitizedData = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "string") {
      sanitizedData[key] = DOMPurify.sanitize(value);
    } else {
      sanitizedData[key] = value;
    }
  }
  return sanitizedData;
};

const handleSubmit = async () => {
  try {
    const sanitizedData = sanitizeData(formData.value);
    console.log("Form submitted:", sanitizedData);
    formSubmitted.value = true;
    // Add your API call or form processing logic here
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
</script>
