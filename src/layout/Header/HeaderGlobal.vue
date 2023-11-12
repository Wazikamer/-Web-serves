<template>
  <div class="header">
    <div class="logo-img">
      <img src="@/assets/img/logo-social.png" alt="logo" />
    </div>
    <div class="routs">
      <router-link to="/registration"><p>Registration</p></router-link>
      <router-link to="/"><p>Login</p></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background: #000;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}
.logo-img {
  max-height: 50px;
  max-width: 50px;
}
.logo-img img {
  max-height: 50px;
  max-width: 50px;
}
.routs {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.routs p {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}
</style>