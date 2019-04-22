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
          <div class="buttons">
            <router-link class="btn btn-trt" to="/about"
              >Donate Now</router-link
            >
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
  padding: 5rem;

  .GetStarted-Text {
    font-size: 3rem;
    font-weight: 100;
    margin-top: 3rem;
  }
  .buttons {
    margin-top: 3rem;
    margin-right: 10rem;
    .btn-prm {
      margin-left: 15rem;
      padding: 1.2 3.2rem;
    }
  }
}
</style>
