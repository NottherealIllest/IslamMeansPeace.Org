<template>
  <section class="hero">
    <div class="hero__gradient">
      <div class="navbar">
        <navigation/>
      </div>
      <div class="container">
        <h3 class="Heading">
          Sharing Hapiness to people by giving someone
          <br>Sahoor & Iftar this Ramadan
        </h3>
        <div class="buttons">
          <router-link class="btn btn-prm" to="/">Donate Now</router-link>
          <router-link class="btn btn-sec" to="/">Choose a mosque</router-link>
        </div>
      </div>
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
  background-image: url("../../assets/img/feeding.png");
  width: 100%;
  // position: absolute;
  &__gradient {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 22rem 0;
    @include respond-phone {
      padding: 14rem 0;
    }
    .navbar {
      position: absolute;
      top: 0;
      width: 100%;
    }
    background: linear-gradient(
      89.52deg,
      rgba($color: $purple, $alpha: 0.8) 0.29%,
      rgba($color: $green, $alpha: 0.8) 99.77%
    );
    color: $white;
  }
  .Heading {
    font-size: 3rem;
    font-weight: 400;
    // @include respond-phone {
    //   font-size: 1.6rem;
    // }
  }
  .buttons {
    margin-top: 2rem;
    .btn-prm {
      margin-right: 2rem;
    }
  }
}
</style>
