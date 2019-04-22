<template>
  <div>
    <hero/>
    <div class="container">
      <section class="about">
        <div class="row">
          <div class="col-md-8">
            <div class="about__border"></div>
            <h3 class="about__title">Our Mission</h3>
            <p class="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Tortor
              condimentum lacinia
            </p>
            <p class="about__text">
              A iaculis at erat pellentesque adipiscing commodo imperdiet.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt labore et dolore magna aliqua.Tortor condimentum
            </p>
          </div>
          <div class="col-md-4">
            <div class="paint"></div>
          </div>
        </div>
        <div class="sets">
          <div class="set">
            <img src="@/assets/svg/light-bulb.svg" alt="Light Bulb">
            <p>IDEA</p>
          </div>
          <img src="@/assets/svg/divider.svg" alt class="divider">
          <div class="set">
            <img src="@/assets/svg/volunteer.svg" alt="Light Bulb">
            <p>Volunteer</p>
          </div>
          <img src="@/assets/svg/divider.svg" alt class="divider">
          <div class="set">
            <img src="@/assets/svg/supplies.svg" alt="Light Bulb">
            <p>supplies</p>
          </div>
          <img src="@/assets/svg/divider.svg" alt class="divider">
          <div class="set">
            <img src="@/assets/svg/donations.svg" alt="Light Bulb">
            <p>Donations</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/about/Hero.vue";
export default {
  components: {
    Hero
  }
};
</script>

<style lang="scss" scoped>
.about {
  &__title {
    font-size: 4.8rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  &__border {
    height: 1px;
    background-color: #878787;
    width: 14.7rem;
    margin-bottom: 1.9rem;
  }
  &__text {
    font-size: 1.8rem;
    color: #747474;
    margin-top: 3rem;
  }
  .paint {
    height: 440px;
    width: 100%;
    background: url("../assets/img/paint.png");
    background-size: cover;
  }
  .sets {
    max-width: 100.8rem;
    background: #ffffff;
    box-shadow: 0px 1px 50px rgba(182, 182, 182, 0.25);
    padding: 5rem;
    margin: -10rem auto 0;
    position: relative;
    display: flex;
    justify-content: space-around;
    .set {
      text-align: center;
      p {
        text-transform: uppercase;
        margin-top: 2.5rem;
        color: #999999;
        font-size: 2.3rem;
      }
    }
  }
}
</style>
