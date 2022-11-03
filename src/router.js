import Vue from "vue";

// import HelloVue from "./components/HelloVue.vue";
// import addDataVue from "./components/addData.vue";
import Router from "vue-router";
import Addinformation from './pages/AddInformation.vue'


Vue.use(Router);
const Foo = { template: "<div>foo</div>" };
// const Bar = { template: "<div>bar</div>" };
const routes = [
  { path: "/login", component: Foo },
  { path: "/add", component: Addinformation },
];
const router = new Router({
  mode: "history",
  routes, // short for `routes: routes`
});

export default router