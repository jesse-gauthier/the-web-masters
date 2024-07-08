<template>
  <div
    class="max-w-xs md:max-w-xl mx-auto p-6 bg-white border text-black border-gray-300 rounded-lg shadow-md"
  >
    <form @submit.prevent="submitForm" class="space-y-6" novalidate id="contact_form">
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          required
          aria-required="true"
          class="input input-bordered w-full mt-1"
        />
        <span v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</span>
      </div>
      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          aria-required="true"
          class="input input-bordered w-full mt-1"
        />
        <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
      </div>
      <!-- Phone -->
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          v-model="formData.phone"
          required
          aria-required="true"
          class="input input-bordered w-full mt-1"
        />
      </div>
      <!-- Website Domain -->
      <div>
        <label for="website" class="block text-sm font-medium text-gray-700">Website Domain:</label>
        <input
          type="url"
          id="website"
          v-model="formData.website"
          class="input input-bordered w-full mt-1"
        />
      </div>
      <!-- Services -->
      <div>
        <label for="service" class="block text-sm font-medium text-gray-700"
          >Services Interested In:</label
        >
        <select
          id="service"
          v-model="formData.service"
          required
          aria-required="true"
          class="select select-bordered w-full mt-1"
        >
          <option value="">Select a service</option>
          <option value="web_design">Web Design</option>
          <option value="web_development">Web Development</option>
          <option value="seo">SEO</option>
          <option value="content_writing">Other</option>
        </select>
      </div>
      <!-- Contact Method -->
      <div>
        <label for="contactMethod" class="block text-sm font-medium text-gray-700"
          >Preferred Contact Method:</label
        >
        <div class="mt-1 flex justify-center gap-4">
          <div class="flex items-center">
            <input
              type="radio"
              id="contactEmail"
              value="email"
              required
              v-model="formData.contactMethod"
              class="radio radio-primary"
            />
            <label for="contactEmail" class="ml-2 block text-sm text-gray-700">Email</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="contactPhone"
              value="phone"
              v-model="formData.contactMethod"
              class="radio radio-primary"
            />
            <label for="contactPhone" class="ml-2 block text-sm text-gray-700">Phone</label>
          </div>
        </div>
      </div>
      <!-- Best Time -->
      <div>
        <label for="bestTime" class="block text-sm font-medium text-gray-700"
          >Best Time to Contact:</label
        >
        <input
          type="text"
          id="bestTime"
          v-model="formData.bestTime"
          class="input input-bordered w-full mt-1"
        />
      </div>
      <!-- Message -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Message:</label>
        <textarea
          id="message"
          v-model="formData.message"
          required
          aria-required="true"
          class="textarea textarea-bordered w-full mt-1"
        ></textarea>
        <span v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</span>
      </div>
      <!-- Free Website Audit -->
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="freeAudit"
            type="checkbox"
            v-model="formData.freeAudit"
            class="checkbox checkbox-primary"
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="freeAudit" class="font-medium text-gray-700"
            >Request a free website audit</label
          >
        </div>
      </div>
      <!-- Accept Terms and Conditions -->
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="acceptTerms"
            type="checkbox"
            v-model="formData.acceptTerms"
            required
            aria-required="true"
            class="checkbox checkbox-primary"
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="acceptTerms" class="font-medium text-gray-700"
            >I accept the
            <a href="#" class="text-blue-600 underline">terms and conditions</a></label
          >
        </div>
        <span v-if="errors.acceptTerms" class="text-red-500 text-sm">{{ errors.acceptTerms }}</span>
      </div>
      <!-- Send -->
      <button
        type="submit"
        class="btn w-full bg-[#e89e1d] hover:bg-[#2b3d4f] text-gray-800 text-xl hover:text-white"
        role="button"
      >
        Submit
      </button>
    </form>
    <div v-if="toast.message" :class="`alert alert-${toast.type} mt-4`">{{ toast.message }}</div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  website: '',
  service: '',
  contactMethod: '',
  bestTime: '',
  message: '',
  freeAudit: false,
  acceptTerms: false
})

const errors = reactive({})
const toast = reactive({
  message: '',
  type: ''
})

const validateForm = () => {
  errors.name = formData.name ? '' : 'Name is required.'
  errors.email = formData.email ? '' : 'Email is required.'
  errors.email = validEmail(formData.email) ? '' : 'Valid email is required.'
  errors.message = formData.message ? '' : 'Message is required.'
  errors.acceptTerms = formData.acceptTerms ? '' : 'You must accept the terms and conditions.'

  return !Object.values(errors).some((error) => error)
}

const validEmail = (email) => {
  const re =
    /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i
  return re.test(email)
}

const submitForm = () => {
  if (validateForm()) {
    // Google Analytics event tracking
    if (typeof gtag === 'function') {
      gtag('event', 'submit', {
        event_category: 'Contact Form',
        event_label: 'Form Submission'
      })
    }

    // Handle form submission
    fetch('https://ottawawebmasters.ca/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          showToast('Message sent successfully!', 'success')
          resetForm()
        } else {
          showToast('An error occurred. Please try again.', 'error')
        }
      })
      .catch(() => {
        showToast('An error occurred. Please try again.', 'error')
      })
  }
}

const showToast = (message, type) => {
  toast.message = message
  toast.type = type
  setTimeout(() => {
    toast.message = ''
    toast.type = ''
  }, 3000)
}

const resetForm = () => {
  formData.name = ''
  formData.email = ''
  formData.phone = ''
  formData.website = ''
  formData.service = ''
  formData.contactMethod = ''
  formData.bestTime = ''
  formData.message = ''
  formData.freeAudit = false
  formData.acceptTerms = false
  Object.keys(errors).forEach((key) => (errors[key] = ''))
}
</script>

<style scoped>
/* Additional styles can be added here if necessary */
</style>
