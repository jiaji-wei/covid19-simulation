<template>
  <Header />
  <section class="bg-bookmark-white py-10">
    <div class="relative mt-20 lg:mt-24">
      <div
        class="
          container
          flex flex-col
          lg:flex-row
          items-center
          justify-center
          gap-x-24
        "
      >
        <div class="flex flex-1 flex-row justify-center gap-4 z-10 mb-10 lg:mb-0 h-screen">
          <!-- Map -->
          <div
            id="mapid"
            class="w-1/2 h-1/2 "
          ></div>

          <!-- Content -->
          <div class="w-1/2 ">
            <div
              class="
                flex flex-1 flex-col
                items-center
                lg:items-start
                rounded-lg
                border-2
                p-2
              "
            >
              <div class="flex flex-col sm:flex-row items-center">
                <h2 class="font-semibold text-lg items-centermr-auto">Controller</h2>
              </div>

              <!-- Country -->
              <div class="mt-5">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700 py-2"
                >
                  Country</label
                >
                <select
                  name="country"
                  id="country"
                  class="
                    w-full
                    border-gray-300
                    rounded-lg
                    shadow-sm
                    focus:border-indigo-500
                    focus:ring-indigo-500
                  "
                >
                  <option value="">Please select</option>
                  <option value="london1">london1</option>
                  <option value="london2">london2</option>
                  <option value="london3">london3</option>
                  <option value="london4">london4</option>
                  <option value="london5">london5</option>
                </select>
              </div>

              <!-- Infectivity -->
              <div class="mt-5">
                <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-sm text-gray-600 py-2"
                      >Infectivity ( 0% ~ 100% )
                    </label>

                    <input
                      placeholder="Company Name"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-3
                      "
                      type="range"
                      min="1"
                      max="100"
                      step="1"
                      value="15"
                      id="integration_shop_name"
                    />
                  </div>
                </div>
              </div>

              <!-- Mask -->
              <div class="mt-5">
                <div class="flex flex-col sm:flex-row items-center">
                  <h2 class="font-semibold text-lg mr-auto">Mask</h2>
                </div>
                <div
                  class="
                    md:flex md:flex-row
                    md:space-x-4
                    w-full
                    text-xs
                    p-3
                    border-2
                    rounded-lg
                  "
                >
                  <!-- 普通 -->
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 p-2"
                      >普通口罩</label
                    >
                    <input
                      placeholder="Address"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      type="text"
                      name="integration[street_address]"
                      id="integration_street_address"
                    />
                  </div>
                  <!-- 手工 -->
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 p-2"
                      >手工口罩</label
                    >
                    <input
                      placeholder="Address"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      type="text"
                      name="integration[street_address]"
                      id="integration_street_address"
                    />
                    <p class="text-sm text-red-500 hidden mt-3" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                  <!-- kn96 -->
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 p-2"
                      >KN95口罩</label
                    >
                    <input
                      placeholder="Address"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      type="text"
                      name="integration[street_address]"
                      id="integration_street_address"
                    />
                    <p class="text-sm text-red-500 hidden mt-3" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Policy -->
              <div class="mt-5">
                <div class="flex flex-col sm:flex-row items-center">
                  <h2 class="font-semibold text-lg mr-auto">Policy</h2>
                </div>
                <!-- <div class="flex flex-row space-x-4 w-full pt-3"> -->
                <div
                  class="grid grid-cols-2 gap-4 w-full mt-3 border-2 rounded-lg"
                >
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox-example"
                      class="h-4 w-4 border rounded mr-2"
                    />
                    <label for="checkbox-example">关闭学校</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox-example"
                      class="h-4 w-4 border rounded mr-2"
                    />
                    <label for="checkbox-example">关闭超市</label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      id="checkbox-example"
                      class="h-4 w-4 border rounded mr-2"
                    />
                    <label for="checkbox-example">关闭办公室</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox-example"
                      class="h-4 w-4 border rounded mr-2"
                    />
                    <label for="checkbox-example">关闭公园</label>
                  </div>
                </div>
              </div>

              <!-- button -->
              <div
                class="
                  mt-5
                  text-right
                  md:space-x-3
                  md:block
                  flex flex-col-reverse
                "
              >
                <button
                  class="
                    mb-2
                    md:mb-0
                    bg-white
                    px-5
                    py-2
                    text-sm
                    shadow-sm
                    font-medium
                    tracking-wider
                    border
                    text-gray-600
                    rounded-full
                    hover:shadow-lg
                    hover:bg-gray-100
                  "
                >
                  Cancel
                </button>
                <button
                  class="
                    mb-2
                    md:mb-0
                    bg-green-400
                    px-5
                    py-2
                    text-sm
                    shadow-sm
                    font-medium
                    tracking-wider
                    text-white
                    rounded-full
                    hover:shadow-lg
                    hover:bg-green-500
                  "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
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
