<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="about-bg">
            <h4 class="about-bg__title">About Us</h4>
            <p class="about-bg__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Tortor
              condimentum lacinia quis vel eros donec A iaculis at erat
              pellentesque adipiscing commodo elit at imperdiet.
            </p>
          </div>
        </div>
        <!-- <div class="col-md-1">k</div> -->
        <div class="col-md-8">
          <p class="messenger-quote">
            “The Messenger of Allaah (peace and blessings of Allaah be upon him)
            said: “Whoever gives iftaar to a fasting person will have a reward
            like his, without that detracting from the reward of the fasting
            person in the slightest.” Narrated by al-Tirmidhi, who said it is a
            saheeh hasan hadeeth. “
          </p>
          <div class="break"></div>
          <p class="more-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Tortor
            condimentum lacinia quis vel eros donec A iaculis at erat
            pellentesque adipiscing commodo elit at imperdiet.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Tortor condimentum
          </p>
          <div class="btn-cont">
            <router-link class="btn btn-trt" to="/">Change a Life</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#about {
  padding: 10rem 0;
  .about-bg {
    height: 100%;
    background-image: url("../../assets/img/aboutbg.png");
    box-shadow: 0px 4px 4px rgba($black, 0.25);
    background-size: cover;
    width: 100%;
    color: $white;
    padding: 4rem;
    &__title {
      font-size: 2.5rem;
      font-weight: 400;
      border-bottom: 0.4rem solid $white;
      display: inline-block;
      padding-bottom: 0.9rem;
      margin-bottom: 7rem;
    }
    &__paragraph {
      font-size: 1.4rem;
    }
  }
  .messenger-quote {
    font-size: 1.6rem;
    font-weight: bold;
  }
  .break {
    border-bottom: 0.5rem solid $black;
    margin: 5rem auto;
    width: 50%;
  }
  .more-info {
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }
  .btn-cont {
    text-align: center;
  }
}
</style>
