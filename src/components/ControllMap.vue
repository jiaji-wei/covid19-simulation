<template>
  <div class="flex flex-row justify-center gap-4 z-10 mb-10 lg:mb-0">
    <!-- Map -->
    <div id="mapid" class="w-1/2" style="height: 779px"></div>

    <!-- Content -->
    <div
      class="
        w-1/2
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
      <!-- Statistics -->
      <div class="mt-5">
        <h1 class="text-sm font-medium text-gray-700 py-2">Statistics</h1>
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
          <div>
            <h2 class="text-black mt-1 mb-2 w-full flex flex-col">
              Ticks: {{ ticks_display }}
            </h2>
            <h2 class="text-green-500 mt-1 mb-2 w-full flex flex-col">
              Healthy Residents: {{ healthy_display }}
            </h2>
            <h2 class="text-red-400 mt-1 mb-2 w-full flex flex-col">
              Infected Residents: {{ infected_display }}
            </h2>
          </div>
        </div>
      </div>

      <!-- Infectivity -->
      <div class="mt-5">
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 w-full text-xs">
            <label class="font-semibold text-sm text-gray-600 py-2"
              >Infectivity ( 0% ~ 1% )
            </label>

            <input
              v-model="infection_probability_input"
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
              min=".0001"
              max=".01"
              step=".0001"
            />
          </div>
        </div>
      </div>

      <!-- Speed Slider -->
      <div class="mt-5">
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 w-full text-xs">
            <label class="font-semibold text-sm text-gray-600 py-2"
              >Agent Speed
            </label>

            <input
              v-model="speed_controller_input"
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
              min=".2"
              max="10"
              step=".2"
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
        <h2 class="text-red-500 mt-1 mb-2">{{ err_msg }}</h2>
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
              v-model="surgical_percentage"
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
              @blur="checkPercentage"
            />
          </div>
          <!-- 手工 -->
          <div class="w-full flex flex-col mb-3">
            <label class="font-semibold text-gray-600 py-2">N95, KN95</label>
            <input
              v-model="kn_percentage"
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
              @blur="checkPercentage"
            />
            <p class="text-sm text-red-500 hidden mt-3" id="error">
              Please fill out this field.
            </p>
          </div>
          <!-- kn96 -->
          <div class="w-full flex flex-col mb-3">
            <label class="font-semibold text-gray-600 py-2">Cloth Mask</label>
            <input
              v-model="cloth_percentage"
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
              @blur="checkPercentage"
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
          Apply Government Policy in Simulation
        </h2>
        <div class="grid grid-cols-2 gap-4 w-full mt-3 p-2 border-2 rounded-lg">
          <div>
            <input
              type="checkbox"
              v-model="school_closing"
              class="h-4 w-4 border rounded mr-2"
              id="school_closing"
              true-value="true"
              false-value="false"
            />
            <label for="school_closing">School closing</label>
          </div>
          <div>
            <input
              type="checkbox"
              v-model="workplace_closing"
              class="h-4 w-4 border rounded mr-2"
              id="workplace_closing"
              true-value="true"
              false-value="false"
            />
            <label for="workplace_closing">Workplace closing</label>
          </div>

          <div>
            <input
              type="checkbox"
              v-model="gatherings"
              class="h-4 w-4 border rounded mr-2"
              id="gatherings"
              true-value="true"
              false-value="false"
            />
            <label for="gatherings">Restrictions on gatherings</label>
          </div>
          <div>
            <input
              type="checkbox"
              v-model="stay_at_home"
              class="h-4 w-4 border rounded mr-2"
              id="stay_at_home"
              true-value="true"
              false-value="false"
            />
            <label for="stay_at_home">Stay at home requirements</label>
          </div>
        </div>
      </div>

      <!-- button -->
      <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
        <button
          :class="[
            'mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg',
            pauseClass,
          ]"
          @click="onRunButtonClick"
        >
          {{ play_text }}
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
          @click="onReset"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import "./../static/agentmaps.js";

let location;
let street;
let streets_data;
let units_data;
let map_data;

