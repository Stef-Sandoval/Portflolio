import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/skills/:skill",
      name: "skills",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SkillsView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (por ejemplo, al usar el botón "Atrás"), úsala
    if (savedPosition) {
      return savedPosition;
    }
    // Si no, regresa al tope de la página
    return { top: 0 };
  },
});

export default router;
