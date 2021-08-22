<template>
  <Header />
  <section class="bg-bookmark-white py-10">
    <div class="relative mt-20 lg:mt-24">
      <div class="container">
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
                <div class="mb-3 w-full text-xs">
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
              <h2 class="text-gray-500 mt-1 mb-2">Apply Government Response</h2>
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
  </section>
</template>

<script>
import L from "leaflet";
import "./../static/agentmaps.js";

import Header from "../components/Header.vue";

import streets_data from "./../static/street_features.json";
import units_data from "./../static/unit_features.json";
import map_data from "./../static/map_data.json";

// import streets_data from "./../static/street_features.js";
// import units_data from "./../static/unit_features.js";
// import map_data from "./../static/map_data.js";

export default {
  name: "App",
  components: { Header },
  data() {
    return {
      // map
      mymap: null,
      agentmap: null,
      animation_interval_input: 5,
      speed_controller_input: 1,
      infection_probability_input: 0.00001,
      ticks_display: "",
      animation_interval_map: { 1: 0, 2: 1000, 3: 100, 4: 10, 5: 1 },
      bounding_box: [
        [39.9058, -86.091],
        [39.8992, -86.1017],
      ],
    };
  },
  mounted() {
    this.initMap();
    this.setupSim();
  },
  methods: {
    initMap() {
      //Set bounds for the area on the map where the simulation will run (gotten from openstreetmap.org).

      //Create and setup the Leafvar map object.
      var map = L.map("mapid").fitBounds(this.bounding_box).setZoom(16);

      //Get map graphics by adding OpenStreetMap tiles to the map object.
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Thanks to <a href="http://openstreetmap.org">OpenStreetMap</a> community',
        maxZoom: 18,
      }).addTo(map);

      this.agentmap = L.A.agentmap(map);
      this.animation_interval_input = 5;
      this.speed_controller_input = 1;
      this.infection_probability_input = 0.00001;
    },

    setupSim() {
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
      var residential_streets = [
          "Wythe Lane",
          "Heyward Lane",
          "Lynch Lane",
          "Clymer Lane",
        ],
        commercial_streets = ["Heyward Place", "Heyward Drive", "Hooper Place"];
      this.agentmap.zoned_units = this.getZonedUnits(
        this.agentmap,
        residential_streets,
        commercial_streets
      );

      //Use only a subset of the zoned units.
      (this.agentmap.zoned_units.residential = this.pick_random_n(
        this.agentmap.zoned_units.residential,
        100
      )),
        (this.agentmap.zoned_units.commercial = this.pick_random_n(
          this.agentmap.zoned_units.commercial,
          20
        ));

      //Generate 200 agents according to the rules of epidemicAgentMaker, displaying them as blue, .5 meter radius circles.
      this.agentmap.agentify(1, this.epidemicAgentMaker.bind(this));

      //Attach a popup to show when any agent is clicked.
      this.agentmap.agents.bindPopup(this.agentPopupMaker);

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

    //Given two arrays of streets and their agentmap, split their units into residential and commercial zones,
    //and return their division.
    getZonedUnits(agentmap, residential_streets, commercial_streets) {
      var zoned_units = {
        residential: [],
        commercial: [],
      };

      //Find and store the units on the perimeter of the lower part of the neighborhood,
      //and along the streets in the upper part of the neighborhood.
      agentmap.units.eachLayer(function (unit) {
        var street_id = unit.street_id,
          street = agentmap.streets.getLayer(street_id),
          street_name = street.feature.properties.name;

        if (residential_streets.includes(street_name)) {
          zoned_units.residential.push(unit._leaflet_id);
        }

        if (commercial_streets.includes(street_name)) {
          zoned_units.commercial.push(unit._leaflet_id);
        }

        //For each zoned unit, add an array to store which agents are in it for easy searching.
        unit.resident_ids = [];
      });

      return zoned_units;
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
    epidemicAgentMaker(id) {
      console.log(id);
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
      agent.controller =  () => {
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
        var resident_ids = agent.agentmap.units.getLayer(
          agent.place.id
        ).resident_ids;

        for (var i = 0; i < resident_ids.length; i++) {
          var resident = agent.agentmap.agents.getLayer(resident_ids[i]);
          if (resident.infected) {
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
        this.uninfectAgent(agent);
      }
    },

    infectAgent(agent) {
      (agent.infected = true),
        //Have the agent recover in a random number of ticks under 2000 from the time it is infected.
        (agent.recovery_tick =
          agent.agentmap.state.ticks + Math.floor(Math.random() * 2000));
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
    updateEpidemicStats(/* agentmap */) {
      // var infected_display = document.getElementById("infected_value");
      // infected_display.textContent = agentmap.infected_count;
      // var healthy_display = document.getElementById("healthy_value");
      // healthy_display.textContent =
      //   agentmap.agents.count() - agentmap.infected_count;
    },

    commuteToWork(agent) {
      //Schedule the agent to move to a random point in its workplace and replace the currently scheduled trip.
      var random_workplace_point = agent.agentmap.getUnitPoint(
        agent.workplace_id,
        Math.random(),
        Math.random()
      );
      console.log("work:", random_workplace_point);
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
      console.log("home:", random_home_point);
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
  },
};
</script>
