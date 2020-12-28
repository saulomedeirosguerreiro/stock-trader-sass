import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Actions from "./views/Actions";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/portfolio",
      component: Portfolio
    },
    {
      path: "/actions",
      component: Actions
    }
  ]
});

export default router;
