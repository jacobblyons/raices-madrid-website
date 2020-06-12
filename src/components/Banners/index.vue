<template>
  <div class="banners">
    <carousel :center="true" :loop="true" :margin="30">
      <img src="@/assets/Pascua.jpg" />
      <img src="@/assets/Pascua.jpg" />
      <img src="@/assets/Pascua.jpg" />
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel }
};
</script>

<style lang="scss" scoped>
.banners {
  width: 100%;
  height: auto;
  margin-top: 45px;
}
</style>
