<template>
  <div class="donate">
    <HeroDonate/>
    <div class="container">
      <div class="Search">
        <div class="Search__item">
          <Tabs/>
        </div>
        <div class="Search__item">
          <vueDropdown :config="config" @setSelectedOption="setNewSelectedOption($event);"></vueDropdown>
        </div>

        <div class="Search__item btn-cont">
          <router-link class="btn btn-trt" to="/">Search</router-link>
        </div>
      </div>
    </div>
    <div>
      <MosqueItem/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroDonate from "@/components/Donate/HeroDonate.vue";
import vueDropdown from "@/components/Donate/LocationDropdown.vue";
import Tabs from "@/components/Donate/Tabs.vue";
import MosqueItem from "@/components/Donate/MosqueItem.vue";
export default {
  name: "donate",
  components: {
    HeroDonate,
    vueDropdown,
    Tabs,
    MosqueItem
  },
  data: function() {
    return {
      config: {
        options: [
          {
            value: "Lagos"
          },
          {
            value: "Abuja"
          },
          {
            value: "Kaduna"
          }
        ],
        placeholder: "All Locations",
        backgroundColor: "#cde4f5",
        textColor: "#5E5E5E",
        borderRadius: "1.5em",
        border: "1px solid gray",
        width: 180
      }
    };
  },
  methods: {
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.Search {
  background: #ffffff;
  box-shadow: 0px 1px 50px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 5rem;
  margin: -10rem auto 0;
  position: relative;
  display: flex;
  justify-content: space-around;
  @include respond-phone {
    flex-direction: column;
  }
}

.sets {
  max-width: 100.8rem;
  background: #ffffff;
  box-shadow: 0px 0.1rem 5rem rgba(182, 182, 182, 0.25);
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
.btn-trt {
  padding: 1.8rem 7rem;
  @include respond-phone {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    @include respond-phone {
      margin-top: 2rem;
    }
  }
}
</style>


