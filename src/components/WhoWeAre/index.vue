<template>
  <common-frame id="WhoWeAre" :flipVerticalForMobile="true">
    <!-- header -->
    <template v-slot:left>
      <div class="whoweare-details">
        <page-title class="whoweare-details-title" :leftAligned="false" value="Who We Are" />
        <div class="whoweare-details-content">
          <p>Raices Madrid is a community of people who gather together to worship Jesus Christ and study the Bible.</p>
          <p>We are part of the Calvary Chapel movement, that began in California in the 1960’s, which emphasizes the teaching of the Bible verse by verse.</p>
          <p>Our church seeks to train and equip people in the Bible, to love and share community with those around us, and to reach others with the message of hope; the Gospel.</p>
        </div>
      </div>
    </template>

    <!-- details -->
    <template v-slot:right>
      <div class="video-container">
        <div class="embed-container">
          <iframe src="https://www.youtube.com/embed//ghL-WGiSG2g" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </template>
  </common-frame>
</template>

<script>
import PageTitle from "@/components/Common/PageTitle";
import CommonFrame from "@/components/Common/CommonFrame";
export default {
  components: {
    PageTitle,
    CommonFrame,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";
$map-width-desktop: 400px;
$map-width-tablet: 90vw;
$map-width-phone: 90vw;
.whoweare {
  &-details {
    @include flex-column;
    @include flex-centered;
    @include desktop {
      align-items: flex-end;
      justify-content: space-between;
      max-width: 50rem;
    }

    &-title {
      @include heading1-text;
    }

    &-content {
      @include body-text;
      text-align: center;
      padding: {
        left: 2rem;
        right: 2rem;
      }
      @include desktop {
        text-align: right;
        width: 25vw;
        padding: 0;
        text-align: right;
      }
    }
  }
}
.video-container {
  margin-bottom:1rem;
  @include desktop {
    width: 40vw;
    margin-bottom:0;
  }
}
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
