import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth, onAuthStateChanged } from "./auth";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

let app;

// onAuthStateChanged es un observador de eventos que dispara una funcion cada vez que cambia el estado de autenticacion del usuario
onAuthStateChanged(auth, async (user) => {
  if (user) {
    store.commit("AUTH_USER", user);
  } else {
    store.commit("CLEAR_USER");
  }
});

// Para que al refrescar pagina no se pierda el estado de autenticacion
if(!app){
  app = createApp(App).use(store).use(router).mount("#app");
}