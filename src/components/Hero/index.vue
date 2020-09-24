<template>
  <div class="hero">
    <navbar class="hero-navbar" />
    <div class="hero-mission-statement-wrapper">
      <span class="hero-mission-statement-type">raices madrid</span>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import DownArrow from "@/components/Common/DownArrow";

export default {
  components: {
    Navbar,
    DownArrow
  }
};
</script>

<style lang="scss">
@import "../../styles/mixins";

.hero {
  width: 100vw;
  height: 62vh;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: start;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("../../assets/hero_image.jpg") no-repeat center center;
  background-size: cover;
  // not working on mobile :(
  // background-attachment: initial;
  // @include desktop {
  //   background-attachment: fixed;
  // }

  &-navbar {
    margin-top: 2em;
  }

  &-mission-statement {
    &-wrapper {
      overflow: hidden;
      flex-grow: 1;
      display: flex;
      flex-flow: column nowrap;
      align-content: center;
      justify-content: center;
    }    
    
    &-type {
      @include title-text;
      text-align: center;
      color: white;
    }
  }

  &-next-arrow {
    flex: initial;
    margin-bottom: 2em;
  }
}
</style>
