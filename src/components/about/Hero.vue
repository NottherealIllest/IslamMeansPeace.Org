<template>
  <section class="hero">
    <div class="navbar">
      <navigation />
    </div>
    <div class="container">
      <div class="top"></div>
      <h2 class="title">Our Story</h2>
    </div>
  </section>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("../../assets/img/bg.png");
  background-size: cover;
  background-position: bottom;
  width: 100%;
  padding: 34rem 0 50rem;
  @include respond-phone {
    padding: 14rem 0 20rem;
  }
  .navbar {
    position: absolute;
    top: 0;
    width: 100%;
  }
  color: $white;
  .top {
    height: 4px;
    background-color: $white;
    width: 7.5rem;
    margin: 0 auto 2rem;
    @include respond-phone {
      margin-bottom: 1rem;
    }
  }
  .title {
    font-size: 4.8rem;
    @include respond-phone {
      font-size: 3.5rem;
    }
    font-weight: 400;
    text-align: center;
  }
}
</style>
