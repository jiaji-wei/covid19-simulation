import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Landing from "../views/Landing.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Landing,
    meta: {
      title: "Covid19 Simulation",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
