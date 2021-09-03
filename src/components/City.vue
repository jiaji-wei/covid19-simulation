<template>
  <!-- Download -->
  <section class="py-20 mt-20" id="cities">
    <!-- Heading -->
    <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 class="text-3xl text-center text-bookmark-blue">
        Simulation in Citys
      </h1>
      <p class="text-center text-bookmark-grey mt-4">
        We’ve got 5 citys in the website. Please do let us know if you want get
        another city simulation.
      </p>
    </div>
    <!-- Cards -->
    <div
      class="
        container
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-5
        gap-6
        max-w-screen-lg
        mt-16
      "
    >
      <!-- Card 1 -->
      <div class="flex flex-col rounded-md shadow-md">
        <div class="p-6 flex flex-col items-center">
          <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">London</h3>
        </div>
        <hr class="border-b border-bookmark-white" />
        <div class="flex p-6">
          <router-link to="/app/london">
            <button
              type="button"
              class="
                flex-1
                btn btn-purple
                hover:bg-bookmark-white hover:text-black
              "
            >
              Lunch App
            </button>
          </router-link>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="flex flex-col rounded-md shadow-md">
        <div class="p-6 flex flex-col items-center">
          <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">New York</h3>
        </div>
        <hr class="border-b border-bookmark-white" />
        <div class="flex p-6">
          <router-link to="/app/newyork">
            <button
              type="button"
              class="
                flex-1
                btn btn-purple
                hover:bg-bookmark-white hover:text-black
              "
            >
              Lunch App
            </button>
          </router-link>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="flex flex-col rounded-md shadow-md">
        <div class="p-6 flex flex-col items-center">
          <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Phoenix</h3>
        </div>
        <hr class="border-b border-bookmark-white" />
        <div class="flex p-6">
          <router-link to="/app/phoenix">
            <button
              type="button"
              class="
                flex-1
                btn btn-purple
                hover:bg-bookmark-white hover:text-black
              "
            >
              Lunch App
            </button>
          </router-link>
        </div>
      </div>
      <!-- Card 4 -->
      <div class="flex flex-col rounded-md shadow-md">
        <div class="p-6 flex flex-col items-center">
          <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Sydney</h3>
        </div>
        <hr class="border-b border-bookmark-white" />
        <div class="flex p-6">
          <router-link to="/app/sydney">
            <button
              type="button"
              class="
                flex-1
                btn btn-purple
                hover:bg-bookmark-white hover:text-black
              "
            >
              Lunch App
            </button>
          </router-link>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="flex flex-col rounded-md shadow-md">
        <div class="p-6 flex flex-col items-center">
          <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Melbourne</h3>
        </div>
        <hr class="border-b border-bookmark-white" />
        <div class="flex p-6">
          <router-link to="/app/melbourne">
            <button
              type="button"
              class="
                flex-1
                btn btn-purple
                hover:bg-bookmark-white hover:text-black
              "
            >
              Lunch App
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "City",
  components: {},
};
</script>
