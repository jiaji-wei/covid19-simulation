<template>
  <nav class="container flex items-center py-4 mt-4 sm:mt-12">
    <div class="py-1 text-blue-500 text-xl md:text-3xl font-bold mb-3">
      <i class="fa fa-viruses"></i>
      <router-link to="/"> Covid-19 Simulation </router-link>
    </div>
    <ul
      class="
        hidden
        sm:flex
        flex-1
        justify-end
        items-center
        gap-12
        text-blue-10
        uppercase
        text-xs
      "
    >
      <li class="cursor-pointer font-bold"><a href="#features">Features</a></li>
      <li class="cursor-pointer font-bold"><a href="#cities">Cities</a></li>
      <li class="cursor-pointer font-bold"><a href="#contact">Contact</a></li>
    </ul>
    <div class="flex sm:hidden flex-1 justify-end">
      <i class="text-2xs fas fa-bars"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>
