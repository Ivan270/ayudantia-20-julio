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
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignupView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/restricted",
    name: "Restricted",
    component: () => import("../views/RestrictedView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Guard para proteger rutas restringidas solo a usuarios autenticados.
router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  if (requiresAuth) {
    if (store.state.user) {
      next();
    } else {
      alert("Debes estar autenticado.");
      next("/login");
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (
    (to.name == "Login" && store.state.user) ||
    (to.name == "SignUp" && store.state.user)
  ) {
    alert("Ya estas autenticado.");
    next("/");
  } else {
    next();
  }
});

export default router;
