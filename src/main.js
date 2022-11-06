import axios from "axios";
import { store } from "./store";
import Vue from "vue";
import App from "./App.vue";
import InputVue from "./components/Input.vue";
// import HelloVue from "./components/HelloVue.vue";
// import addDataVue from "./components/addData.vue";
import router from "./router";
Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.component("InputVue", InputVue);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

// new Vue({
//   el: "#app",
//   store,
//   router,
//   render: (h) => h(App),
// });
