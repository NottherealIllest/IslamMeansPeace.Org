<template>
  <footer class="footer">
    <div class="footer__gradient">
      <div class="container">
        <Logo />
        <div class="row">
          <div class="col-md-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Tortor
              condimentum lacinia quis vel eros donec
            </p>
          </div>
          <div class="col-md-4">
            <p>
              Lorem ipsum dolor sit adipiscing elit, rncididunt ut labore et
              aliqua.Tortor condimentum
            </p>
          </div>
          <div class="col-md-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./svg/logo.vue";
export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-image: url("../assets/img/footer.png");
  background-size: cover;
  color: $white;
  .row {
    margin-top: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
  &__gradient {
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 12rem 0;
    background: linear-gradient(
      180deg,
      rgba($purple, 0.95) 0%,
      rgba($green, 0.95) 100%
    );
  }
}
</style>
