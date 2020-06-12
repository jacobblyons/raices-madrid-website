<template>
  <div class="nav">
    <img class="nav-logo-img" src="@/assets/logo.png" />
    <div class="nav-links"></div>
  </div>
</template>

<style lang="scss">
@import "../../styles/mixins";
.nav {
  flex: initial;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  @include tablet {
    justify-content: space-between;
  }

  &-logo-img {
    height: auto;
    width: 90vw;

    object-fit: cover;

    @include tablet {
      height: 100%;
      width: auto;
      object-fit: cover;
      margin: {
        left: 3.5rem;
        right: 3.5rem;
      }
    }
    @include desktop {
      margin: {
        left: 5rem;
        right: 5rem;
      }
    }
  }
}
</style>
