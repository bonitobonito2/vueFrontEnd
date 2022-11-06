<template>
  <div>
    <form v-on:submit.prevent="submitHandler">
      <InputVue minlength="5" ref="email" type="email" placeholder="password" />

      <InputVue
        minlength="5"
        ref="password"
        type="password"
        placeholder="email"
      />
      <button>submit</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitHandler() {
      const ref = this.$refs;
      this.$http
        .patch("http://localhost:3000/users", {
          email: ref.email.name,
          password: ref.password.name,
        })
        .then((res) => {
          console.log(res);
        })
        .cetch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.error {
  background: red;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
}
div {
  margin: 0 auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
