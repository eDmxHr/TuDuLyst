import { createRouter, createWebHistory } from 'vue-router'
import ToDoApp from '../components/ToDoApp.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ToDoApp',
      component: ToDoApp
    },
  ]
})

export default router
