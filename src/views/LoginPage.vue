<template>
  <div class="wrapper">
    <div class="main">
      <div class="form">
        <div class="text">Please, fill all of inputs to continue.</div>
        <div class="login">
          <label for="email">
            <input
              class="email"
              v-model="email"
              type="email"
              placeholder="your email"
            />
          </label>
          <div v-if="error" class="error">
            {{ error.email }}
          </div>
          <label for="password">
            <input
              class="password"
              v-model="password"
              type="password"
              placeholder="your password"
            />
          </label>
          <div v-if="error" class="error">
            {{ error.password }}
          </div>
          <button class="button" @click="onSubmit">Login</button>
        </div>
        <div class="registration">
          <div class="text">Do not have an account? Let`s go to register!</div>
          <button class="button" @click="register">Registration</button>
        </div>
      </div>
      <div class="conditions">
        <p>Before we start you shoud authorize or log in your account.</p>
      </div>
    </div>
  </div>
</template>


<script>
import { isEmail } from "class-validator";
export default {
  components: {},
  data: () => ({
    password: "",
    email: "",
    error: {},
  }),

  methods: {
    onSubmit() {
      if (!isEmail(this.email)) {
        this.error.email = "Email is invalied.";
        console.log(this.error.email);
        return;
      } else {
        console.log(`Hello, ${this.email}! You have been logged in!.`);
        this.$router.push({ name: "movies-list" });
      }
    },
    register() {
      this.$router.push({ name: "registration-page" });
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
  flex: 1;
  flex-direction: column;
  align-items: center;
}
.form {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  max-height: 300px;
  padding: 20px;
  background-color: #000;
}
.text {
  color: #fff;
}
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  margin-top: 20px;
}
.button {
  margin: 20px 0;
  padding: 5px 10px;
  width: 130px;
  background-color: #fff;
}
.error {
  margin: 10px auto;
  color: red;
}
.registration {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.text {
  color: #fff;
}
</style>