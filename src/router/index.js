import { createRouter, createWebHistory } from "vue-router";
import { getUserPromise } from "@/api/user";
import { useStore } from "@/stores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/ProductsView.vue"),
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: () => import("@/views/SignInView.vue"),
      meta: {
        requiresGuest: true,
      },
    },
    {
      path: "/forget-password",
      name: "forget-password",
      component: () => import("@/views/ForgetPasswordView.vue"),
      meta: {
        requiresGuest: true,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/ProfileView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresGuest = to.matched.some((record) => record.meta.requiresGuest);

  // store user
  const currentUser = await getUserPromise();
  const store = useStore();
  store.setUser(currentUser);

  if (requiresAuth && !currentUser) {
    // console.log("requiresAuth && !currentUser");
    next({ name: "sign-in" });
  } else if (requiresGuest && currentUser) {
    // console.log("requiresGuest && currentUser");
    next({ name: "profile" });
  } else {
    // console.log("else");
    next();
  }
});

export default router;
