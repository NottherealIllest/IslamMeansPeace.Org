<template>
  <section class="GetStarted">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="GetStarted-Text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Tortor
              condimentum lacinia quis vel eros donec A iaculis at erat
              pellentesque adipiscing commodo elit at imperdiet.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="buttons btn-cont">
            <router-link class="btn btn-trt" to="/about">Donate Now</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.GetStarted {
  // position: absolute;
  color: $black;
  padding: 10rem 0;
  .row {
    display: flex;
    align-items: center;
    @include respond-phone {
      display: block;
    }
    @include respond-tablet {
      display: block;
    }
  }

  .GetStarted-Text {
    font-size: 3rem;
    font-weight: 100;
  }
  .buttons {
    justify-content: center;
    display: flex;
    .btn-prm {
      margin-left: 15rem;
      padding: 1.2 3.2rem;
    }
  }
}
</style>
