<template>
  <common-frame id="Location" :flipVerticalForMobile="true">
    <!-- header -->
    <template v-slot:left>
      <div class="location-map">
        <location-map />
      </div>
    </template>

    <!-- details -->
    <template v-slot:right>
      <div class="location-details">
        <page-title class="location-details-title" :leftAligned="true" value="Location" />
        <div class="location-details-content">
          <p>Come visit us at our new location!</p>
          <p><em>Address:</em> <br> Calle Arregui y Aruej 13, L20<br>Madrid 28007</p>
          
        </div>
      </div>
    </template>
  </common-frame>
</template>

<script>
import PageTitle from "@/components/Common/PageTitle";
import CommonFrame from "@/components/Common/CommonFrame";
import LocationMap from "@/components/Common/Map";
export default {
  components: {
    PageTitle,
    CommonFrame,
    LocationMap,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";
.location {
  &-map {
    @include flex-column;
    @include flex-centered;
    padding-bottom: 1rem;
    @include desktop {
      padding-bottom: 0;
      @include flex-right-centered;
    }
  }

  &-details {
    @include flex-column;
    @include flex-centered;

    @include desktop {
      @include flex-left-centered;
    }

    height: 100%;
    &-content {
      @include body-text;
      text-align: center;
      @include desktop {
        width: 25vw;
        text-align: left;
      }
    }
  }
}
</style>