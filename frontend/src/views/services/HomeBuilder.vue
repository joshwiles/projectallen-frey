<script setup>
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import CTASection from '@/components/CTASection.vue'
</script>

<template>
  <PageHero
    subtitle="Our Services"
    title="Quality Home Building"
    description="At Allen & Frey we don't just remodel, we also build from scratch. If you are looking for a home, look no further. We can build it in the location you choose just the way you want it."
    compact
  />

  <!-- Intro -->
  <section class="py-24 lg:py-32">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <div class="flex items-center justify-center gap-3 mb-4">
        <div class="w-8 h-px bg-af-accent"></div>
        <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Custom Builds</span>
        <div class="w-8 h-px bg-af-accent"></div>
      </div>
      <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Let Us Build Your Home</h2>
      <div class="space-y-5 text-af-gray text-lg leading-relaxed max-w-2xl mx-auto">
        <p>We understand that adding high-end customization really is a huge plus with buying a home. We want to make sure the house becomes a home by fitting it to your style and needs. Live in an area with older homes? Your home can have that vintage flare without the age. Want the style of your home to fit your unique personality? We can help reflect that in the build.</p>
        <p>Allen & Frey will make sure you have the chance to choose the latest technological advances from solar panels to autonomous heating and air control. The design & build team creates unique and efficient home designs. Take advantage of the latest energy-efficiency and green applications that can be cost-efficient in the long run.</p>
      </div>
    </div>
  </section>

  <!-- Peace of mind two-col -->
  <section class="py-24 lg:py-32 bg-af-light">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">The Experience</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Watch Your Dream Come to Life</h2>
          <p class="text-af-gray leading-relaxed">One of the best parts is, you get to experience it firsthand! Really! You can see the foundation get poured, and the walls put up. Imagine being able to show your family pictures of the house they are living in that used to be just a blank slate.</p>
        </div>
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-af-accent"></div>
            <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Peace of Mind</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Everything Brand New</h2>
          <p class="text-af-gray leading-relaxed">Isn't it also nice knowing that everything is brand new? Not having to worry about replacing ducts, doors, vents, flooring, painting, etc. Moving is hard enough, but even harder when you have to repair and replace things right off the bat. Many times home inspections for existing homes don't even catch problems that can rack up your bills sky-high.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Hire Us -->
  <section class="py-24 lg:py-32">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <div class="flex items-center justify-center gap-3 mb-4">
        <div class="w-8 h-px bg-af-accent"></div>
        <span class="text-af-accent font-medium text-sm uppercase tracking-widest-plus">Your Team</span>
        <div class="w-8 h-px bg-af-accent"></div>
      </div>
      <h2 class="text-3xl md:text-4xl font-heading font-bold text-af-text mb-6">Hire Us to Build Your Dream Home Today</h2>
      <div class="space-y-5 text-af-gray text-lg leading-relaxed max-w-2xl mx-auto">
        <p>At Allen & Frey, our home building construction team is your team. You are the leader when it comes to your home building project. We will give your dream home the attention it deserves. Building a custom home is a big deal. The project manager will keep you in the loop every step of the way. There are expectations and anticipation to receive a well-done project. We Build From the Ground Up!</p>
        <p>Let's take this discussion to the next level. Complete the contact us form and expect a prompt phone call to discuss your dream home. We are high quality home design and building construction professionals. Allen & Frey will exceed your expectations!</p>
      </div>
    </div>
  </section>

  <ProcessSection bg="bg-af-light" />
  <CTASection />
</template>
