<template>
  <div class="nav">
    <!-- brand -->
    <img class="nav-logo-img" src="@/assets/nav_logo.png" />

    <!-- nav links -->
    <div class="nav-links">
      <navbar-scroll-to-link class="nav-link" name="who we are" to="#WhoWeAre" />
      <navbar-scroll-to-link class="nav-link" name="gatherings" to="#Gatherings" />
      <navbar-scroll-to-link class="nav-link" name="location" to="#Location" />
      <navbar-router-link class="nav-link" name="events" to="#Events" />
      <navbar-scroll-to-link class="nav-link" name="media" to="/media" />
      <navbar-router-link class="nav-link" name="blog" to="/blog" />
    </div>

    <!-- donate button -->
    <div class="nav-donate-button-container">
      <rounded-button class="nav-donate-button" name="Donate" to="/donate" />
    </div>

    <!-- mobile menu -->
    <collapse-button class="nav-collapse-button" @click="mobileDrawerActive = !mobileDrawerActive"/>
    <drawer :active="mobileDrawerActive"/>
  </div>
</template>

<script>
import Drawer from "@/components/Navbar/Drawer";
import CollapseButton from "@/components/Navbar/CollapseButton";
import NavbarRouterLink from "@/components/Navbar/NavbarRouterLink";
import NavbarScrollToLink from "@/components/Navbar/NavbarScrollToLink";
import RoundedButton from "@/components/Common/RoundedButton";
export default {
  components: {
    Drawer,
    CollapseButton,
    NavbarRouterLink,
    NavbarScrollToLink,
    RoundedButton
  },
  data(){
    return {
      mobileDrawerActive:false
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/mixins";
.nav {
  flex: initial;
  width: 100vw;
  height: 3rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  
  @include tablet {
  }

  // nav-logo-img 
  &-logo-img {
    height: 100%;
    width: auto;
    object-fit: cover;
    margin: {
        left: 3rem;
        right: 1rem;
      }

    @include tablet {
    }

    @include desktop {
      margin: {
        left: 5rem;
        right: 1rem;
      }
    }
  }

  // nav-collapse-button 
  &-collapse-button {
    margin: {
      left: 1rem;
      right: 3rem;
    }
    z-index: 11;
    
    @include desktop {
      display: none;
    }
  }

  // nav-donate-button-container
  &-donate-button-container{
    display: none;
    @include tablet {
    }

    @include desktop {
      display: initial;
      margin: {
        left: 1rem;
        right: 3rem;
      }
    }
  }

  // nav-links
  &-links {
    display: none;

    @include tablet {
    }

    @include desktop {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      margin: {
        right: 5rem;
        left: 1rem;
      }
    }
  }
}
</style>
