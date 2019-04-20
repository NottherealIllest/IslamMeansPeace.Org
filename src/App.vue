<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:400,700");
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  font-size: 62.5%;
  @include respond-phone {
    font-size: 46%;
  }
}
body {
  margin: 0;
  padding: 0;
}

.responsive-img {
  max-width: 100%;
}

.btn {
  padding: 1rem 1.8rem;
  border-radius: 0.5rem;
  display: inline-block;
  text-decoration: none;
  font-size: 1.5rem;
}

.btn-prm {
  color: $purple;
  background-color: $white;
}

.btn-sec {
  color: $white;
  border: 1px solid $white;
}

.btn-trt {
  color: $white;
  background: linear-gradient(113.05deg, $purple 0%, $green 100%);
}

.center {
  margin: 0 auto;
}
.text-center {
  text-align: center;
}

.tablet-only {
  display: none;
  @include respond-tablet {
    display: block;
  }
  @include respond-phone {
    display: none;
  }
}
</style>
