import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },

  { path: '/gambling/background', name: 'gambling_background',
    component: () => import('../views/gambling/background/BackgroundRoot.vue') },

  { path: '/gambling/main', name: 'gambling_main',
    component: () => import('../views/gambling/main/MainRoot.vue') },
  { path: '/gambling/main/overlay', name: 'gambling_main_overlay',
    component: () => import('../views/gambling/main/MainOverlay.vue') },

  { path: '/gambling/webcam', name: 'gambling_webcam',
    component: () => import('../views/gambling/webcam/WebcamRoot.vue') },
  { path: '/gambling/webcam/overlay', name: 'gambling_webcam_overlay',
    component: () => import('../views/gambling/webcam/WebcamOverlay.vue') },

  { path: '/gambling/secondary', name: 'gambling_secondary',
    component: () => import('../views/gambling/secondary/SecondaryRoot.vue') },

  { path: '/gambling/container', name: 'gambling_container',
    component: () => import('../views/gambling/container/ContainerRoot.vue') },
  { path: '/gambling/container/chat', name: 'gambling_container_chat',
    component: () => import('../views/gambling/container/ContainerChat.vue') },

  { path: '/gambling/container/bonuslist_and_statistics', name: 'gambling_container_bonuslist_and_statistics',
    component: () => import('../views/gambling/container/ContainerBonuslistAndStatistics.vue') },
  { path: '/gambling/container/bonushunt_opening', name: 'gambling_container_bonushunt_opening',
    component: () => import('../views/gambling/container/ContainerHuntOpening.vue') },
  { path: '/gambling/container/bonushunt_opening_current', name: 'gambling_container_bonushunt_opening_current',
    component: () => import('../views/gambling/container/ContainerHuntOpeningCurrent.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
