import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import EditNote from "../views/EditNote.vue";

// todo remove about

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/note/:noteId",
    name: "EditNote",
    component: EditNote,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
