<script setup>
import PageHero from '@/components/PageHero.vue'
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <PageHero
    subtitle="Start Your Project"
    title="Get Started"
    description="Contact the Allen & Frey Builders and Remodelers team to get started on your next project."
  />

  <section class="py-24 lg:py-32">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <ContactForm
        heading="Request a Free Quote"
        description="Are you ready to enhance your home? At Allen & Frey Builders and Remodelers, we make it easy for you to get started. Request a free quote today, and let our team provide you with a detailed assessment and estimate for your next project."
      />
    </div>
  </section>
</template>
