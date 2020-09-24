<template>
  <div class="gatherings" id="Gatherings">
    <div class="gatherings-title-container">
      <span class="gatherings-title">Meet With Us</span>
      <span class="gatherings-subtitle">Please join us at one of our regular meetings</span>
    </div>

    <div class="gatherings-cards">
      <gathering-card
        :data-aos="mobile ? 'fade-up' : ''"
        title="Sunday Morning Church (English)"
        day="Sunday, 10:00"
        address="Calle Arregui y Aruej 13, L20, Madrid 28007"
        imageUrl="gathering_sunday_english.jpg"
      />
      <gathering-card
        :data-aos="mobile ? 'fade-up' : ''"
        title="Sunday Morning Church"
        day="Sunday, 12:00"
        address="Calle Arregui y Aruej 13, L20, Madrid 28007"
        imageUrl="gathering_sunday.jpg"
      />
      <gathering-card
        :data-aos="mobile ? 'fade-up' : ''"
        data-aos-offset="0"
        title="Wednesday Night Bible Study"
        day="Wednesday, 19:00"
        address="Plaza Del Conde De Casal 5, 8D Madrid 28007"
        imageUrl="gathering_wednesday.png"
      />
      <gathering-card
        :data-aos="mobile ? 'fade-up' : ''"
        data-aos-offset="0"
        title="Evangelism"
        day="Thursday, 19:00"
        address="Puerta Del Sol, Madrid"
        imageUrl="gathering_evangelism.jpg"
      />
      <gathering-card
        :data-aos="mobile ? 'fade-up' : ''"
        data-aos-offset="0"
        title="Friday Night Dinner Party"
        day="Every 1st and 3rd Friday, 20:30"
        address="Plaza Del Conde De Casal 5, 8D Madrid 28007"
        imageUrl="gathering_dinner.jpg"
      />
    </div>
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";
import GatheringCard from "@/components/Gatherings/GatheringCard.vue";
import PageTitle from "@/components/Common/PageTitle";
export default {
  components: {
    GatheringCard,
    PageTitle,
  },
  data() {
    return {
      mobile: isMobile,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";
.gatherings {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  margin: {
    top: $mobile-vertical-spacing;
    bottom: $mobile-vertical-spacing;
  }
  @include desktop {
    margin: {
      top: $vertical-spacing * 0.6;
      bottom: $vertical-spacing;
    }
  }

  &-title-container {
    @include flex-column;
    @include flex-centered;
    width: 100%;
    height: auto;
    margin-bottom: $vertical-spacing/5;
  }

  &-title {
    padding: {
      top: 0rem;
      bottom: 0rem;
      left: 0rem;
      right: 0rem;
    }
    @include heading1-text;
  }

  &-subtitle {
    padding: {
      top: 0rem;
      bottom: 0rem;
      left: 0rem;
      right: 0rem;
    }
    @include heading3-text;
  }

  &-cards {
    max-width:1200px;
    padding: {
      top: 0em;
      bottom: 0rem;
      left: 2rem;
      right: 2rem;
    }
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
}
</style>
