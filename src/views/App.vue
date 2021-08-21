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
        <div
          class="
            flex flex-1 flex-row
            justify-center
            gap-4
            z-10
            mb-10
            lg:mb-0
            h-screen
          "
        >
          <!-- Map -->
          <div id="mapid" class="w-1/2 h-1/2"></div>

          <!-- Content -->
          <div class="w-1/2">
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
                <h2 class="font-semibold text-lg items-centermr-auto">
                  Controller
                </h2>
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
                  <option value="">Please Select City</option>
                  <option value="london1">London</option>
                  <option value="london2">New York</option>
                  <option value="london3">Phoenix</option>
                  <option value="london4">Sydney</option>
                  <option value="london5">Melbourne</option>
                </select>
              </div>

              <!-- Infectivity -->
              <div class="mt-5">
                <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div class="mb-3  w-full text-xs">
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
                        mt-3
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
                <h2 class="text-gray-500 mt-1 mb-2">
                  What type mask and percentage of people in use
                </h2>
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
                    <label class="font-semibold text-gray-600 py-2"
                      >Surgical Mask</label
                    >
                    <input
                      value="0"
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
                      type="number"
                      min="0"
                      max="100"
                      name="integration[street_address]"
                      id="surgical-percentage"
                    />
                  </div>
                  <!-- 手工 -->
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 py-2"
                      >N95, KN95</label
                    >
                    <input
                      value="0"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                      "
                      type="number"
                      min="0"
                      max="100"
                      name="integration[street_address]"
                      id="95-percentage"
                    />
                    <p class="text-sm text-red-500 hidden mt-3" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                  <!-- kn96 -->
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 py-2"
                      >Cloth Mask</label
                    >
                    <input
                      value="0"
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
                      type="number"
                      min="0"
                      max="100"
                      name="integration[street_address]"
                      id="cloth-percentage"
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
                <h2 class="text-gray-500 mt-1 mb-2">
                  Apply Government Response
                </h2>
                <div
                  class="
                    grid grid-cols-2
                    gap-4
                    w-full
                    mt-3
                    p-2
                    border-2
                    rounded-lg
                  "
                >
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox-school-closing"
                      class="h-4 w-4 border rounded mr-2"
                    />
                    <label for="checkbox-school-closing">School closing</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox-workplace-closing"
                      class="h-4 w-4 border rounded mr-2"
                    />
                    <label for="checkbox-workplace-closing"
                      >Workplace closing</label
                    >
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      id="checkbox-gatherings"
                      class="h-4 w-4 border rounded mr-2"
                    />
                    <label for="checkbox-gatherings"
                      >Restrictions on gatherings</label
                    >
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox-stay"
                      class="h-4 w-4 border rounded mr-2"
                    />
                    <label for="checkbox-stay">Stay at home requirements</label>
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
                    bg-blue-400
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
                  Run
                </button>

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
                  Reset
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
