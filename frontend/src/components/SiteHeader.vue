<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)
const servicesDropdownOpen = ref(false)
const scrolled = ref(false)

const services = [
  { name: 'Room Additions', path: '/services/room-additions' },
  { name: 'New Construction', path: '/services/home-builder' },
  { name: 'Kitchen Remodeling', path: '/services/kitchen-remodeler' },
  { name: 'Bathroom Remodeling', path: '/services/bathroom-remodeler' },
  { name: 'Home Improvement', path: '/services/home-improvement' },
]

function closeMobile() {
  mobileMenuOpen.value = false
  servicesDropdownOpen.value = false
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

watch(() => route.path, closeMobile)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="scrolled || mobileMenuOpen ? 'shadow-sm' : ''">

    <!-- Top Bar -->
    <div class="bg-af-dark text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
        <span class="text-xs font-medium tracking-wide hidden sm:block">Cincinnati's Locally Owned Contractor &mdash; Serving Greater Cincinnati Since 1985</span>
        <span class="text-xs font-medium tracking-wide sm:hidden">Locally Owned Since 1985</span>
        <a href="tel:5138716679" class="text-xs font-semibold tracking-wide hover:text-white/80 transition-colors duration-200">(513) 871-6679</a>
      </div>
    </div>

    <!-- Main Nav -->
    <div :class="scrolled || mobileMenuOpen ? 'bg-white' : 'bg-white/0'">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">

          <!-- Logo -->
          <router-link to="/" @click="closeMobile" aria-label="Allen & Frey - Home" class="relative h-9 md:h-10 flex items-center">
            <img
              src="/images/allen-frey-logo-02.png"
              alt="Allen & Frey Builders and Remodelers"
              class="h-9 md:h-10 w-auto absolute left-0 top-0 transition-opacity duration-300"
              :class="scrolled || mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'"
            >
            <img
              src="/images/allen-frey-logo-03.png"
              alt="Allen & Frey Builders and Remodelers"
              class="h-9 md:h-10 w-auto absolute left-0 top-0 transition-opacity duration-300"
              :class="scrolled || mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
            >
            <img src="/images/allen-frey-logo-02.png" alt="" class="h-9 md:h-10 w-auto invisible" aria-hidden="true">
          </router-link>

          <!-- Desktop Nav -->
          <nav class="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            <router-link
              to="/about-us"
              class="text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-2"
              :class="[
                scrolled ? 'text-af-text hover:text-af-accent' : 'text-white/90 hover:text-white',
                route.path === '/about-us' ? (scrolled ? '!text-af-accent' : '!text-white') : ''
              ]"
            >About</router-link>

            <!-- Services Dropdown -->
            <div class="relative" @mouseenter="servicesDropdownOpen = true" @mouseleave="servicesDropdownOpen = false">
              <router-link
                to="/services"
                class="text-sm font-medium tracking-wide uppercase flex items-center gap-1.5 transition-colors duration-300 py-2"
                :class="[
                  scrolled ? 'text-af-text hover:text-af-accent' : 'text-white/90 hover:text-white',
                  route.path.startsWith('/services') ? (scrolled ? '!text-af-accent' : '!text-white') : ''
                ]"
              >
                Services
                <svg class="w-3 h-3 transition-transform duration-300" :class="{ 'rotate-180': servicesDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </router-link>
              <transition name="dropdown">
                <div v-show="servicesDropdownOpen" class="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl py-3 min-w-[220px] border border-af-border mt-1">
                  <router-link
                    v-for="service in services"
                    :key="service.path"
                    :to="service.path"
                    class="block px-5 py-2.5 text-af-text hover:text-af-accent hover:bg-af-light transition-colors duration-200 text-sm font-medium"
                  >
                    {{ service.name }}
                  </router-link>
                </div>
              </transition>
            </div>

            <router-link
              to="/gallery"
              class="text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-2"
              :class="[
                scrolled ? 'text-af-text hover:text-af-accent' : 'text-white/90 hover:text-white',
                route.path === '/gallery' ? (scrolled ? '!text-af-accent' : '!text-white') : ''
              ]"
            >Portfolio</router-link>

            <router-link
              to="/contact-us"
              class="text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-2"
              :class="[
                scrolled ? 'text-af-text hover:text-af-accent' : 'text-white/90 hover:text-white',
                route.path === '/contact-us' ? (scrolled ? '!text-af-accent' : '!text-white') : ''
              ]"
            >Contact</router-link>

            <router-link
              to="/get-started"
              class="ml-2 px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300"
              :class="scrolled
                ? 'bg-af-accent text-white hover:bg-af-accent-light'
                : 'bg-white text-af-dark hover:bg-af-accent hover:text-white'"
            >Get Started</router-link>
          </nav>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2 -mr-2 transition-colors duration-300"
            :class="scrolled || mobileMenuOpen ? 'text-af-text' : 'text-white'"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle navigation menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Nav -->
    <transition name="slide">
      <nav v-show="mobileMenuOpen" class="lg:hidden bg-white border-t border-af-border px-6 py-5 space-y-1 overflow-hidden" aria-label="Mobile navigation">
        <router-link to="/about-us" @click="closeMobile" class="block text-af-text hover:text-af-accent transition-colors duration-200 py-3 font-medium text-sm uppercase tracking-wide">About</router-link>
        <div>
          <button @click="servicesDropdownOpen = !servicesDropdownOpen" class="flex items-center justify-between w-full text-af-text hover:text-af-accent transition-colors duration-200 py-3 font-medium text-sm uppercase tracking-wide" :aria-expanded="servicesDropdownOpen">
            Services
            <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': servicesDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <transition name="slide">
            <div v-show="servicesDropdownOpen" class="pl-4 space-y-0 mt-1 overflow-hidden border-l-2 border-af-accent/30 ml-2">
              <router-link v-for="service in services" :key="service.path" :to="service.path" @click="closeMobile" class="block text-af-gray hover:text-af-accent transition-colors duration-200 text-sm py-2.5 font-medium">
                {{ service.name }}
              </router-link>
            </div>
          </transition>
        </div>
        <router-link to="/gallery" @click="closeMobile" class="block text-af-text hover:text-af-accent transition-colors duration-200 py-3 font-medium text-sm uppercase tracking-wide">Portfolio</router-link>
        <router-link to="/contact-us" @click="closeMobile" class="block text-af-text hover:text-af-accent transition-colors duration-200 py-3 font-medium text-sm uppercase tracking-wide">Contact</router-link>
        <div class="pt-3">
          <router-link to="/get-started" @click="closeMobile" class="block bg-af-accent text-white text-center px-6 py-3 font-semibold text-sm uppercase tracking-wide hover:bg-af-accent-light transition-colors duration-300">Get Started</router-link>
        </div>
      </nav>
    </transition>
  </header>
</template>
