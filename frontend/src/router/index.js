import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Home' } },
  { path: '/about-us', name: 'About', component: () => import('@/views/About.vue'), meta: { title: 'About Us' } },
  { path: '/services', name: 'Services', component: () => import('@/views/Services.vue'), meta: { title: 'Our Services' } },
  { path: '/services/kitchen-remodeler', name: 'KitchenRemodeler', component: () => import('@/views/services/KitchenRemodeler.vue'), meta: { title: 'Kitchen Remodeler' } },
  { path: '/services/bathroom-remodeler', name: 'BathroomRemodeler', component: () => import('@/views/services/BathroomRemodeler.vue'), meta: { title: 'Bathroom Remodeler' } },
  { path: '/services/room-additions', name: 'RoomAdditions', component: () => import('@/views/services/RoomAdditions.vue'), meta: { title: 'Room Additions' } },
  { path: '/services/home-builder', name: 'HomeBuilder', component: () => import('@/views/services/HomeBuilder.vue'), meta: { title: 'Home Builder' } },
  { path: '/services/home-maintenance', name: 'HomeMaintenance', component: () => import('@/views/services/HomeMaintenance.vue'), meta: { title: 'Home Maintenance' } },
  { path: '/gallery', name: 'Gallery', component: () => import('@/views/Gallery.vue'), meta: { title: 'Portfolio' } },
  { path: '/contact-us', name: 'Contact', component: () => import('@/views/Contact.vue'), meta: { title: 'Contact Us' } },
  { path: '/get-started', name: 'GetStarted', component: () => import('@/views/GetStarted.vue'), meta: { title: 'Get Started' } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue'), meta: { title: 'Page Not Found' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} - Allen & Frey Builders and Remodelers`
    : 'Allen & Frey Builders and Remodelers'
})

export default router
