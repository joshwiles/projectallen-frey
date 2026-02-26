<script setup>
import { ref } from 'vue'
import PageHero from '@/components/PageHero.vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  preferredContact: '',
  bestTime: '',
  services: [],
  serviceAddress: '',
  message: ''
})

const submitted = ref(false)
const submitting = ref(false)
const errorMessage = ref('')

const serviceOptions = [
  { value: 'kitchen', label: 'Kitchen Remodeling' },
  { value: 'bathroom', label: 'Bathroom Remodeling' },
  { value: 'room-additions', label: 'Room Additions' },
  { value: 'home-builder', label: 'Home Building' },
  { value: 'home-maintenance', label: 'Home Maintenance' },
]

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
      form.value = { name: '', email: '', phone: '', preferredContact: '', bestTime: '', services: [], serviceAddress: '', message: '' }
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
  <PageHero
    subtitle="Start Your Project"
    title="Get Started"
    description="Contact the Allen & Frey Builders and Remodelers team to get started on your next project."
  />

  <section class="py-24 lg:py-32">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <h3 class="text-2xl font-heading font-bold text-af-text mb-2">Request a Free Quote</h3>
      <p class="text-af-gray mb-8 leading-relaxed">Are you ready to enhance your home? At Allen & Frey Builders and Remodelers, we make it easy for you to get started. Request a free quote today, and let our team provide you with a detailed assessment and estimate for your next project.</p>

      <div v-if="submitted" class="border border-af-accent/30 bg-af-accent/5 p-6 md:p-10 text-center">
        <svg class="w-14 h-14 text-af-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"/></svg>
        <h4 class="text-xl font-heading font-bold text-af-text mb-2">Thank You</h4>
        <p class="text-af-gray">We've received your request and will get back to you shortly.</p>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="space-y-6" novalidate>
        <div v-if="errorMessage" class="bg-red-50 border border-red-200 p-4 text-red-700 text-sm" role="alert">
          {{ errorMessage }}
        </div>

        <!-- Name -->
        <div>
          <label for="gs-name" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Name <span class="text-af-accent">*</span></label>
          <input id="gs-name" v-model="form.name" type="text" required autocomplete="name" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200" placeholder="Your full name">
        </div>

        <!-- Email & Phone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="gs-email" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Email <span class="text-af-accent">*</span></label>
            <input id="gs-email" v-model="form.email" type="email" required autocomplete="email" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200" placeholder="you@example.com">
          </div>
          <div>
            <label for="gs-phone" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Phone</label>
            <input id="gs-phone" v-model="form.phone" type="tel" autocomplete="tel" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200" placeholder="(555) 123-4567">
          </div>
        </div>

        <!-- Preferred Contact & Best Time -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-af-text mb-3 uppercase tracking-wide">Preferred Contact Method</label>
            <div class="flex gap-6">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" v-model="form.preferredContact" value="email" class="accent-af-accent w-4 h-4">
                <span class="text-af-gray text-sm">Email</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" v-model="form.preferredContact" value="phone" class="accent-af-accent w-4 h-4">
                <span class="text-af-gray text-sm">Phone</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" v-model="form.preferredContact" value="either" class="accent-af-accent w-4 h-4">
                <span class="text-af-gray text-sm">Either</span>
              </label>
            </div>
          </div>
          <div>
            <label for="gs-best-time" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Best Time to Contact</label>
            <select id="gs-best-time" v-model="form.bestTime" class="w-full border border-af-border px-4 py-3 text-af-text focus:outline-none focus:border-af-accent transition-colors duration-200 bg-white">
              <option value="">Select a time</option>
              <option value="morning">Morning (8am – 12pm)</option>
              <option value="afternoon">Afternoon (12pm – 5pm)</option>
              <option value="evening">Evening (5pm – 8pm)</option>
              <option value="anytime">Anytime</option>
            </select>
          </div>
        </div>

        <!-- Services Interested In -->
        <div>
          <label class="block text-sm font-medium text-af-text mb-3 uppercase tracking-wide">Services Interested In</label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label v-for="option in serviceOptions" :key="option.value" class="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" v-model="form.services" :value="option.value" class="accent-af-accent w-4 h-4 flex-shrink-0">
              <span class="text-af-gray text-sm">{{ option.label }}</span>
            </label>
          </div>
        </div>

        <!-- Service Address -->
        <div>
          <label for="gs-address" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Service Address</label>
          <input id="gs-address" v-model="form.serviceAddress" type="text" autocomplete="street-address" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200" placeholder="Address where work will be performed">
        </div>

        <!-- Message -->
        <div>
          <label for="gs-message" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Message <span class="text-af-accent">*</span></label>
          <textarea id="gs-message" v-model="form.message" required rows="5" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200 resize-y" placeholder="Tell us about your project..."></textarea>
        </div>

        <button type="submit" :disabled="submitting" class="w-full sm:w-auto bg-af-accent text-white px-8 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-af-accent-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
          {{ submitting ? 'Sending...' : 'Request Free Quote' }}
        </button>
      </form>
    </div>
  </section>
</template>
