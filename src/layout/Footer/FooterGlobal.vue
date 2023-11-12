<template>
  <div class="footer">
    <div class="contact">
      <div class="text">contacts</div>
      <div class="tel"><a href="tel:+380734836678">+380734836678</a></div>
    </div>
    <div class="privacy">All rights reserved</div>
  </div>
</template>

<style scoped>
.footer {
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #000;
  align-items: center;
}
.contact {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.text {
  text-transform: uppercase;
  color: #fff;
}
.tel a {
  color: #fff;
  margin-left: 10px;
  text-decoration: none;
}
.privacy {
  color: #fff;
}
</style>