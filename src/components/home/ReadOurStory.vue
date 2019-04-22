<template>
  <section class="OurStory">
    <div class="OurStory__gradient">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="OurStory-Text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
                aliqua.Tortor condimentum lacinia quis vel eros donec A iaculis
                at erat pellentesque adipiscing commodo elit at imperdiet.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <div class="buttons">
                <router-link class="btn btn-prm" to="/about"
                  >Read Our Story</router-link
                >
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <img
              src="@/assets/img/giver.png"
              alt
              class="OurStory__Image responsive-img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.OurStory {
  width: 100%;

  // position: absolute;
  &__gradient {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 5rem 0;
    @include respond-phone {
      padding: 17rem 0;
    }
    background: linear-gradient(
      247.3deg,
      rgba($color: $purple, $alpha: 0.99) 0.29%,
      rgba($color: $green, $alpha: 0.99) 99.77%
    );
    color: $white;
  }

  &__Image {
    background-size: cover;
  }

  .OurStory-Text {
    font-size: 3rem;
    font-weight: 400;
    align-items: center;
    margin-top: 2rem;

    // @include respond-phone {
    //   font-size: 1.6rem;
    // }
  }
  .buttons {
    margin-top: 3rem;
    justify-content: center;
    .btn-trt {
      justify-content: center;
      padding: 1.2 3.8rem;
    }
  }
}
</style>
