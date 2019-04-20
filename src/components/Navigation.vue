<template>
  <div class="navtar">
    <logo />
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
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
