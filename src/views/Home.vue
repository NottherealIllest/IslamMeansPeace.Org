<template>
  <div class="home">
    <hero />
    <about-us />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/home/Hero.vue";
import AboutUs from "@/components/home/AboutUs.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Hero,
    AboutUs,
    Footer
  }
};
</script>
