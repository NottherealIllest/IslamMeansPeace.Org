<template>
  <div class="home">
    <hero />
    <about-us />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import AboutUs from "@/components/AboutUs.vue";

export default {
  name: "home",
  components: {
    Hero,
    AboutUs
  }
};
</script>
