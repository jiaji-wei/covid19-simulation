<template>
  <Header />
  <section class="bg-bookmark-white py-10">
    <div class="relative mt-20 lg:mt-24">
      <div class="container">
        <ControllMap :location="location" />
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import ControllMap from "../components/ControllMap.vue";

const SUPPORTED_LOCATIONS = [
  "london",
  "melbourne",
  "newyork",
  "phoenix",
  "sydney",
];

export default {
  name: "App",
  components: { Header, ControllMap },
  data: () => ({
    location: "london",
  }),
  created() {
    const routeLocation = this.$route.params.location.trim().toLowerCase();
    console.log("location:", this.location);
    this.location = SUPPORTED_LOCATIONS.includes(routeLocation)
      ? routeLocation
      : "london";
  },
};
</script>
