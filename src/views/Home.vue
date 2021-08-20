<template>
  <div class="flex flex-col h-screen max-h-screen">
    <div
      class="
        flex
        justify-center
        realtive
        bg-hero-pattern bg-cover
        px-4
        pt-16
        pb-16
      "
    >
      <div class="w-full">
        <h1 class="text-white text-center text-6xl pt-5 pb-5">
          Covid 19 Simulation
        </h1>
      </div>
    </div>

    <!-- Map -->
    <div class="flex w-3/5 h-56 m-8 ">
      <div id="mapid" class="w-3/5 "></div>
    </div>
  </div>
</template>

<script>
import leaflet from "leaflet";
import { onMounted } from "vue";

export default {
  name: "Home",
  components: {},
  setup() {
    let mymap;

    onMounted(() => {
      mymap = leaflet.map("mapid").setView([51.505, -0.09], 13);
      leaflet
        .tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiamlhaml3ZWkiLCJhIjoiY2tzaXA1N29tMjJsNzJ5bnFzN2FnN25ncSJ9.y4IeHfQ7dfkRfdxipsLlZQ",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1Ijoiamlhaml3ZWkiLCJhIjoiY2tzaXA1N29tMjJsNzJ5bnFzN2FnN25ncSJ9.y4IeHfQ7dfkRfdxipsLlZQ",
          }
        )
        .addTo(mymap);
    });
  },
};
</script>
