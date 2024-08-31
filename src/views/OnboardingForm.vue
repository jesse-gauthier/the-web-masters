<template>
	<div class="">
		<div
			id="onboard_banner"
			class="hero min-h-screen bg-cover bg-center bg-fixed"
		>
			<p
				class="max-w-xl text-2xl font-medium text-orange-500 p-8 bg-white bg-opacity-90 rounded-xl"
			>
				Thank you for your interest! Please complete the form, and we’ll provide
				you with a quote within two business days.
			</p>
		</div>
		<div class="max-w-3xl mx-auto pt-5">
			<!-- Form Section -->
			<div class="w-full mt-8 md:mt-0">
				<form @submit.prevent="submitForm">
					<!-- Contact Information -->
					<div class="form-control w-full mb-4">
						<label class="label" for="name">
							<span class="label-text">Your Name</span>
						</label>
						<input
							type="text"
							id="name"
							v-model="formData.name"
							class="input input-bordered w-full"
							placeholder="Enter your name"
							required
						/>
					</div>

					<div class="form-control w-full mb-4">
						<label class="label" for="email">
							<span class="label-text">Email Address</span>
						</label>
						<input
							type="email"
							id="email"
							v-model="formData.email"
							class="input input-bordered w-full"
							placeholder="Enter your email address"
							required
						/>
					</div>

					<div class="form-control w-full mb-4">
						<label class="label" for="phone">
							<span class="label-text">Phone Number</span>
						</label>
						<input
							type="tel"
							id="phone"
							v-model="formData.phone"
							class="input input-bordered w-full"
							placeholder="Enter your phone number"
						/>
					</div>

					<!-- Project Name -->
					<div class="form-control w-full mb-4">
						<label class="label" for="projectName">
							<span class="label-text">What is the name of your business</span>
						</label>
						<input
							type="text"
							id="projectName"
							v-model="formData.projectName"
							class="input input-bordered w-full"
							placeholder="Enter business name"
							required
						/>
					</div>

					<!-- Business Type -->
					<div class="form-control w-full mb-4">
						<label class="label" for="businessType">
							<span class="label-text">What type of business is it?</span>
						</label>
						<select
							id="businessType"
							v-model="formData.businessType"
							class="select select-bordered w-full"
							required
						>
							<option disabled value="">Select business type</option>
							<option v-for="type in businessTypes" :key="type" :value="type">
								{{ type }}
							</option>
						</select>
					</div>

					<!-- Project Description -->
					<div class="form-control w-full mb-4">
						<label class="label" for="projectDescription">
							<span class="label-text">Project Description</span>
						</label>
						<textarea
							id="projectDescription"
							v-model="formData.projectDescription"
							class="textarea textarea-bordered w-full"
							placeholder="Provide a brief description of the project"
						></textarea>
					</div>

					<!-- Target Audience -->
					<div class="form-control w-full mb-4">
						<label class="label" for="targetAudience">
							<span class="label-text">Who is your target audience?</span>
						</label>
						<input
							type="text"
							id="targetAudience"
							v-model="formData.targetAudience"
							class="input input-bordered w-full"
							placeholder="Enter target audience"
							required
						/>
					</div>

					<!-- Competitors or Inspiration URLs -->
					<div class="form-control w-full mb-4">
						<label class="label" for="competitors">
							<span class="label-text">Competitors or Inspiration URLs</span>
						</label>
						<textarea
							id="competitors"
							v-model="formData.competitors"
							class="textarea textarea-bordered w-full"
							placeholder="Provide URLs of competitors or websites you like"
						></textarea>
					</div>

					<!-- Design Style Preferences -->
					<div class="form-control w-full mb-4">
						<label class="label" for="designPreferences">
							<span class="label-text">Design Style Preferences</span>
						</label>
						<textarea
							id="designPreferences"
							v-model="formData.designPreferences"
							class="textarea textarea-bordered w-full"
							placeholder="Describe your design style preferences"
						></textarea>
					</div>

					<!-- Budget -->
					<div class="form-control w-full mb-4">
						<label class="label" for="budget">
							<span class="label-text"
								>What is your budget for this project?</span
							>
						</label>
						<input
							type="number"
							id="budget"
							v-model="formData.budget"
							class="input input-bordered w-full"
							placeholder="Enter budget in CAD"
							required
						/>
					</div>

					<!-- Timeline -->
					<div class="form-control w-full mb-4">
						<label class="label" for="timeline">
							<span class="label-text">What is your expected timeline?</span>
						</label>
						<input
							type="text"
							id="timeline"
							v-model="formData.timeline"
							class="input input-bordered w-full"
							placeholder="Enter timeline (e.g., 3 months)"
							required
						/>
					</div>

					<!-- Hosting Needed -->
					<div class="form-control w-full mb-4">
						<label class="label" for="hosting">
							<span class="label-text">Do you need hosting?</span>
						</label>
						<select
							id="hosting"
							v-model="formData.hosting"
							class="select select-bordered w-full"
							required
						>
							<option disabled value="">Select an option</option>
							<option value="Yes">Yes</option>
							<option value="No">No</option>
						</select>
					</div>

					<!-- Domain Needed -->
					<div class="form-control w-full mb-4">
						<label class="label" for="domain">
							<span class="label-text">Do you need a domain name?</span>
						</label>
						<select
							id="domain"
							v-model="formData.domain"
							class="select select-bordered w-full"
							required
						>
							<option disabled value="">Select an option</option>
							<option value="Yes">Yes</option>
							<option value="No">No</option>
						</select>
					</div>

					<!-- Services Needed (Multiple Choice) -->
					<div class="form-control w-full mb-4">
						<label class="label" for="services">
							<span class="label-text">What services do you need?</span>
						</label>
						<div
							v-for="service in servicesList"
							:key="service"
							class="flex items-center mb-2"
						>
							<input
								type="checkbox"
								:id="service"
								:value="service"
								v-model="formData.services"
								@change="handleOtherServiceChange"
								class="checkbox checkbox-orange"
							/>
							<label :for="service" class="ml-2">{{ service }}</label>
						</div>
						<!-- Other Services Text Box -->
						<div v-if="formData.services.includes('Other')" class="mt-4">
							<input
								type="text"
								v-model="formData.otherServiceDetails"
								class="input input-bordered w-full"
								placeholder="Please specify other services"
							/>
						</div>
					</div>

					<!-- Additional Information -->
					<div class="form-control w-full mb-4">
						<label class="label" for="additionalInfo">
							<span class="label-text"
								>Any additional information we should know?</span
							>
						</label>
						<textarea
							id="additionalInfo"
							v-model="formData.additionalInfo"
							class="textarea textarea-bordered w-full"
							placeholder="Provide additional details"
						></textarea>
					</div>

					<!-- Submit Button -->
					<div class="form-control w-full">
						<button type="submit" class="btn btn-outline w-full text-lg">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
		<!-- Toast Notification -->
		<div v-if="showToast" class="toast toast-top toast-center">
			<div
				:class="[
					'alert',
					toastStatus === 'success' ? 'alert-success' : 'alert-error',
				]"
			>
				<div>
					<span>{{ toastMessage }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import DOMPurify from 'dompurify'

const sanitizeInput = (input) => {
	return DOMPurify.sanitize(input)
}

// Sanitize form data before submission
const sanitizeFormData = (data) => {
	return {
		name: sanitizeInput(data.name),
		email: sanitizeInput(data.email),
		phone: sanitizeInput(data.phone),
		projectName: sanitizeInput(data.projectName),
		businessType: sanitizeInput(data.businessType),
		projectDescription: sanitizeInput(data.projectDescription),
		targetAudience: sanitizeInput(data.targetAudience),
		competitors: sanitizeInput(data.competitors),
		designPreferences: sanitizeInput(data.designPreferences),
		budget: sanitizeInput(data.budget),
		timeline: sanitizeInput(data.timeline),
		hosting: sanitizeInput(data.hosting),
		domain: sanitizeInput(data.domain),
		services: data.services.map(sanitizeInput),
		otherServiceDetails: sanitizeInput(data.otherServiceDetails),
		additionalInfo: sanitizeInput(data.additionalInfo),
	}
}

const initialFormData = () => ({
	name: '',
	email: '',
	phone: '',
	projectName: '',
	businessType: '',
	projectDescription: '',
	targetAudience: '',
	competitors: '',
	designPreferences: '',
	budget: null,
	timeline: '',
	hosting: '',
	domain: '',
	services: [], // Array to hold multiple services
	otherServiceDetails: '', // To hold the value if "Other" is selected
	additionalInfo: '',
})

const formData = ref(initialFormData())

const businessTypes = [
	'E-commerce',
	'Portfolio',
	'Blog',
	'Business Website',
	'Landing Page',
	'Non-profit',
	'Other',
]

const servicesList = [
	'Web Development',
	'SEO Optimization',
	'Content Creation',
	'Graphic Design',
	'Digital Marketing',
	'Consultation',
	'Maintenance & Support',
	'Other',
]

const showToast = ref(false)
const toastMessage = ref('')
const toastStatus = ref('success')

const handleOtherServiceChange = () => {
	if (!formData.value.services.includes('Other')) {
		formData.value.otherServiceDetails = ''
	}
}

const submitForm = async () => {
	try {
		// Sanitize the form data before sending it to the server
		const sanitizedData = sanitizeFormData(formData.value)

		const response = await fetch('/onboarding_form.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(sanitizedData),
		})

		if (response.ok) {
			toastMessage.value = 'Form submitted successfully!'
			toastStatus.value = 'success'
			formData.value = initialFormData() // Reset the form data
		} else {
			const result = await response.json()
			toastMessage.value = result.message || 'Failed to submit form!'
			toastStatus.value = 'error'
		}
	} catch (error) {
		toastMessage.value = 'An error occurred while submitting the form!'
		toastStatus.value = 'error'
	} finally {
		showToast.value = true
		setTimeout(() => {
			showToast.value = false
		}, 3000)
	}
}
</script>

<style scoped>
.toast {
	position: fixed;
	top: 10px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1000;
}
.alert {
	padding: 10px;
	border-radius: 5px;
	color: white;
}
.alert-success {
	background-color: #4caf50;
}
.alert-error {
	background-color: #f44336;
}

#onboard_banner {
	background-image: url('../assets/branding/contact-image.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.checkbox-orange:checked {
	background-color: #f97316;
	border-color: #f97316;
	background-image: none;
}
.checkbox-orange:checked::before {
	box-shadow: inset 0 0 0 4px #ffffff;
}
</style>
