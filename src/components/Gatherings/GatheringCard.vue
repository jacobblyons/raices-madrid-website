<template>
  <div class="gathering-card">
    <div class="gathering-card-title centered">{{title}}</div>
    <div class="gathering-card-details centered">
      <div class="gathering-card-day centered">{{day}}</div>
      <div class="gathering-card-address centered">{{address}}</div>
    </div>
    <div class="gathering-card-description centered">{{description}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    day: String,
    address: String,
    description: String
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";
.gathering-card {
  width: 20rem;
  height: 15rem;
  padding: {
    top: 2rem;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
  }
  margin: {
    top: 1rem;
    bottom: 1rem;
    left: 0.5rem;
    right: 0.5rem;
  }
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  border: {
    width: 1px;
    style: solid;
    color: lightgrey;
    radius: 5px;
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