<template>
  <div class="font-Poppins">
    <Header />
    <Hero />
    <Features />
    <City />
    <Faq />
    <Contact />
    <!-- <Footer /> -->
    <div class="container"></div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Features from "../components/Features.vue";
import City from "../components/City.vue";
import Faq from "../components/Faq.vue";
import Contact from "../components/Contact.vue";
// import Footer from "../components/Footer.vue";

export default {
  name: "Landing",
  components: {
    Header,
    Hero,
    Features,
    City,
    Faq,
    Contact,
    // Footer,
  },
};
</script>
