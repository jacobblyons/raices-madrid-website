<template>
  <div class="footer">
    <div class="footer-details">
      <div class="footer-details-title">RAICES MADRID</div>
      <div class="footer-details-address">Calle Arregui y Aruej 13, L20, Madrid 28007</div>
      <div class="footer-details-contacts">
        <div class="footer-details-contacts-phone">697 525 238</div>
        <div class="footer-details-contacts-email">email@email.com</div>
      </div>
    </div>
    <div class="footer-social-media">
      <social-media-links />
    </div>
  </div>
</template>

<script>
import SocialMediaLinks from "@/components/Footer/SocialMediaLinks";

export default {
  name: "Home",
  components: {
    SocialMediaLinks,
  },
};
</script>

<style lang="scss">
@import "../../styles/mixins";
.footer {
  height: auto;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  text-align: center;

  @include desktop {
    flex-flow: row nowrap;
    justify-content: space-around;
  }

  &-details {
    width: auto;
    height: auto;
    padding: 2rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    @include desktop {
      align-items: flex-start;
    }
    &-title {
      @include heading2-text;
      font-style: italic;
    }
    &-address {
      @include heading3-text;
    }
    &-contacts {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      padding-top: 0.5rem;

      @include desktop {
        justify-content: flex-start;
      }

      &-phone {
        @include heading3-text;
        padding-right: 1rem;
        border-right: 1px solid white;
      }

      &-email {
        @include heading3-text;
        padding-left: 1rem;
      }
    }
  }
  &-social-media {
    width: auto;
    height: auto;
    padding: 2rem;
  }
}
</style>