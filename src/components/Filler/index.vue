<template>
  <div class="filler"></div>
</template>

<style lang="scss" scoped>
@import "../../styles/mixins";
.filler {
  height: 25em;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/worship.png") no-repeat center center;
  background-size: cover;
  // not working on mobile :(
  // background-attachment: initial;
  // @include desktop {
  //   background-attachment: fixed;
  // }
}
</style>