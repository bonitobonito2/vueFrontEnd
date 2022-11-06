import Vue from "vue";

// import HelloVue from "./components/HelloVue.vue";
// import addDataVue from "./components/addData.vue";
import Router from "vue-router";
import Test from "./pages/Test.vue";
import Login from "./pages/Login.vue";
import Addinformation from "./pages/AddInformation.vue";

Vue.use(Router);

// const Bar = { template: "<div>bar</div>" };
const routes = [
  { path: "/login", component: Login },
  { path: "/add", component: Addinformation },
  { path: "/test", components: { increment: Test } },
];
const router = new Router({
  mode: "history",
  routes, // short for `routes: routes`
});

export default router;
