<template>
  <common-frame :flipVerticalForMobile="false">
    <!-- header -->
    <template v-slot:left>
      <div class="missions-statement-logo-container">
        <img class="missions-statement-logo-img" src="@/assets/mission_statement_logo.png" />
      </div>
    </template>

    <!-- details -->
    <template v-slot:right>
      <div class="missions-statement-details">
        <page-title class="missions-statement-details-title" :leftAligned="true" value="Mission" />
        <div class="missions-statement-details-content">
          <p>Our mission is to be a biblical and faithful expression of the church. Teaching the Bible, proclaiming the Gospel message, and sharing in fellowship and community are at the core of this mission.</p>
          <p>The mission comes alive in being a community of truth and love, investing the Word of God into people’s lives, as well as teaching and proclaiming the truth and hope we find in the Gospel of Jesus Christ.</p>
          <p>The cornerstone of who we are and everything we do is the person and work of Jesus Christ in His life, death, and resurrection.</p>
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
.missions-statement {
  // missions-statement-logo-container
  &-logo-container {
    @include flex-column;
    @include flex-centered;
    width: 100%;
    @include desktop {
      @include flex-right-centered;
    }
  }

  &-logo-img {
    height: 35vw;
    width: auto;
    object-fit: cover;
    margin: {
      bottom: 2rem;
    }

    @include desktop {
      height: 25vh;
      margin: {
        left: 3rem;
        right: 1rem;
      }
    }
  }

  &-details {
    @include flex-column;
    @include flex-centered;

    @include desktop {
      @include flex-left-centered;
      height: 100%;
    }

    &-content {
      @include body-text;
      text-align: center;
      padding: {
        left: 2rem;
        right: 2rem;
      }
      @include desktop {
        text-align: left;
        padding: 0;
        width: 40vw;
      }
    }
  }
}
</style>