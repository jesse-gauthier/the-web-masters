<template>
	<div
		class="max-w-xs sm:max-w-md md:max-w-xl mx-auto p-6 bg-white border text-black border-gray-300 rounded-lg shadow-md"
	>
		<form
			@submit.prevent="submitForm"
			class="space-y-6"
			novalidate
			id="contact_form"
		>
			<!-- Name -->
			<div class="form-control">
				<label for="name" class="label">
					<span class="label-text">Name*</span>
				</label>
				<input
					type="text"
					id="name"
					v-model="formData.name"
					required
					aria-required="true"
					class="input input-bordered w-full"
				/>
				<span v-if="errors.name" class="text-error text-sm">{{
					errors.name
				}}</span>
			</div>

			<!-- Email -->
			<div class="form-control">
				<label for="email" class="label">
					<span class="label-text">Email*</span>
				</label>
				<input
					type="email"
					id="email"
					v-model="formData.email"
					required
					aria-required="true"
					class="input input-bordered w-full"
				/>
				<span v-if="errors.email" class="text-error text-sm">{{
					errors.email
				}}</span>
			</div>

			<!-- Phone -->
			<div class="form-control">
				<label for="phone" class="label">
					<span class="label-text">Phone Number:</span>
				</label>
				<input
					type="tel"
					id="phone"
					v-model="formData.phone"
					required
					aria-required="true"
					class="input input-bordered w-full"
				/>
			</div>

			<!-- Website Domain -->
			<div class="form-control">
				<label for="website" class="label">
					<span class="label-text">Website Domain:</span>
				</label>
				<input
					type="url"
					id="website"
					v-model="formData.website"
					class="input input-bordered w-full"
				/>
			</div>

			<!-- Contact Method -->
			<div class="form-control">
				<label for="contactMethod" class="label">
					<span class="label-text">Preferred Contact Method:</span>
				</label>
				<div class="flex justify-center gap-4">
					<div class="flex items-center">
						<input
							type="radio"
							id="contactEmail"
							value="email"
							required
							v-model="formData.contactMethod"
							class="radio radio-primary"
						/>
						<label for="contactEmail" class="ml-2 label-text">Email</label>
					</div>
					<div class="flex items-center">
						<input
							type="radio"
							id="contactPhone"
							value="phone"
							v-model="formData.contactMethod"
							class="radio radio-primary"
						/>
						<label for="contactPhone" class="ml-2 label-text">Phone</label>
					</div>
				</div>
			</div>

			<!-- Message -->
			<div class="form-control">
				<label for="message" class="label">
					<span class="label-text">Message*</span>
				</label>
				<textarea
					id="message"
					v-model="formData.message"
					required
					aria-required="true"
					class="textarea textarea-bordered w-full"
				></textarea>
				<span v-if="errors.message" class="text-error text-sm">{{
					errors.message
				}}</span>
			</div>

			<!-- Free Website Audit -->
			<div class="form-control">
				<label class="cursor-pointer flex items-start">
					<input
						id="freeAudit"
						type="checkbox"
						v-model="formData.freeAudit"
						class="checkbox checkbox-primary"
					/>
					<span class="label-text ml-2">Request a free SEO audit</span>
				</label>
			</div>

			<!-- Accept Terms and Conditions -->
			<div class="form-control">
				<label class="cursor-pointer flex items-start">
					<input
						id="acceptTerms"
						type="checkbox"
						v-model="formData.acceptTerms"
						required
						checked
						aria-required="true"
						class="checkbox checkbox-primary"
					/>
					<span class="label-text ml-2">I consent to be contacted</span>
				</label>
				<span v-if="errors.acceptTerms" class="text-error text-sm">{{
					errors.acceptTerms
				}}</span>
			</div>

			<!-- Send -->
			<button
				type="submit"
				class="btn btn-outline w-full text-lg"
				role="button"
			>
				Submit
			</button>
		</form>
		<div v-if="toast.message" :class="`alert alert-${toast.type} mt-4`">
			{{ toast.message }}
		</div>
	</div>
</template>

<script setup>
import { reactive, watch, ref } from 'vue'

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
	acceptTerms: false,
})

const errors = reactive({})
const toast = reactive({
	message: '',
	type: '',
})

// Variable to track if the form start event has been fired
const formStarted = ref(false)

// Watcher to detect when the user starts typing
watch(
	() => [
		formData.name,
		formData.email,
		formData.phone,
		formData.website,
		formData.message,
	],
	(newValues) => {
		if (!formStarted.value && newValues.some((value) => value !== '')) {
			// Google Analytics event tracking
			if (typeof gtag === 'function') {
				gtag('event', 'form started', {
					event_category: 'Contact Form',
					event_label: 'Form Started',
				})
			}
			formStarted.value = true // Ensure it only fires once
		}
	},
	{ immediate: false }
)

const validateForm = () => {
	errors.name = formData.name ? '' : 'Name is required.'
	errors.email = formData.email ? '' : 'Email is required.'
	errors.email = validEmail(formData.email) ? '' : 'Valid email is required.'
	errors.message = formData.message ? '' : 'Message is required.'
	errors.acceptTerms = formData.acceptTerms
		? ''
		: 'You must accept the terms and conditions.'

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
				event_label: 'Form Submission',
			})
		}

		// Handle form submission
		fetch('https://ottawawebmasters.ca/contact.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
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
	// Reset the formStarted tracker for a new submission
	formStarted.value = false
}
</script>

<style scoped></style>
