<template>
  <div class="team-members" id="team-members">
    <div class="team-members-title-container">
      <span class="team-members-title">Our Team</span>
       <span class="team-members-subtitle">Meet the team that makes all this happen</span>
    </div>

    <div class="team-members-cards">
      <team-member
        :data-aos="mobile ? 'fade-up' : ''"
        title="Pastor"
        name="Esteban Valenzuela"
        imageUrl="pastor_esteban.jpg"
      />
      <team-member
        :data-aos="mobile ? 'fade-up' : ''"
        title="Director of Ministry "
        name="Tifiny Valenzuela"
        imageUrl="sample_user_icon.png"
      />
      <team-member
        :data-aos="mobile ? 'fade-up' : ''"
        title="Administrative Director"
        name="Candace Parish"
        imageUrl="sample_user_icon.png"
      />
    </div>
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";
import TeamMember from "@/components/OurTeam/TeamMember.vue";
import PageTitle from "@/components/Common/PageTitle";
export default {
  components: {
    TeamMember,
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
.team-members {
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
      top: $vertical-spacing ;
      bottom: $vertical-spacing*.6;
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
