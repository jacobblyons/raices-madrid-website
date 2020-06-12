<template>
  <div class="whoweare">
    <!-- map -->
    <div class="whoweare-map">
      <div class="whoweare-map-canvas">
        <iframe
          width="100%"
          height="100%"
          id="whoweare-map-canvas"
          src="https://maps.google.com/maps?q=Calle%20Jorge%20Juan%2051%2C%20Madrid%2028001&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
    <!-- details -->
    <div class="whoweare-details">
      <page-title class="whoweare-details-title" value="Who We Are" />
      <div class="whoweare-details-details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Quam pellentesque nec nam aliquam sem et tortor. Id diam vel quam elementum. Praesent tristique magna sit
          amet purus. Turpis egestas sed tempus urna et pharetra pharetra massa. Ac placerat vestibulum lectus mauris
          ultrices. Id donec ultrices tincidunt arcu non sodales neque sodales. Fusce ut placerat orci nulla. Quam lacus
          suspendisse faucibus interdum posuere lorem ipsum dolor sit. Aliquam sem et tortor consequat id porta.
        </p>
      </div>

      <div class="whoweare-details-location">
        <div class="whoweare-details-location-title">Location</div>
        <div class="whoweare-details-location-details">Calle Jorge Juan 51, Madrid 28001</div>
      </div>
      <div class="whoweare-details-info">
        <div class="whoweare-details-info-title">Information For Arriving</div>
        <div class="whoweare-details-info-details">Metro Line 2 and 9 - stop Principe De Vergara</div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/Common/PageTitle";
export default {
  components: {
    PageTitle
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";
$map-width-desktop: 400px;
$map-width-tablet: 90vw;
$map-width-phone: 90vw;
.whoweare {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: {
    top: 4rem;
    bottom: 4rem;
  }
  @include desktop {
    flex-flow: row nowrap;
    align-items: start;
    justify-content: center;
  }

  &-map {
    position: relative;
    height: $map-width-phone;
    width: $map-width-phone;
    padding: {
      top: 2rem;
      bottom: 2rem;
      left: 2rem;
      right: 2rem;
    }
    @include tablet {
      height: $map-width-tablet;
      width: $map-width-tablet;
    }
    @include desktop {
      height: $map-width-desktop;
      width: $map-width-desktop;
    }

    &-canvas {
      overflow: hidden;
      background: none !important;
      height: $map-width-phone;
      width: $map-width-phone;
      @include tablet {
        height: $map-width-tablet;
        width: $map-width-tablet;
      }
      @include desktop {
        height: $map-width-desktop;
        width: $map-width-desktop;
      }
    }
  }

  &-details {
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    justify-content: space-between;
    @include desktop {
      max-width: 50rem;
    }

    padding: {
      top: 2rem;
      bottom: 2rem;
      left: 2rem;
      right: 2rem;
    }

    &-title {
      @include heading1-text;
    }

    &-details {
      @include body-text;
      margin-bottom: 2rem;
    }

    &-location {
      &-title {
        @include heading2-text;
      }
      &-details {
        @include body-text;
      }
      margin-bottom: 2rem;
    }

    &-info {
      &-title {
        @include heading2-text;
      }
      &-details {
        @include body-text;
      }
    }
  }
}
</style>
