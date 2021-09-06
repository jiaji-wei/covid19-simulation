<template>
  <section class="relative">
    <div
      class="
        container
        flex flex-col-reverse
        lg:flex-row
        items-center
        gap-12
        mt-14
        lg:mt-28
      "
    >
      <!-- Content -->
      <div class="flex flex-1 flex-col items-center lg:items-start">
        <h2
          class="
            text-bookmark-blue text-3xl
            md:text-4
            lg:text-5xl
            text-center
            lg:text-left
            mb-6
          "
        >
          Coid-19 Simulation
        </h2>
        <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
          An Agent-based model to simulation Covid19 propagation by adding masks
          to the agents, imposing public policy influences and a variety of
          characteristics.
        </p>
        <div class="flex justify-center flex-wrap gap-6">
          <a href="#cities">
            <button
              type="button"
              class="btn btn-white hover:bg-bookmark-purple hover:text-white"
            >
              Go for Simulation!
            </button></a
          >
        </div>
      </div>
      <!-- Image -->
      <div class="flex justify-center flex-1 md-10 md:mb-16 lg:mb-0 z-10">
        <img
          class="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full rounded-3xl"
          src="./../imgs/hero.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  components: {},
};
</script>
