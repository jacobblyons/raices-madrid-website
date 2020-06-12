<template>
  <div class="home">
    <hero />
    <banners />
    <gatherings />
    <filler />
    <who-we-are />
    <app-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero";
import Gatherings from "@/components/Gatherings";
import Filler from "@/components/Filler";
import WhoWeAre from "@/components/WhoWeAre";
import AppFooter from "@/components/Footer";
import Banners from "@/components/Banners";

export default {
  name: "Home",
  components: {
    Hero,
    Gatherings,
    Filler,
    WhoWeAre,
    AppFooter,
    Banners
  }
};
</script>
