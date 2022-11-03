import Vue from "vue";
import App from "./App.vue";
// import HelloVue from "./components/HelloVue.vue";
// import addDataVue from "./components/addData.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
