import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Registration from "./components/Registration.vue";
import Search from "./views/Search.vue";
import Listing from "./views/Listing.vue";
import SellerDashboard from "./views/SellerDashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/register",
      name: "Registration",
      component: Registration
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: "/listing/:slug",
      name: "Listing",
      component: Listing
    },
    {
      path: "/seller-dashboard",
      name: "SellerDashboard",
      component: SellerDashboard
    }
  ]
});
