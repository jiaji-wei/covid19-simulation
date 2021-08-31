<template>
  <div class="flex flex-row justify-center gap-4 z-10 mb-10 lg:mb-0">
    <!-- Map -->
    <div id="mapid" class="w-1/2" style="height: 633px"></div>

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
              min=".00001"
              max=".01"
              step=".00001"
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
</template>

<script>
import L from "leaflet";
import "./../static/agentmaps.js";

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
      infection_probability_input: 0.00001,
      ticks_display: "",
      infected_display: "",
      healthy_display: "",
      animation_interval_map: { 1: 0, 2: 1000, 3: 100, 4: 10, 5: 1 },
      bounding_box: [],
      unit_type: [],
      unit_type_chance: [],
      unit_type_color: [],
      residential_streets: [],
      commercial_streets: [],
      gathering_streets: [],

      surgical_percentage: 0,
      kn_percentage: 0,
      cloth_percentage: 0,

      school_closing: "false",
      workplace_closing: "false",
      gatherings: "false",
      stay_at_home: "false",

      err_msg: "",
    };
  },
  async mounted() {
    const location = this.$route.params.location;
    const street = require(`./../static/map/${location}/street.js`);
    const streets_data = require(`./../static/map/${location}/streets_data.json`);
    const units_data = require(`./../static/map/${location}/units_data.json`);
    const map_data = require(`./../static/map/${location}/map_data.json`);
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
    await this.initMap(street, locDict[location]);
    await this.setupSim({ streets_data, units_data, map_data });
  },
  methods: {
    initMap(street, bounding_box) {
      //Set bounds for the area on the map where the simulation will run (gotten from openstreetmap.org).
      //Create and setup the Leafvar map object.
      var map = L.map("mapid").fitBounds(bounding_box).setZoom(16);

      //Get map graphics by adding OpenStreetMap tiles to the map object.
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Thanks to <a href="http://openstreetmap.org">OpenStreetMap</a> community',
        maxZoom: 18,
      }).addTo(map);

      this.agentmap = L.A.agentmap(map);
      this.animation_interval_input = 5;
      this.speed_controller_input = 5;
      this.unit_type = ["School", "Public Area", "Workplace", "Home"];
      this.unit_type_chance = [0.1, 0.2, 0.3, 0.4];

      this.unit_type_color = ["blue", "green", "#06B6D4", "black"];

      this.residential_streets = street.residential_streets;
      this.commercial_streets = street.commercial_streets;
      this.gathering_streets = street.gathering_streets;
      // agentmap.buildingify(london_data, bounding_points);
    },

    setupSim({ streets_data, units_data, map_data }) {
      //Set the data displays and input options in the interface to their default values.
      // this.defaultInterface();

      //Generate and display streets and units on the map.
      //Load the units from units_data instead of generating them from scratch to speed things up.
      this.agentmap.buildingify(
        this.leafletbounding_box,
        map_data,
        undefined,
        { color: "black", weight: 1.5, opacity: 0.6 },
        units_data,
        streets_data
      );

      //Split the map's units into residential and commercial zones.

      this.agentmap.zoned_units = this.getZonedUnits(
        this.agentmap,
        this.residential_streets,
        this.commercial_streets,
        this.gathering_streets
      );

      this.setUnitsProperties(this.agentmap);

      //Use only a subset of the zoned units.
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

      //Generate 200 agents according to the rules of epidemicAgentMaker, displaying them as blue, .5 meter radius circles.
      this.agentmap.agentify(100, this.epidemicAgentMaker.bind(this));

      //Attach a popup to show when any agent is clicked.
      this.agentmap.agents.bindPopup(this.agentPopupMaker);

      //Attach a popup to show when any unit is clicked.
      this.agentmap.units.bindPopup(this.unitPopupMaker);

      //Keep a count of how many infected agents there are.
      this.agentmap.infected_count = 0;

      //Set how infectious the disease is (the probability that someone nearby will get infected)
      this.agentmap.infection_probability = 0.00001;

      //Set the default speed for the agent.
      this.agentmap.speed_controller = 1;

      //Do the following on each tick of the simulation.
      this.agentmap.controller = this.agentmapController;

      //Set each Agent up.
      this.agentmap.agents.eachLayer((agent) => {
        //Add the agent's ID to its home unit's resident_ids array to help keep track of which agents are in the same unit.
        var home_unit = this.agentmap.units.getLayer(agent.home_id);
        home_unit.resident_ids.push(agent._leaflet_id);

        //Define the update_func for the agent.
        this.setAgentController(agent);
      });

      //Infect a random 10% of the population on the agentmap.
      this.infect(this.agentmap, 0.1);

      this.agentmap.run();
    },

    /*                                                 */
    /*  definitions for everything done above. */
    /*                                                 */

    //Set the elements of the interface to their default values.
    defaultInterface() {
      this.speed_controller_input = this.agentmap.speed_controller;
      this.infection_probability_input = this.agentmap.infection_probability;
      this.animation_interval_input = 5;
      this.ticks_display = "";
    },

    //Given an agent, return an HTML string to embed in a popup.
    agentPopupMaker(agent) {
      var string = "Infected: " + agent.infected + "</br>";

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

    //Given two arrays of streets and their agentmap, split their units into residential and commercial zones,
    //and return their division.
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

      //Find and store the units on the perimeter of the lower part of the neighborhood,
      //and along the streets in the upper part of the neighborhood.
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
        //For each zoned unit, add an array to store which agents are in it for easy searching.
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

    //The controller  for the Agentmap.
    agentmapController() {
      //Set the tick display box to display the number of the current tick.
      this.ticks_display = this.agentmap.state.ticks;

      //Check if any of the options have been changed in the interface and update the Agentmap accordingly.
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

    //Return a GeoJSON feature representing an agent.
    epidemicAgentMaker() {
      //Decide whether the agent will be homebound.
      var homebound = Math.random() < 0.25 ? true : false;

      //Get a random residential unit and its center.
      var random_residential_index = Math.floor(
          Math.random() * this.agentmap.zoned_units.residential.length
        ),
        random_residential_unit_id =
          this.agentmap.zoned_units.residential[random_residential_index];

      //Store the residential unit's ID as the agent's home ID.
      var home_id = random_residential_unit_id;

      var go_home_interval = null;
      var workplace_id = null;
      var first_go_work_interval = null;
      var go_work_interval = null;

      if (!homebound) {
        //Get a random commercial unit and its ID.
        var random_workplace_index = Math.floor(
            this.agentmap.zoned_units.commercial.length * Math.random()
          ),
          random_workplace_id =
            this.agentmap.zoned_units.commercial[random_workplace_index];

        //Store the commercial unit's ID as the agent's workplace ID.
        workplace_id = random_workplace_id;

        //Approximately many ticks until any agent goes to work or back home will be based on these numbers.
        //Make the first commute to work come quicker than any subsequent ones.
        var first_go_work_base_interval = 300,
          go_work_base_interval = 900,
          go_home_base_interval = 900;

        //Randomize how early or late agents make their commute.
        var sign = Math.random() < 0.5 ? 1 : -1,
          go_home_randomizer = sign * Math.floor(Math.random() * 200),
          go_work_randomizer = -sign * Math.floor(Math.random() * 200);

        (first_go_work_interval =
          first_go_work_base_interval + go_work_randomizer),
          (go_work_interval = go_work_base_interval + go_work_randomizer),
          (go_home_interval = go_home_base_interval - go_home_randomizer);
      }

      //Get the agent's starting position.
      var home_unit = this.agentmap.units.getLayer(home_id),
        home_center_coords = L.A.pointToCoordinateArray(home_unit.getCenter());

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
          workplace_id: workplace_id,
          first_go_work_interval: first_go_work_interval,
          go_work_interval: go_work_interval,
          go_home_interval: go_home_interval,
          commute_alarm: first_go_work_interval,
          infected: false,
          recovery_tick: 0,
        },
        geometry: {
          type: "Point",
          coordinates: home_center_coords,
        },
      };

      return feature;
    },

    //Given an agent, define its controller in a way conducive to the epidemic simulation.
    setAgentController(agent) {
      //Do the following on each tick of the simulation for the agent.
      agent.controller = () => {
        //Do this when the commute_alarm tick is reached.
        if (!agent.homebound && agent.agentmap.state.ticks !== 0) {
          if (agent.agentmap.state.ticks % agent.commute_alarm === 0) {
            if (agent.next_commute === "work") {
              this.commuteToWork(agent);
            } else if (agent.next_commute === "home") {
              this.commuteToHome(agent);
            }

            //Apply the agentmap's speed control whenever the agent decides to commute.
            agent.setSpeed(agent.agentmap.speed_controller);
          }
        }

        //If the agent isn't already scheduled to commute, give it a chance to randomly move around its unit.
        else if (!agent.commuting) {
          if (Math.random() < 0.001) {
            var random_unit_point = agent.agentmap.getUnitPoint(
              agent.place.id,
              Math.random(),
              Math.random()
            );
            agent.scheduleTrip(random_unit_point, agent.place, 1);
          }
        }

        this.checkCommute(agent);
        this.updateResidency(agent);
        this.checkInfection(agent);

        //Have the agent move along its scheduled trip.
        if (agent.trip.speed !== 0) {
          agent.moveIt();
        }
      };
    },

    //Track an agent's transitions between units and update the units' resident_ids array accordingly.
    updateResidency(agent) {
      //If the agent is in a unit and came from another place, add its ID to the unit's resident_ids.
      if (agent.place.type === "unit") {
        if (agent.place.id !== agent.recent_unit_id) {
          var current_unit = agent.agentmap.units.getLayer(agent.place.id);
          current_unit.resident_ids.push(agent._leaflet_id);

          agent.recent_unit_id = agent.place.id;
        }
      }
      //Otherwise, if an agent wasn't just on a street, remove its ID from its recent unit's resident_ids.
      else if (agent.recent_unit_id !== -1) {
        var recent_unit = agent.agentmap.units.getLayer(agent.recent_unit_id),
          agent_resident_index = recent_unit.resident_ids.indexOf(
            agent._leaflet_id
          );

        recent_unit.resident_ids.pop(agent_resident_index);

        agent.recent_unit_id = -1;
      }
    },

    //Check whether the agent should recover or become infected.
    checkInfection(agent) {
      //Check whether the agent is in a unit. If so, if any other agents in the unit are infected,
      //infect it with a certain probability.
      if (agent.place.type === "unit" && agent.infected === false) {
        var unit = agent.agentmap.units.getLayer(agent.place.id);
        var resident_ids = unit.resident_ids;
        for (var i = 0; i < resident_ids.length; i++) {
          var resident = agent.agentmap.agents.getLayer(resident_ids[i]);
          if (resident.infected) {
            unit.sterilized = false;
            unit.infected_ticket = agent.agentmap.state.ticks;
            unit.setStyle({ color: "red" });
            if (Math.random() < agent.agentmap.infection_probability) {
              this.infectAgent(agent);
              break;
            }
          }
        }
      }

      //If the agent is infected, check whether it is time for the agent to recover and if so,
      //uninfect it.
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
        //Have the agent recover in a random number of ticks under 2000 from the time it is infected.
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

    //Infect a certain percent of the population, randomly.
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

    //Update the numbers in the display boxes in the HTML document.
    updateEpidemicStats(agentmap) {
      this.infected_display = agentmap.infected_count;
      this.healthy_display = agentmap.agents.count() - agentmap.infected_count;
    },

    commuteToWork(agent) {
      var workplace = this.agentmap.units.getLayer(agent.workplace_id);

      if (workplace.unit_type == "school" && this.school_closing === "true") {
        return;
      } else if (
        workplace.unit_type == "workplace" &&
        this.workplace_closing === "true"
      ) {
        return;
      }

      //Schedule the agent to move to a random point in its workplace and replace the currently scheduled trip.
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

    commuteToPublic(agent) {
      if (this.gatherings === "true") {
        return;
      }
      //Schedule the agent to move to a random point in its workplace and replace the currently scheduled trip.
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
      //Schedule the agent to move to a random point in its home and replace the currently scheduled trip.
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
  },
};
</script>
