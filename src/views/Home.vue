<template>
  <div class="home">
    <hero />
    <gatherings />
    <mission-statement />
    <who-we-are />
    <location />
    <our-team />
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
import MissionStatement from "@/components/MissionStatement";
import Location from "@/components/Location";
import OurTeam from "@/components/OurTeam";

export default {
  name: "Home",
  components: {
    Hero,
    Gatherings,
    Filler,
    WhoWeAre,
    AppFooter,
    Banners,
    MissionStatement,
    Location,
    OurTeam
  }
};
</script>
