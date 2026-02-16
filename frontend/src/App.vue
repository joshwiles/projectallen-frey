<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div id="app" class="font-body">
    <SiteHeader />
    <div class="h-20"></div>
    <main>
      <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.path" />
      </router-view>
    </main>
    <SiteFooter />
  </div>
</template>
