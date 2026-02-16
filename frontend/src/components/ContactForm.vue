<script setup>
import { ref } from 'vue'

defineProps({
  heading: { type: String, default: 'Send Us a Message' },
  description: { type: String, default: '' }
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const submitted = ref(false)
const submitting = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  submitting.value = true
  errorMessage.value = ''
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    if (response.ok) {
      submitted.value = true
      form.value = { name: '', email: '', phone: '', service: '', message: '' }
    } else {
      errorMessage.value = 'Something went wrong. Please try again or call us at (513) 871-6679.'
    }
  } catch {
    errorMessage.value = 'Unable to send your message. Please try again or call us at (513) 871-6679.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div>
    <h3 v-if="heading" class="text-2xl font-heading font-bold text-af-text mb-2">{{ heading }}</h3>
    <p v-if="description" class="text-af-gray mb-8 leading-relaxed">{{ description }}</p>

    <div v-if="submitted" class="border border-af-accent/30 bg-af-accent/5 p-10 text-center">
      <svg class="w-14 h-14 text-af-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"/></svg>
      <h4 class="text-xl font-heading font-bold text-af-text mb-2">Thank You</h4>
      <p class="text-af-gray">We've received your message and will get back to you shortly.</p>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="space-y-6" novalidate>
      <div v-if="errorMessage" class="bg-red-50 border border-red-200 p-4 text-red-700 text-sm" role="alert">
        {{ errorMessage }}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="contact-name" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Name <span class="text-af-accent">*</span></label>
          <input id="contact-name" v-model="form.name" type="text" required autocomplete="name" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200" placeholder="Your full name">
        </div>
        <div>
          <label for="contact-email" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Email <span class="text-af-accent">*</span></label>
          <input id="contact-email" v-model="form.email" type="email" required autocomplete="email" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200" placeholder="you@example.com">
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="contact-phone" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Phone</label>
          <input id="contact-phone" v-model="form.phone" type="tel" autocomplete="tel" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200" placeholder="(555) 123-4567">
        </div>
        <div>
          <label for="contact-service" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Service</label>
          <select id="contact-service" v-model="form.service" class="w-full border border-af-border px-4 py-3 text-af-text focus:outline-none focus:border-af-accent transition-colors duration-200 bg-white">
            <option value="">Select a service</option>
            <option value="kitchen">Kitchen Remodeling</option>
            <option value="bathroom">Bathroom Remodeling</option>
            <option value="room-additions">Room Additions</option>
            <option value="home-builder">Home Building</option>
            <option value="home-maintenance">Home Maintenance</option>
          </select>
        </div>
      </div>
      <div>
        <label for="contact-message" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Message <span class="text-af-accent">*</span></label>
        <textarea id="contact-message" v-model="form.message" required rows="5" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200 resize-y" placeholder="Tell us about your project..."></textarea>
      </div>
      <button type="submit" :disabled="submitting" class="bg-af-accent text-white px-10 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-af-accent-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
        {{ submitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </div>
</template>
