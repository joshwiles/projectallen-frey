<template>
  <section class="min-h-[70vh] flex items-center justify-center py-24 -mt-20">
    <div class="text-center px-6">
      <div class="text-af-accent text-6xl sm:text-8xl lg:text-9xl font-heading font-bold mb-4 leading-none">404</div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-af-text mb-4">Page Not Found</h1>
      <p class="text-af-gray mb-10 max-w-sm mx-auto">Sorry, the page you're looking for doesn't exist or has been moved.</p>
      <router-link to="/" class="inline-block bg-af-accent text-white px-8 py-3 md:px-10 md:py-4 font-semibold text-sm uppercase tracking-wide hover:bg-af-accent-light transition-colors duration-300">
        Back to Home
      </router-link>
    </div>
  </section>
</template>
