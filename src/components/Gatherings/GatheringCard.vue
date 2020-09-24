<template>
  <div class="gathering-card">
    <div class="gathering-card-img-container">
      <img class="gathering-card-img" :src="require('@/assets/' + imageUrl +'')" />
    </div>

    <div class="gathering-card-content-container">
      <div class="gathering-card-title-container">
        <div class="gathering-card-day">{{day}}</div>
        <div class="gathering-card-title">{{title}}</div>
      </div>
      <div class="gathering-card-address">{{address}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    day: String,
    address: String,
    description: String,
    imageUrl: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";
.gathering-card {
  width: 22rem;
  height: 16.5rem;
  margin: {
    top: 1rem;
    bottom: 1rem;
    left: 0.5rem;
    right: 0.5rem;
  }
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  border: {
    width: 1px;
    style: solid;
    color: lightgrey;
    radius: 5px;
  }

  &-img-container {
    height: 10rem;
    width: auto;
    overflow: hidden;
  }

  &-img {
    height: auto;
    width: 100%;
    object-fit: cover;
    mask-image: linear-gradient(rgba(0, 0, 0, .85), rgba(0, 0, 0, .85)),

  }

  &-content-container{
    @include flex-column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
  }

&-title-container {
    padding-bottom:.5rem;
  }

  &-title {
    @include heading2-text;
  }

  &-day {
    @include heading3-text;
    font-style: italic;
  }

  &-address {
    @include heading3-text;
  }

  &-description {
    @include body-text;
  }
}

.centered {
  text-align: center;
}
</style>