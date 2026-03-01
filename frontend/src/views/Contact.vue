<script setup>
import PageHero from '@/components/PageHero.vue'
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <PageHero
    subtitle="Get In Touch"
    title="Contact Us"
    description="Questions about a project? Ready to get a quote? We're your local Cincinnati neighbors — give us a call or drop us a message."
  />

  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <!-- Form -->
        <ContactForm
          heading="Send Us a Message"
          description="Whether you're ready to kick off a project or just exploring options, our team is here to help. Fill out the form below and someone from our local Cincinnati team will be in touch shortly."
        />

        <!-- Contact Info -->
        <div>
          <div class="bg-af-light p-6 md:p-10">
            <h3 class="text-2xl font-heading font-bold text-af-text mb-8">Contact Information</h3>
            <div class="space-y-8">
              <a href="tel:5138716679" class="flex items-center gap-5 group">
                <div class="w-14 h-14 border border-af-accent/20 flex items-center justify-center flex-shrink-0 group-hover:border-af-accent group-hover:bg-af-accent/5 transition-all duration-300">
                  <svg class="w-5 h-5 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p class="text-xs text-af-gray uppercase tracking-widest-plus mb-1">Phone</p>
                  <p class="text-af-text font-semibold group-hover:text-af-accent transition-colors duration-300">(513) 871-6679</p>
                </div>
              </a>

              <a href="mailto:info@allen-freybuilders.com" class="flex items-center gap-5 group">
                <div class="w-14 h-14 border border-af-accent/20 flex items-center justify-center flex-shrink-0 group-hover:border-af-accent group-hover:bg-af-accent/5 transition-all duration-300">
                  <svg class="w-5 h-5 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p class="text-xs text-af-gray uppercase tracking-widest-plus mb-1">Email</p>
                  <p class="text-af-text font-semibold group-hover:text-af-accent transition-colors duration-300">info@allen-freybuilders.com</p>
                </div>
              </a>

              <div class="flex items-center gap-5">
                <div class="w-14 h-14 border border-af-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-af-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p class="text-xs text-af-gray uppercase tracking-widest-plus mb-1">Address</p>
                  <address class="text-af-text font-semibold not-italic">1223 Budd St<br>Cincinnati, OH 45203</address>
                </div>
              </div>
            </div>

            <div class="mt-10 pt-8 border-t border-af-border">
              <p class="text-xs text-af-gray uppercase tracking-widest-plus mb-3">Serving Greater Cincinnati</p>
              <p class="text-af-gray text-sm leading-relaxed">Hyde Park · Mount Lookout · Indian Hill · Anderson Township · Blue Ash · Oakley · Mount Adams · Mariemont &amp; beyond</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