const PlayState = {
  run: "Run",
  pause: "Pause",
};

export default {
  name: "ControllMap",
  props: ["location"],
  data() {
    return {
      // map
      mymap: null,
      agentmap: null,
      animation_interval_input: 5,
      speed_controller_input: 1,
      infection_probability_input: 0.0001,
      ticks_display: "0",
      infected_display: "0",
      healthy_display: "0",
      animation_interval_map: { 1: 0, 2: 1000, 3: 100, 4: 10, 5: 1 },
      bounding_box: [],
      unit_type: [],
      unit_type_chance: [],
      unit_type_color: [],
      mask_type_chance: [],
      mask_name: [],
      mask_type_protect: [],

      residential_streets: [],
      commercial_streets: [],
      gathering_streets: [],

      surgical_percentage: 0,
      kn_percentage: 0,
      cloth_percentage: 0,

      school_closing: false,
      workplace_closing: false,
      gatherings: false,
      stay_at_home: false,

      err_msg: "",
      play_text: PlayState.run,
    };
  },
  computed: {
    pauseClass: (vm) =>
      vm.play_text === PlayState.pause
        ? "bg-red-500 hover:bg-red-500"
        : "bg-blue-400 hover:bg-green-500",
  },
  async mounted() {
    location = this.$route.params.location;
    street = require(`../static/map/${location}/street.js`);
    streets_data = require(`../static/map/${location}/streets_data.json`);
    units_data = require(`../static/map/${location}/units_data.json`);
    map_data = require(`../static/map/${location}/map_data.json`);
    this.setupAll();
  },
  methods: {
    async setupAll() {
      const locDict = {
        london: [
          [51.51533, -0.08417],
          [51.51057, -0.09303],
        ],
        melbourne: [
          [-37.80622, 144.95781],
          [-37.8122, 144.96759],
        ],
        newyork: [
          [40.78084, -73.96389],
          [40.77625, -73.95498],
        ],
        phoenix: [
          [33.44135, -112.08095],
          [33.43715, -112.07495],
        ],
        sydney: [
          [-33.87599, 151.20289],
          [-33.88086, 151.20969],
        ],
      };
      await this.initAgentMap(locDict[location]);
      await this.setupFromData();
    },
    async setupFromData() {
      await this.initStreet();
      await this.setupSim();
    },
    initAgentMap(bounding_box) {
      var map = L.map("mapid").fitBounds(bounding_box).setZoom(16);

      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Thanks to <a href="http://openstreetmap.org">OpenStreetMap</a> community',
        maxZoom: 18,
      }).addTo(map);

      this.agentmap = L.A.agentmap(map);
    },
    initStreet() {
      this.animation_interval_input = 5;
      this.speed_controller_input = 5;
      this.unit_type = ["School", "Public Area", "Workplace", "Home"];
      this.unit_type_chance = [0.1, 0.2, 0.3, 0.4];
      this.unit_type_color = ["blue", "green", "#06B6D4", "black"];

      this.surgical_percentage = 40;
      this.kn_percentage = 10;
      this.cloth_percentage = 20;
      this.not_use_percentage = 30;

      this.mask_type_chance = [
        this.surgical_percentage,
        this.kn_percentage,
        this.cloth_percentage,
        this.not_use_percentage,
      ];
      this.mask_name = [
        "Surgical mask",
        "N95, KN95 or P2",
        "Cloth mask or other",
        "Not use mask",
      ];
      this.mask_type_protect = [0.7, 0.8, 0.3, 0];

      this.residential_streets = street.residential_streets;
      this.commercial_streets = street.commercial_streets;
      this.gathering_streets = street.gathering_streets;

      this.school_closing= false;
      this.workplace_closing= false;
      this.gatherings= false;
      this.stay_at_home= false;
      // agentmap.buildingify(london_data, bounding_points);
    },

    setupSim() {
      this.agentmap.buildingify(
        this.leafletbounding_box,
        map_data,
        undefined,
        { color: "black", weight: 1.5, opacity: 0.6 },
        units_data,
        streets_data
      );

      this.agentmap.zoned_units = this.getZonedUnits(
        this.agentmap,
        this.residential_streets,
        this.commercial_streets,
        this.gathering_streets
      );

      this.setUnitsProperties(this.agentmap);

      (this.agentmap.zoned_units.residential = this.pick_random_n(
        this.agentmap.zoned_units.residential,
        this.agentmap.zoned_units.residential.length > 50 ? 50 : 30
      )),
        (this.agentmap.zoned_units.commercial = this.pick_random_n(
          this.agentmap.zoned_units.commercial,
          this.agentmap.zoned_units.commercial.length > 50 ? 30 : 20
        )),
        (this.agentmap.zoned_units.gathering = this.pick_random_n(
          this.agentmap.zoned_units.gathering,
          this.agentmap.zoned_units.gathering.length > 50 ? 10 : 5
        ));

      this.agentmap.agentify(1, this.epidemicAgentMaker.bind(this));

      this.agentmap.agents.bindPopup(this.agentPopupMaker);

      this.agentmap.units.bindPopup(this.unitPopupMaker);

      this.agentmap.infected_count = 0;

      this.agentmap.infection_probability = 0.00001;

      this.agentmap.speed_controller = 1;

      this.agentmap.controller = this.agentmapController;

      this.agentmap.agents.eachLayer((agent) => {
        var home_unit = this.agentmap.units.getLayer(agent.home_id);
        home_unit.resident_ids.push(agent._leaflet_id);

        this.setAgentController(agent);
      });

      this.infect(this.agentmap, 0.1);
    },

    defaultInterface() {
      this.speed_controller_input = this.agentmap.speed_controller;
      this.infection_probability_input = this.agentmap.infection_probability;
      this.animation_interval_input = 5;
      this.ticks_display = "0";
      this.infected_display = "0";
      this.healthy_display = "0";
    },

    agentPopupMaker(agent) {
      var string = "Mask: " + agent.mask + "</br>";
      string += "Infected: " + agent.infected + "</br>";
      if (agent.infected) {
        string += "Recovers at tick: " + agent.recovery_tick;
      }
      return string;
    },

    unitPopupMaker(unit) {
      var string = "Unit id:" + unit._leaflet_id + "</br>";

      string += "BuildingType: " + unit.unit_type + "</br>";

      string += "IsSterilized: " + unit.sterilized + "</br>";

      if (unit.unit_type === "Home") {
        string +=
          this.stay_at_home === "true" ? "Status: close" : "Status: open";
      } else if (unit.unit_type === "Workplace") {
        string +=
          this.workplace_closing === "true" ? "Status: close" : "Status: open";
      } else if (unit.unit_type === "Public Area") {
        string += this.gatherings === "true" ? "Status: close" : "Status: open";
      } else if (unit.unit_type === "School") {
        string +=
          this.school_closing === "true" ? "Status: close" : "Status: open";
      }

      return string;
    },

    getZonedUnits(
      agentmap,
      residential_streets,
      commercial_streets,
      gathering_streets
    ) {
      var zoned_units = {
        residential: [],
        commercial: [],
        gathering: [],
      };

      const streetSet = new Set();

      agentmap.units.eachLayer(function (unit) {
        var street_id = unit.street_id,
          street = agentmap.streets.getLayer(street_id),
          street_name = street.feature.properties.name;

        streetSet.add(street_name);

        if (residential_streets.includes(street_name)) {
          zoned_units.residential.push(unit._leaflet_id);
        } else if (commercial_streets.includes(street_name)) {
          zoned_units.commercial.push(unit._leaflet_id);
        } else if (gathering_streets.includes(street_name)) {
          zoned_units.gathering.push(unit._leaflet_id);
        }
        unit.resident_ids = [];
      });
      return zoned_units;
    },

    setUnitsProperties(agentmap) {
      const self = this;
      agentmap.units.eachLayer(function (unit) {
        let u = self.randomUnitType();
        unit.unit_type = u["type"];
        unit.sterilized = true;
        unit.setStyle({ color: u["color"] });
      });
    },

    agentmapController() {
      this.ticks_display = this.agentmap.state.ticks;

      if (
        this.agentmap.animation_interval !==
        Number(this.animation_interval_map[this.animation_interval_input])
      ) {
        this.agentmap.setAnimationInterval(
          this.animation_interval_map[this.animation_interval_input]
        );
      }
      if (
        this.agentmap.speed_controller !== Number(this.speed_controller_input)
      ) {
        this.agentmap.speed_controller = Number(this.speed_controller_input);
        this.agentmap.agents.eachLayer((agent) => {
          agent.setSpeed(this.agentmap.speed_controller);
        });
      }
      if (
        this.agentmap.infection_probability !==
        Number(this.infection_probability_input)
      ) {
        this.agentmap.infection_probability = Number(
          this.infection_probability_input
        );
      }
    },

    epidemicAgentMaker() {
      var homebound = Math.random() < 0.25 ? true : false;

      var random_residential_index = Math.floor(
          Math.random() * this.agentmap.zoned_units.residential.length
        ),
        random_residential_unit_id =
          this.agentmap.zoned_units.residential[random_residential_index];

      var home_id = random_residential_unit_id;

      var go_home_interval = null;
      var workplace_id = null;
      var gathering_id = null;
      var first_go_work_interval = null;
      var go_work_interval = null;
      var go_gathering_interval = null;

      if (!homebound) {
        var random_workplace_index = Math.floor(
            this.agentmap.zoned_units.commercial.length * Math.random()
          ),
          random_workplace_id =
            this.agentmap.zoned_units.commercial[random_workplace_index];

        var random_public_index = Math.floor(
            this.agentmap.zoned_units.gathering.length * Math.random()
          ),
          random_public_id =
            this.agentmap.zoned_units.gathering[random_public_index];

        workplace_id = random_workplace_id;
        gathering_id = random_public_id;

        var first_go_work_base_interval = 300,
          go_work_base_interval = 900,
          go_gathering_base_interval = 900,
          go_home_base_interval = 900;

        var sign = Math.random() < 0.5 ? 1 : -1,
          go_home_randomizer = sign * Math.floor(Math.random() * 200),
          go_work_randomizer = -sign * Math.floor(Math.random() * 200);

        (first_go_work_interval =
          first_go_work_base_interval + go_work_randomizer),
          (go_work_interval = go_work_base_interval + go_work_randomizer),
          (go_gathering_interval = go_gathering_base_interval),
          (go_home_interval = go_home_base_interval - go_home_randomizer);
      }

      //Get the agent's starting position.
      var home_unit = this.agentmap.units.getLayer(home_id),
        home_center_coords = L.A.pointToCoordinateArray(home_unit.getCenter());
      var mask = this.randomMaskType();

      var feature = {
        type: "Feature",
        properties: {
          place: {
            type: "unit",
            id: home_id,
          },
          layer_options: {
            color: "blue",
            radius: 0.5,
          },
          recent_unit_id: home_id,
          homebound: homebound,
          next_commute: "work",
          commuting: false,
          home_id: home_id,
          gathering_id: gathering_id,
          workplace_id: workplace_id,
          first_go_work_interval: first_go_work_interval,
          go_work_interval: go_work_interval,
          go_gathering_interval: go_gathering_interval,
          go_home_interval: go_home_interval,
          commute_alarm: first_go_work_interval,
          infected: false,
          recovery_tick: 0,
          mask: mask["type"],
          mask_protect: mask["protect"],
        },
        geometry: {
          type: "Point",
          coordinates: home_center_coords,
        },
      };

      return feature;
    },

    setAgentController(agent) {
      var self = this;
      agent.controller = () => {
        if (!agent.homebound && agent.agentmap.state.ticks !== 0) {
          if (agent.agentmap.state.ticks % agent.commute_alarm === 0) {
            if (agent.next_commute === "work") {
              var workplace = this.agentmap.units.getLayer(agent.workplace_id);

              if (
                (workplace.unit_type === "School" &&
                  self.school_closing === "true") ||
                (workplace.unit_type === "Public Area" &&
                  self.gatherings === "true") ||
                (workplace.unit_type === "Workplace" &&
                  self.workplace_closing === "true") ||
                self.stay_at_home === "true"
              ) {
                agent.commuting = true;
                agent.commute_alarm += agent.go_home_interval;
                console.log("stay at home,next:",agent.commute_alarm);
              } else {
                this.commuteToWork(agent);
                agent.setSpeed(agent.agentmap.speed_controller);
              }
            } else if (agent.next_commute === "home") {
              this.commuteToHome(agent);
              agent.setSpeed(agent.agentmap.speed_controller);
            }

            
          }
        } else if (!agent.commuting) {
          if (Math.random() < 0.001) {
            var random_unit_point = agent.agentmap.getUnitPoint(
              agent.place.id,
              Math.random(),
              Math.random()
            );
            agent.setSpeed(agent.agentmap.speed_controller);
            agent.scheduleTrip(random_unit_point, agent.place, 1);
          }
        }

        this.checkCommute(agent);
        this.updateResidency(agent);
        this.checkInfection(agent);

        if (agent.trip.speed !== 0) {
          agent.moveIt();
        }
      };
    },

    updateResidency(agent) {
      if (agent.place.type === "unit") {
        if (agent.place.id !== agent.recent_unit_id) {
          var current_unit = agent.agentmap.units.getLayer(agent.place.id);
          current_unit.resident_ids.push(agent._leaflet_id);

          agent.recent_unit_id = agent.place.id;
        }
      } else if (agent.recent_unit_id !== -1) {
        var recent_unit = agent.agentmap.units.getLayer(agent.recent_unit_id),
          agent_resident_index = recent_unit.resident_ids.indexOf(
            agent._leaflet_id
          );

        recent_unit.resident_ids.pop(agent_resident_index);

        agent.recent_unit_id = -1;
      }
    },

    checkInfection(agent) {
      if (agent.place.type === "unit" && agent.infected === false) {
        var unit = agent.agentmap.units.getLayer(agent.place.id);
        var resident_ids = unit.resident_ids;
        for (var i = 0; i < resident_ids.length; i++) {
          var resident = agent.agentmap.agents.getLayer(resident_ids[i]);
          if (resident.infected) {
            unit.sterilized = false;
            unit.infected_ticket = agent.agentmap.state.ticks;
            unit.setStyle({ color: "red" });

            if (agent.mask_protect !== 0) {
              if (
                Math.random() <
                agent.agentmap.infection_probability * agent.mask_protect
              ) {
                this.infectAgent(agent);
                break;
              }
            } else {
              if (Math.random() < agent.agentmap.infection_probability) {
                this.infectAgent(agent);
                break;
              }
            }
          }
        }
      }

      if (
        agent.infected &&
        agent.agentmap.state.ticks === agent.recovery_tick
      ) {
        if (agent.place.type === "unit") {
          unit = agent.agentmap.units.getLayer(agent.place.id);
          unit.sterilized = false;
          unit.infected_ticket = agent.agentmap.state.ticks;
          unit.setStyle({ color: "red" });
        }

        this.uninfectAgent(agent);
      }
    },

    infectAgent(agent) {
      (agent.infected = true),
        (agent.recovery_tick =
          agent.agentmap.state.ticks + Math.floor(Math.random() * 20000));
      agent.setStyle({ color: "red" });

      agent.agentmap.infected_count++;
      this.updateEpidemicStats(agent.agentmap);
    },

    uninfectAgent(agent) {
      (agent.infected = false), agent.setStyle({ color: "blue" });
      agent.recoveryTick = -1;

      agent.agentmap.infected_count--;
      this.updateEpidemicStats(agent.agentmap);
    },

    infect(agentmap, percent) {
      var number_of_infectees = Math.ceil(agentmap.agents.count() * percent),
        infectees = this.pick_random_n(
          agentmap.agents.getLayers(),
          number_of_infectees
        );
      infectees.forEach((infectee) => {
        this.infectAgent(infectee);
      });
    },

    updateEpidemicStats(agentmap) {
      this.infected_display = agentmap.infected_count;
      this.healthy_display = agentmap.agents.count() - agentmap.infected_count;
    },

    commuteToWork(agent) {
      // var workplace = this.agentmap.units.getLayer(agent.workplace_id);

      var random_workplace_point = agent.agentmap.getUnitPoint(
        agent.workplace_id,
        Math.random(),
        Math.random()
      );
      agent.scheduleTrip(
        random_workplace_point,
        { type: "unit", id: agent.workplace_id },
        3,
        false,
        true
      );

      agent.commuting = true;
      agent.next_commute = "home";
      agent.commute_alarm += agent.go_home_interval;
      console.log(agent.next_commute,agent.commute_alarm);
    },

    commuteToPublic(agent) {
      if (this.gatherings === "true") {
        return;
      }
      var random_workplace_point = agent.agentmap.getUnitPoint(
        agent.workplace_id,
        Math.random(),
        Math.random()
      );
      agent.scheduleTrip(
        random_workplace_point,
        { type: "unit", id: agent.workplace_id },
        3,
        false,
        true
      );

      agent.commuting = true;
      agent.next_commute = "home";
      agent.commute_alarm += agent.go_home_interval;
    },

    commuteToHome(agent) {
      var random_home_point = agent.agentmap.getUnitPoint(
        agent.home_id,
        Math.random(),
        Math.random()
      );
      agent.scheduleTrip(
        random_home_point,
        { type: "unit", id: agent.home_id },
        3,
        false,
        true
      );

      agent.commuting = true;
      agent.next_commute = "work";
      agent.commute_alarm += agent.go_work_interval;
      console.log(agent.next_commute,agent.commute_alarm);
    },

    checkCommute(agent) {
      if (agent.commuting_to === "home" && agent.place.id === agent.home_id) {
        agent.commuting = false;
      } else if (
        agent.commuting_to === "work" &&
        agent.place.id === agent.workplace_id
      ) {
        agent.commuting = false;
      }
    },

    //Given an array, return n random elements from it.
    pick_random_n(array, n) {
      if (array.length < n) {
        throw new Error(
          "n cannot be bigger than the number of elements in the array!"
        );
      }

      var random_indices = [];

      for (var i = 0; i < n; i++) {
        var random_index = Math.floor(Math.random() * array.length);
        if (!random_indices.includes(random_index)) {
          random_indices.push(random_index);
        } else {
          i--;
        }
      }

      var random_n = random_indices.map(function (index) {
        return array[index];
      });

      return random_n;
    },

    randomUnitType() {
      var factor = 0,
        random = Math.random();
      for (var i = this.unit_type.length - 1; i >= 0; i--) {
        factor += this.unit_type_chance[i];
        if (random <= factor)
          return { type: this.unit_type[i], color: this.unit_type_color[i] };
      }
      return {};
    },

    randomMaskType() {
      var factor = 0,
        random = Math.random();
      for (var i = this.mask_type_chance.length - 1; i >= 0; i--) {
        factor += this.mask_type_chance[i] / 100;
        if (random <= factor)
          return {
            type: this.mask_name[i],
            protect: this.mask_type_protect[i],
          };
      }
      return {};
    },

    checkPercentage: function () {
      if (
        this.surgical_percentage + this.kn_percentage + this.cloth_percentage >
        100
      ) {
        this.err_msg = "* sum of three percentage must blow 100";
      } else {
        this.err_msg = "";
      }
    },

    async onReset() {
      this.play_text = PlayState.run;
      this.defaultInterface();
      this.agentmap.clear();
      this.setupFromData();
    },

    onRunButtonClick() {
      const { play_text } = this;
      if (play_text == PlayState.run) {
        this.play_text = PlayState.pause;
        this.agentmap.run();
      } else {
        this.play_text = PlayState.run;
        this.agentmap.pause();
      }
    },
  },
};
</script>
