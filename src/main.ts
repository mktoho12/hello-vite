import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import firebase from "firebase/app"
import "firebase/analytics"
import "firebase/auth"
import "firebase/firestore"

import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import FirebaseAuth from './components/FirebaseAuth.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/firebase-auth', component: FirebaseAuth },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const firebaseConfig = {
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const app = createApp(App)
app.use(router)
app.mount('#app')
