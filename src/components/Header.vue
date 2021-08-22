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
      <li class="cursor-pointer">Citys</li>
      <li class="cursor-pointer">Contact</li>
      <button
        type="button"
        class="bg-red-400 text-white rounded-md px-7 py-3 uppercase"
      >
        <router-link to="/app">Login</router-link>
      </button>
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
