<template>
  <div class="gatherings">
    <page-title class="gatherings-title" value="Gatherings" />
    <div class="gatherings-cards">
      <gathering-card
        :data-aos="mobile ? 'fade-up' : ''"
        title="Sunday Morning Church"
        day="Sunday, 12:00"
        address="Calle Jorge Juan 51, Madrid 28001"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <gathering-card
        :data-aos="mobile ? 'fade-up' : ''"
        data-aos-offset="0"
        title="Wednesday Night Bible Study"
        day="Wednesday, 19:00"
        address="Calle Jorge Juan 51, Madrid 28001"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <gathering-card
        :data-aos="mobile ? 'fade-up' : ''"
        data-aos-offset="0"
        title="Evangelism"
        day="Thursday, 19:00"
        address="Calle Jorge Juan 51, Madrid 28001"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <gathering-card
        :data-aos="mobile ? 'fade-up' : ''"
        data-aos-offset="0"
        title="Friday Night Dinner Party"
        day="Every first and third Friday of the month, 20:30"
        address="Calle Jorge Juan 51, Madrid 28001"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
    PageTitle
  },
  data() {
    return {
      mobile: isMobile
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";
.gatherings {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  &-title {
    padding: {
      top: 5rem;
      bottom: 3rem;
      left: 0rem;
      right: 0rem;
    }
    @include heading1-text;
  }

  &-cards {
    padding: {
      top: 0em;
      bottom: 5rem;
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
