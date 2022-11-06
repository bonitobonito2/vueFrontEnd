<template>
  <div id="app">
    <NavBarVue />

    <br />
    <!-- {{counter}} -->
    <button @click="handler">click</button>
    <router-view :counter="counter" @increment="handler" name="increment" />
    <router-view />
  </div>
</template>

<script>
// import NavBarVue from "./components/bar/NavBar.vue";
import NavBarVue from "./components/NavBar.vue";
// import $store from './store'
 import { store } from "./store/store";

export default {
  components: {
    NavBarVue,
  },
  computed: {
    counter() {
      return store.state.counter;
    },
  },
  methods: {
    handler(data) {
      console.log(this.$store)
      this.counter += data;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
