import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

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

// Guard para proteger rutas restringidas, solo se permite el acceso a usuarios logeados
router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  if (requiresAuth) {
    if (store.state.user) {
      next();
    } else {
      alert("Debes estar autenticado");
      next("/login");
    }
  } else {
    next();
  }
});


export default router;
