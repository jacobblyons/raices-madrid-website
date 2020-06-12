<template>
  <div>
    <p class="title">{{ value }}</p>
    <div data-aos="expand-right" data-aos-offset="0" class="underline" />
  </div>
</template>

<script>
export default {
  props: {
    value: String
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins";
.title {
  @include heading1-text;
  padding: 0px;
  margin: 0px;
}

.underline {
  animation: expand-right 2s;
  width: 8rem;
  height: 0.75rem;
  background-color: black;
}

[data-aos="expand-right"] {
  width: 0px;

  &.aos-animate {
    width: 8rem;
  }
}
</style>
