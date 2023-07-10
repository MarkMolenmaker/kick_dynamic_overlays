import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },

  { path: '/webcam', name: 'webcam',
    component: () => import('@/views/webcam/WebcamRoot.vue') },
  { path: '/webcam/overlay', name: 'webcam_overlay',
    component: () => import('@/views/webcam/WebcamOverlay.vue') },

  { path: '/background', name: 'background',
    component: () => import('@/views/background/BackgroundRoot.vue') },
  { path: '/background/animated', name: 'background_animated',
    component: () => import('@/views/background/BackgroundAnimated.vue') },

  { path: '/container', name: 'container',
    component: () => import('@/views/container/ContainerRoot.vue') },
  { path: '/container/overlay', name: 'container_overlay',
    component: () => import('@/views/container/ContainerOverlay.vue') },
  { path: '/container/chat', name: 'container_chat',
    component: () => import('@/views/container/ContainerChat.vue') },

  { path: '/gambling/widgets/bonus_list', name: 'bonus_list',
    component: () => import('@/views/gambling/widgets/BonusList.vue') },
  { path: '/gambling/widgets/bonus_opening', name: 'bonus_opening',
    component: () => import('@/views/gambling/widgets/BonusOpening.vue') },
  { path: '/gambling/widgets/current_slot_artwork', name: 'current_slot_artwork',
    component: () => import('@/views/gambling/widgets/CurrentSlot.vue') },

  { path: '/alerts', name: 'alerts',
    component: () => import('@/views/alerts/AlertArea.vue') },

  { path: '/banners', name: 'banners',
    component: () => import('@/views/banners/BannersRoot.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
