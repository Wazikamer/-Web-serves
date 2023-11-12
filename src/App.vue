<template>
  <div id="app">
    <div class="global">
      <header-global />
      <router-view />
      <footer-global />
    </div>
  </div>
</template>


.<script>
import HeaderGlobal from "@/layout/Header/HeaderGlobal.vue";
import FooterGlobal from "./layout/Footer/FooterGlobal.vue";

export default {
  components: {
    HeaderGlobal,
    FooterGlobal,
  },
};
</script>
<style>
</style>
