<template>
  <div class="team-member">
    <div class="team-member-img-container">
      <img class="team-member-img" :src="require('@/assets/' + imageUrl +'')" />
    </div>

    <div class="team-member-content-container">
      <div class="team-member-title-container">
        <div class="team-member-title">{{title}}</div>
        <div class="team-member-name">{{name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    name: String,
    imageUrl: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";
.team-member {
  width: 16rem;
  height: 14rem;
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
    mask-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
  }

  &-content-container {
    @include flex-column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
  }

  &-title-container {
    padding-bottom: 0.5rem;
  }

  &-title {
    @include heading3-text;
  }

  &-name {
    @include heading2-text;
  }

}

.centered {
  text-align: center;
}
</style>