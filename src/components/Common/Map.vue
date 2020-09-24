<template>
  <div class="map">
    <div class="map-canvas">
      <iframe
        width="100%"
        height="100%"
        id="map-canvas"
        src="https://maps.google.com/maps?q=Calle%20Arregui%20y%20Aruej%2013%2C%20L20%20Madrid%2028007&t=&z=17&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/mixins";
$map-width-desktop: 300px;
$map-width-tablet: 85vw;
$map-width-phone: 85vw;
.map {
  position: relative;
  height: 100%;
  width: auto;

  @include tablet {
    height: $map-width-tablet/2;
    width: $map-width-tablet;
  }
  @include desktop {
    height: $map-width-desktop;
    width: $map-width-desktop;
  }

  &-canvas {
    overflow: hidden;
    background: none !important;
    height: $map-width-phone/2;
    width: $map-width-phone;
    @include tablet {
      height: $map-width-tablet/2;
      width: $map-width-tablet;
    }
    @include desktop {
      height: $map-width-desktop;
      width: $map-width-desktop;
    }
  }
}
</style>