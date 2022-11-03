<template>
  <div id="app">
    <NavBarVue />

    <br />
    <router-view />
  </div>
</template>

<script>
// import NavBarVue from "./components/bar/NavBar.vue";
import NavBarVue from "./components/NavBar.vue";
export default {
  components: {
    NavBarVue,
  },
  data: function () {
    return {};
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
