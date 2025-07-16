import { createRouter, createWebHistory } from 'vue-router'
import CreateLink from '../views/CreateLink.vue'
// import ManageLinks from '../views/ManageLinks.vue'
// import PaymentHistory from '../views/PaymentHistory.vue'
// import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/create',
    name: 'CreateLink',
    component: CreateLink
  },
//   {
//     path: '/manage',
//     name: 'ManageLinks',
//     component: ManageLinks
//   },
//   {
//     path: '/history',
//     name: 'PaymentHistory',
//     component: PaymentHistory
//   },
//   {
//     path: '/settings',
//     name: 'Settings',
//     component: Settings
//   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router