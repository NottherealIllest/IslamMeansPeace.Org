<template>
  <section class="hero">
    <div class="hero__gradient">
    <div class="navbar"><navigation /></div>
      <div class="container">
        <h3 class="quote">
          Every soul will taste death, and you will only be given your [full] compensation on the Day of Resurrection.
          So he who is drawn away from the Fire and admitted to Paradise has attained [his desire].
          And what is the life of this world except the enjoyment of delusion.
        </h3>
        <p class="quote source">Surah Ali 'Imran [3:185] - Al-Qur'an al-Kareem</p>
        <div class="buttons">
          <router-link class="btn btn-prm" to="/">Donate Now</router-link>
          <router-link class="btn btn-sec" to="/">Learn More</router-link>
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
}
</script>


<style lang="scss" scoped>
.hero {
  background-image: url("../assets/img/praybg.png");
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
  .quote {
    font-size: 2rem;
    font-weight: 400;
    // @include respond-phone {
    //   font-size: 1.6rem;
    // }
    &.source {
      margin-top: 2.5rem;
    }
  }
  .buttons {
    margin-top: 2rem;
    .btn-prm {
      margin-right: 2rem;
    }
  }
}
</style>
