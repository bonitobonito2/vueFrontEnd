<template>
  <div>
    <form class="form" v-on:submit.prevent="submitHandler">
      <InputVue
        minlength="5"
        ref="userName"
        type="text"
        placeholder="user name"
      />
      {{ counter }}
      <InputVue minLength="5" ref="email" type="email" placeholder="email" />
      <InputVue
        minlength="8"
        ref="password"
        type="password"
        placeholder="password"
      />

      <input type="submit" />
    </form>
  </div>
</template>

<script>
// import { store } from "../store/store";
export default {
  data: function () {
    return {
      isFormValid: false,
    };
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    submitHandler() {
      const ref = this.$refs;
      const userName = ref.userName.isInputValid;
      const email = ref.email.isInputValid;
      const password = ref.password.isInputValid;
      if (userName && email && password) {
        this.$http
          .post("http://localhost:3000/users", {
            password: ref.password.name,
            userName: ref.userName.name,
            email: ref.email.name,
          })
          .then((res) => {
            console.log(res);
          })
          .then((err) => {
            console.log(err);
          });
      } else {
        alert("no empty inputs");
      }
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
