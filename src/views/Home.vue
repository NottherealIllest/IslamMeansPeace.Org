<template>
  <div class="home">
    <hero />
    <about-us />
    <Readourstory />
    <GetStarted />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/home/Hero.vue";
import AboutUs from "@/components/home/AboutUs.vue";
import Footer from "@/components/Footer.vue";
import Readourstory from "@/components/home/ReadOurStory.vue";
import GetStarted from "@/components/home/GetStarted.vue";

export default {
  name: "home",
  components: {
    Hero,
    AboutUs,
    Readourstory,
    GetStarted,
    Footer
  }
};
</script>
