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
  preferredContact: '',
  subject: '',
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
      form.value = { name: '', email: '', phone: '', preferredContact: '', subject: '', message: '' }
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

    <div v-if="submitted" class="border border-af-accent/30 bg-af-accent/5 p-6 md:p-10 text-center">
      <svg class="w-14 h-14 text-af-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"/></svg>
      <h4 class="text-xl font-heading font-bold text-af-text mb-2">Thank You</h4>
      <p class="text-af-gray">We've received your message and will get back to you shortly.</p>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="space-y-6" novalidate>
      <div v-if="errorMessage" class="bg-red-50 border border-red-200 p-4 text-red-700 text-sm" role="alert">
        {{ errorMessage }}
      </div>

      <!-- Name -->
      <div>
        <label for="contact-name" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Name <span class="text-af-accent">*</span></label>
        <input id="contact-name" v-model="form.name" type="text" required autocomplete="name" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200" placeholder="Your full name">
      </div>

      <!-- Email & Phone -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="contact-email" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Email <span class="text-af-accent">*</span></label>
          <input id="contact-email" v-model="form.email" type="email" required autocomplete="email" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200" placeholder="you@example.com">
        </div>
        <div>
          <label for="contact-phone" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Phone</label>
          <input id="contact-phone" v-model="form.phone" type="tel" autocomplete="tel" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200" placeholder="(555) 123-4567">
        </div>
      </div>

      <!-- Preferred Contact Method -->
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

      <!-- Subject -->
      <div>
        <label for="contact-subject" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Subject <span class="text-af-accent">*</span></label>
        <input id="contact-subject" v-model="form.subject" type="text" required class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200" placeholder="What is this regarding?">
      </div>

      <!-- Message -->
      <div>
        <label for="contact-message" class="block text-sm font-medium text-af-text mb-2 uppercase tracking-wide">Message <span class="text-af-accent">*</span></label>
        <textarea id="contact-message" v-model="form.message" required rows="5" class="w-full border border-af-border px-4 py-3 text-af-text placeholder-af-gray/50 focus:outline-none focus:border-af-accent transition-colors duration-200 resize-y" placeholder="Tell us about your project..."></textarea>
      </div>

      <button type="submit" :disabled="submitting" class="w-full sm:w-auto bg-af-accent text-white px-8 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-af-accent-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
        {{ submitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </div>
</template>
