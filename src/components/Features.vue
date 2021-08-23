<template>
  <section class="bg-bookmark-white py-20 mt-20 lg:mt-60">
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
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src="./../imgs/illustration-features-tab-1.png"
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
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
         
        </div>
      </div>
      <div
        class="
          hidden
          lg:block
          overflow-hidden
          bg-bookmark-purple
          rounded-r-full
          absolute
          h-80
          w-2/4
          -bottom-24
          -left-36
        "
      ></div>
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
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src="./../imgs/illustration-features-tab-2.png"
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
            Our powerful search feature will help you find saved sites in no
            time at all. No need to crawl through all of your bookmarks.
          </p>
          
        </div>
      </div>
      <!-- Rounded Rectangle -->
      <div
      class="
        hidden
        md:block
        overflow-hidden
        bg-bookmark-purple
        rounded-l-full
        absolute
        h-80
        w-2/4
        top-32
        right-0
        lg:-bottom-28 lg:-right-26
      "
    ></div>
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
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src="./../imgs/illustration-features-tab-3.png"
            alt=""
          />
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h1 class="text-3xl text-bookmark-blue">Commut in Different Environment</h1>
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
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          
        </div>
      </div>
      <!-- Rounded Rectangle -->
      <div
        class="
          hidden
          lg:block
          overflow-hidden
          bg-bookmark-purple
          rounded-r-full
          absolute
          h-80
          w-2/4
          -bottom-24
          -left-36
        "
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",
  components: {},
};
</script>
