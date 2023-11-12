<template>
  <div class="wrapper">
    <div class="main">
      <div class="form">
        <div class="text">Please, fill all of inputs to continue.</div>
        <label for="name">
          <input
            class="name"
            v-model="name"
            type="name"
            placeholder="your name"
          />
        </label>
        <label for="email">
          <input
            class="email"
            v-model="email"
            type="email"
            placeholder="your email"
          />
        </label>
        <label for="password">
          <input
            class="password"
            v-model="password"
            type="password"
            placeholder="your password"
          />
        </label>
        <div v-if="error" class="error">
          {{ error }}
        </div>
        <button class="button" @click="onSubmit">Registration</button>
      </div>
      <div class="conditions">
        <p>Before we start you shoud authorize or log in your account.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.name == "" || this.email == "" || this.password == "") {
        this.error = "Input cannot be empty. Please, fill each input.";
        return;
      }
      console.log(`Hello, ${this.name}! You have been registered.`);
      this.$router.push({ name: "movies-list" });
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.form {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  max-height: 300px;
  padding: 20px;
  background-color: #000;
}
.text {
  color: #fff;
}
input {
  margin-top: 20px;
}
.button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #fff;
}
.error {
  margin: 10px auto;
  color: red;
}

.conditions p {
  color: #000;
}
</style>