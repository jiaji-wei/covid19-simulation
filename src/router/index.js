import { createRouter, createWebHistory } from "vue-router";
import App from "../views/App.vue";
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
  {
    path: "/app",
    name: "app",
    component: App,
    meta: {
      title: "Covid19 Simulation Appliaction",
    },
    children: [
      {
        path: ":location",
        component: App,
      },
    ],
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
