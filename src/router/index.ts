import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue';
import ProjectsPage from '@/components/ProjectsPage.vue';
import AboutMe from '@/components/AboutMe.vue';
import ContactMe from '@/components/ContactMe.vue';
import TheSidebar from '@/components/TheSidebar.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMe
    }
    ,
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: ContactMe
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: TheSidebar
    }
  ]
})

export default router
