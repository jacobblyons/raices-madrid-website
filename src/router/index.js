import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WhoWeAre from "../views/WhoWeAre.vue";
import Events from "../views/Events.vue";
import Sermons from "../views/Sermons.vue";
import Gatherings from "../views/Gatherings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/whoweare",
    name: "WhoWeAre",
    component: WhoWeAre
  },
  {
    path: "/events",
    name: "Events",
    component: Events
  },
  {
    path: "/sermons",
    name: "Sermons",
    component: Sermons
  },
  {
    path: "/gatherings",
    name: "Gatherings",
    component: Gatherings
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
