<template>
  <input :class="[error ? 'error' : '']" :type="type" v-model="name" :placeholder="placeholder" />
</template>
<script>
export default {
  props: { type: String, minlength : Number,placeHolder : String },
  data: function () {
    return {
      name: "",
      error: false,
      isInputValid: false,
    };
  },
  watch: {
    name(data) {
      if (data.length < this.minlength) {
        this.error = true;
      } else {
        this.isInputValid = true;
        this.error = false;
      }
    },
  },
};
</script>

<style>
.error {
  background: red;
}
</style>
