<template>
  <section class="bg-bookmark-white py-20 mt-20 lg:mt-60" id="features">
    <!-- Heading -->
    <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 class="text-3xl text-center text-bookmark-blue">Features</h1>
      <p class="text-center text-bookmark-grey mt-4">
        Our aim is to make it quick and easy for you to simulat Covid-19
         with different situation at different citys.
      </p>
    </div>
    <!-- Feature #1 -->
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
        <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-3xl"
            src="./../imgs/tab1.png"
            alt=""
          />
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h1 class="text-3xl text-bookmark-blue">Different Type Masks</h1>
          <p
            class="
              text-bookmark-grey
              my-4
              text-center
              lg:text-left
              sm:w-3/4
              lg:w-full
            "
          >
            You can choose any percentrage mask in use, such as surgical mask, N95, KN95 or cloth mask.
          </p>
         
        </div>
      </div>
      
    </div>
    <!-- Feature #2 -->
    <div class="relative mt-20 lg:mt-52">
      <div
        class="
          container
          flex flex-col
          lg:flex-row-reverse
          items-center
          justify-center
          gap-x-24
        "
      >
        <!-- Image -->
        <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-3xl"
            src="./../imgs/tab2.png"
            alt=""
          />
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h1 class="text-3xl text-bookmark-blue">Public Polcy Simulat</h1>
          <p
            class="
              text-bookmark-grey
              my-4
              text-center
              lg:text-left
              sm:w-3/4
              lg:w-full
            "
          >
            Apply school closing, workplace closing or require all agents stay at home.
          </p>
          
        </div>
      </div>
      
    </div>
    <!-- Feature #3 -->
    <div class="relative mt-20 lg:mt-52">
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
        <!-- Image -->
        <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-3xl"
            src="./../imgs/tab3.png"
            alt=""
          />
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h1 class="text-3xl text-bookmark-blue">Commute in Different Environment</h1>
          <p
            class="
              text-bookmark-grey
              my-4
              text-center
              lg:text-left
              sm:w-3/4
              lg:w-full
            "
          >
            Agent can commute at home, workplace or other environment.
          </p>
          
        </div>
      </div>
      <!-- Rounded Rectangle -->
      
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",
  components: {},
};
</script>
