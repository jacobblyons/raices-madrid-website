<template>
  <div :class="leftAligned ? 'container-left' : 'container-right'">
    <p :class="leftAligned ? 'title left' : 'title right'">{{ value }}</p>
    <div :data-aos="leftAligned ? 'expand-right' :'expand-left'" data-aos-offset="0" :class=" leftAligned ? 'underline expand-right' : 'underline expand-left'" />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    leftAligned:Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins";

.container{
  &-left {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
  }
  &-right {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
    justify-content: center;
  }
}

.title {
  @include heading1-text;
  padding: 0px;
  margin: 0px;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}


.underline {
  display:none;
  @include desktop {
    display:initial;
    width: 8rem;
    height: 0.75rem;
    background-color: black;
  }
}

.expand-right {
  animation: expand-right 2s;
}

[data-aos="expand-right"] {
  width: 0px;

  &.aos-animate {
    width: 8rem;
  }
}

.expand-left {
  animation: expand-left 2s;
}

[data-aos="expand-left"] {
  width: 0px;

  &.aos-animate {
    width: 8rem;
  }
}
</style>
