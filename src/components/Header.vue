<template>
  <nav class="container flex items-center py-4 mt-4 sm:mt-12">
    <div class="py-1"><img src="./../assets/logo-bookmark.svg" /></div>
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
      <li class="cursor-pointer">Features</li>
      <li class="cursor-pointer"><router-link to="/app">London</router-link></li>
      <li class="cursor-pointer"><router-link to="/app">New Yourk</router-link></li>
      <li class="cursor-pointer"><router-link to="/app">Phoenix</router-link></li>
      <li class="cursor-pointer"><router-link to="/app">Sydney</router-link></li>
      <li class="cursor-pointer"><router-link to="/app">Melbourne</router-link></li>
      <li class="cursor-pointer">Contact</li>
     
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
