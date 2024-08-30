<template>
	<div
		class="max-w-3xl mx-auto p-6 bg-white border text-black border-gray-300 rounded-lg shadow-md"
	>
		<div class="">
			<p class="text-2xl">
				Thank you for your interest, please fill out the form, we will be in
				contact with your quote within 2 business days.
			</p>
			<!-- Form Section -->
			<div class="w-full mt-8 md:mt-0">
				<form @submit.prevent="submitForm">
					<!-- Project Name -->
					<div class="form-control w-full mb-4">
						<label class="label" for="projectName">
							<span class="label-text">What is the name of your project?</span>
						</label>
						<input
							type="text"
							id="projectName"
							v-model="formData.projectName"
							class="input input-bordered w-full"
							placeholder="Enter project name"
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

					<!-- Services Needed -->
					<div class="form-control w-full mb-4">
						<label class="label" for="services">
							<span class="label-text">What services do you need?</span>
						</label>
						<textarea
							id="services"
							v-model="formData.services"
							class="textarea textarea-bordered w-full"
							placeholder="Please describe the services you need"
							required
						></textarea>
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
						<button type="submit" class="btn btn-primary w-full">Submit</button>
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

const initialFormData = () => ({
	projectName: '',
	businessType: '',
	targetAudience: '',
	budget: null,
	timeline: '',
	hosting: '',
	domain: '',
	services: '',
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

const showToast = ref(false)
const toastMessage = ref('')
const toastStatus = ref('success')

const submitForm = async () => {
	try {
		const response = await fetch('/onboarding_form.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData.value),
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
</style>
