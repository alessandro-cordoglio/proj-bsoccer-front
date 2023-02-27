import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import PlayersList from "./pages/PlayersList.vue";
import ShowPlayer from "./pages/ShowPlayer.vue";
// import ShowProject from "./pages/ShowProject.vue";
// import AppContact from "./pages/AppContact.vue";
// import AppAboutUs from "./pages/AppAboutUs.vue";
// import Page404 from "./pages/Page404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/all-players",
      name: "players",
      component: PlayersList,
    },
    {
      path: "/blog/:id",
      name: "show-player",
      component: ShowPlayer,
    },
    // {
    //   path: "/contattaci",
    //   name: "contact-us",
    //   component: AppContact,
    // },
    // {
    //   path: "/chi-siamo",
    //   name: "about-us",
    //   component: AppAboutUs,
    // },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "page-404",
    //   component: Page404,
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});
export { router };
