<template>
  <div class="flex flex-col h-screen max-h-screen">
    <Header />

    <!-- Map -->
    <div class="flex w-3/5 h-56 m-8">
      <div id="mapid" class="w-3/5"></div>
    </div>
  </div>
</template>

<script>
import leaflet from "leaflet";
import { onMounted } from "vue";
import Header from "../components/Header.vue";
export default {
  name: "App",
  components: { Header },
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
