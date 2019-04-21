<template>
  <div class="navtar">
    <router-link to="/">
      <logo />
    </router-link>
    <ramadan />
  </div>
</template>

<script>
import Logo from "./svg/logo.vue";
import Ramadan from "./svg/ramadan.vue";
export default {
  components: {
    Logo,
    Ramadan
  }
};
</script>

<style lang="scss">
.navtar {
  padding: 2rem 10rem;
  @include respond-phone {
    padding: 2rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
