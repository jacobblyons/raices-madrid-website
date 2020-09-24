<template>
  <div :data-aos="mobile ? 'fade-up' : ''" :class="flipVerticalForMobile ? 'frame flipped-ordering' :'frame standard-ordering'">
    <!-- left side -->
    <div class="frame-left">
      <slot name="left"></slot>
    </div>

    <!-- right side -->
    <div class="frame-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";
export default {
  props: {
    flipVerticalForMobile: Boolean,
  },
  data() {
    return {
      mobile: isMobile,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins.scss";
$padding: $vertical-spacing;

.frame {
  height: auto;
  width: 100vw;
  
  margin: {
    top: $mobile-vertical-spacing;
    bottom: $mobile-vertical-spacing;
  }
  @include desktop {
    margin: {
      top: $vertical-spacing;
      bottom: $vertical-spacing;
    }
  }

  &-left {
    @include flex-column;

    @include desktop {
      width: 40%;
      height: auto;
      margin-right: $half-center-spacing;
    }
  }

  &-right {
    @include flex-column;

    @include desktop {
      width: 60%;
      height: auto;
      margin-left: $half-center-spacing;
    }
  }
}

.standard-ordering {
  display: flex;
  flex-direction: column;

  @include desktop {
    flex-direction: row;
    flex-wrap: nowrap;
  }
}

.flipped-ordering {
  display: flex;
  flex-flow: column-reverse;
  @include desktop {
    flex-direction: row;
  }
}
</style>