import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {auth, onAuthStateChanged} from './auth'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

let app;

// onAuthStateChanged es un observador de eventos que dispara una función cada vez que cambia el estado de autenticación del usuario.
onAuthStateChanged(auth, async(user)=>{
  if(user){
    store.commit('AUTH_USER', user)   
  } else {
    store.commit('CLEAR_USER')
  }
})

// Para que al refrescar página no se pierda el estado de autenticación
if(!app){
  app = createApp(App).use(store).use(router).mount('#app')
}

// Para deploy en Firebase
// Instalar firebase CLI - 1 sola vez npm install -g firebase-tools
// Iniciar sesión con firebase - firebase login
// Iniciar el proyecto con hosting firebase init hosting, cuando pregunte qué carpeta utilizar, escribir dist
// Generar una versión de producción - npm run build
// Subir la carpeta dist a Firebase - firebase deploy
