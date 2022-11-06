<template>
  <div>
    <span>{{ counter }}</span>
    <button @click="increment(1)">increment</button>
    <button @click="increment(-1)">decrement</button>
  </div>
</template>

<script>
// import { store } from "@/store/store";

export default {
  methods: {
    increment(num) {
      this.$store.state.counter += num;
    },
  },
};
</script>

<style></style>
