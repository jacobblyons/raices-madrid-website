<template>
  <div class="hero">
    <navbar class="hero-navbar" />
    <div class="hero-mission-statement-wrapper">
      <img class="hero-mission-statement-img" src="@/assets/RaicesLogo.png" />
    </div>
    <down-arrow class="hero-next-arrow" />
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
  height: 100vh;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/madrid.jpeg") no-repeat center center;
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
    }

    flex: auto;
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    justify-content: center;

    color: white;
    @include title-text;
    text-align: center;
    &-img {
      width: 45vw;
      height: auto;
    }
  }

  &-next-arrow {
    flex: initial;
    margin-bottom: 2em;
  }
}
</style>
