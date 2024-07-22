import { createRouter, createWebHistory } from 'vue-router'
import ToDoApp from '../components/ToDoApp.vue'
import ToDoList from '../components/ToDoList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ToDoApp',
      component: ToDoApp
    },
    {
      path: '/ToDoList',
      name: 'ToDoList',
      component: ToDoList
    }
  ]
})

export default router
