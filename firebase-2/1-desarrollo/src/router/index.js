import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import store from "@/store";
import { auth, onAuthStateChanged } from "@/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("@/views/SignupView.vue"),
  },
  {
    path: "/restricted",
    name: "Restricted",
    component: () => import("@/views/RestrictedView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


// Funcion permite esperar a que el estado de auth (de firebase) esté listo. Así cuando se escriba la URL en la barra de busqueda (esto recarga la aplicacion), permita cargar al usuario si es que exista y no nos devuelva null o undefined.
function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
}

router.beforeEach(async (to, from, next) => {
  // Guard para proteger rutas restringidas, solo se permite el acceso a usuarios logeados
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !(await getCurrentUser())) {
    next("/login") ;
    // Guard para que usuarios logeados no puedan entrar a login o signup
  } else if (
    (to.path == "/login" && (await getCurrentUser())) ||
    (to.path == "/signup" && (await getCurrentUser()))
  ) {
    next("/restricted");
  } else {
    next()
  }
});

export default router;
