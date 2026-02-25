<script setup>
import PageHero from '@/components/PageHero.vue'
</script>

<template>
  <div>
    <PageHero
      subtitle="Legal"
      title="Terms and Conditions"
      description="Feb 15, 2024"
    />

    <section class="py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">

        <p class="text-af-gray leading-relaxed mb-8">Please read these Terms &amp; Conditions carefully before using the www.allen-freybuilders.com website operated by Allen &amp; Frey Builders and Remodelers. Access to and use of the service is conditioned on your acceptance of and compliance with these terms. These terms apply to all visitors, users and others who access or use the service. By accessing or using the service you agree to be bound by these terms. If you disagree with any part of the terms then you may not access the service.</p>

        <div class="space-y-10">

          <div>
            <h2 class="text-xl font-heading font-bold text-af-text mb-3">1. Links To Other Websites</h2>
            <p class="text-af-gray leading-relaxed mb-4">Our service may contain links to third-party web sites or services that are not owned or controlled by Allen &amp; Frey Builders and Remodelers.</p>
            <p class="text-af-gray leading-relaxed mb-4">Allen &amp; Frey Builders and Remodelers has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Allen &amp; Frey Builders and Remodelers shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
            <p class="text-af-gray leading-relaxed">We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
          </div>

          <div>
            <h2 class="text-xl font-heading font-bold text-af-text mb-3">2. Termination</h2>
            <p class="text-af-gray leading-relaxed mb-4">We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            <p class="text-af-gray leading-relaxed">All provisions of the terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
          </div>

          <div>
            <h2 class="text-xl font-heading font-bold text-af-text mb-3">3. Governing Law</h2>
            <p class="text-af-gray leading-relaxed mb-4">These terms shall be governed and construed in accordance with the laws of Ohio, United States, without regard to its conflict of law provisions.</p>
            <p class="text-af-gray leading-relaxed">Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights. If any provision of these terms is held to be invalid or unenforceable by a court, the remaining provisions of these terms will remain in effect. These terms constitute the entire agreement between us regarding our service, and supersede and replace any prior agreements we might have between us regarding the service.</p>
          </div>

          <div>
            <h2 class="text-xl font-heading font-bold text-af-text mb-3">4. Changes</h2>
            <p class="text-af-gray leading-relaxed mb-4">We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <p class="text-af-gray leading-relaxed">By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the service.</p>
          </div>

          <div>
            <h2 class="text-xl font-heading font-bold text-af-text mb-3">5. Contact Us</h2>
            <p class="text-af-gray leading-relaxed">If you have any questions about these terms, please <router-link to="/contact-us" class="text-af-accent hover:underline">contact us</router-link>.</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
