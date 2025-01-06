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
        <div class="grid grid-cols-1 gap-4">
          <!-- Hosting Requirements -->
          <div class="form-control">
            <label class="label">
              <span class="label-text font-semibold">Hosting Requirements</span>
            </label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.hosting"
                  type="radio"
                  name="hosting"
                  value="managed"
                  class="radio"
                />
                <span class="label-text">Managed Hosting</span>
              </label>
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.hosting"
                  type="radio"
                  name="hosting"
                  value="cloud"
                  class="radio"
                />
                <span class="label-text">Cloud Hosting</span>
              </label>
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.hosting"
                  type="radio"
                  name="hosting"
                  value="self"
                  class="radio"
                />
                <span class="label-text">Self-Hosted</span>
              </label>
            </div>
          </div>

          <!-- Core Features -->
          <div class="form-control">
            <label class="label">
              <span class="label-text font-semibold">Core Features</span>
            </label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.features"
                  type="checkbox"
                  value="ecommerce"
                  class="checkbox"
                />
                <span class="label-text">E-commerce Platform</span>
              </label>
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.features"
                  type="checkbox"
                  value="cms"
                  class="checkbox"
                />
                <span class="label-text">Content Management System</span>
              </label>
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.features"
                  type="checkbox"
                  value="auth"
                  class="checkbox"
                />
                <span class="label-text">User Authentication</span>
              </label>
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.features"
                  type="checkbox"
                  value="api"
                  class="checkbox"
                />
                <span class="label-text">API Integration</span>
              </label>
            </div>
          </div>

          <!-- Performance -->
          <div class="form-control">
            <label class="label">
              <span class="label-text font-semibold"
                >Performance Optimization</span
              >
            </label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.performance"
                  type="checkbox"
                  value="cdn"
                  class="checkbox"
                />
                <span class="label-text">CDN Integration</span>
              </label>
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.performance"
                  type="checkbox"
                  value="optimization"
                  class="checkbox"
                />
                <span class="label-text">Asset Optimization</span>
              </label>
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.performance"
                  type="checkbox"
                  value="seo"
                  class="checkbox"
                />
                <span class="label-text">SEO Optimization</span>
              </label>
            </div>
          </div>

          <!-- Security -->
          <div class="form-control">
            <label class="label">
              <span class="label-text font-semibold"
                >Security Requirements</span
              >
            </label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.security"
                  type="checkbox"
                  value="ssl"
                  class="checkbox"
                />
                <span class="label-text">SSL Certificate</span>
              </label>
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.security"
                  type="checkbox"
                  value="backup"
                  class="checkbox"
                />
                <span class="label-text">Automated Backups</span>
              </label>
              <label class="label cursor-pointer justify-start gap-2">
                <input
                  v-model="formData.security"
                  type="checkbox"
                  value="firewall"
                  class="checkbox"
                />
                <span class="label-text">Web Application Firewall</span>
              </label>
            </div>
          </div>

          <!-- Additional Requirements -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">Additional Technical Requirements</span>
            </label>
            <textarea
              v-model="formData.additionalRequirements"
              class="textarea textarea-bordered"
              placeholder="Please specify any other technical requirements or preferences"
            ></textarea>
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
  hosting: "",
  features: [],
  performance: [],
  security: [],
  additionalRequirements: "",
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

    const response = await fetch("/onboarding_form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sanitizedData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      formSubmitted.value = true;
    } else {
      console.error("Error submitting form:", response.status);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
</script>
