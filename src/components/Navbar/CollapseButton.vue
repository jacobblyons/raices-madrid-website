<template>
  <div @mouseover.stop="highlighted = true" @mouseleave.stop="highlighted=false" @click="onClick">
    <div class="bar bar-1" :class="{'bar-highlighted':highlighted, 'bar-selected':selected}"></div>
    <div class="bar bar-2" :class="{'bar-highlighted':highlighted, 'bar-selected':selected}"></div>
  </div>
</template>

<script>
export default {
  name: "collapse-button",
  data() {
    return {
      highlighted: false,
      selected: false
    };
  },
  methods: {
    onClick(ev) {
      this.selected = !this.selected;
      if (this.selected) {
        this.$emit("ondown");
        this.$emit("click");
      } else {
        this.$emit("onreleased");
        this.$emit("click");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$highlight-translate-amt: -4px;
$select-translate-amt: 6px;
.bar {
  width: 40px;
  height: 5px;
  background-color: white;
  margin: 12px 0;
  transition: 0.2s;

  &-highlighted.bar-1 {
    background-color: white;
    width: 45px;
  }
  &-highlighted.bar-2 {
    background-color: white;
    width: 45px;
  }
  &-highlighted.bar-selected.bar-1 {
    width: 35px;
    height: 5px;
  }
  &-highlighted.bar-selected.bar-2 {
    width: 35px;
    height: 5px;
  }
  &-selected.bar-1 {
    background-color: black;
    -webkit-transform: rotate(45deg)
      translate($select-translate-amt, $select-translate-amt);
    transform: rotate(45deg)
      translate($select-translate-amt, $select-translate-amt);
    width: 40px;
  }
  &-selected.bar-2 {
    background-color: black;
    -webkit-transform: rotate(-45deg)
      translate($select-translate-amt, -$select-translate-amt);
    transform: rotate(-45deg)
      translate($select-translate-amt, -$select-translate-amt);
    width: 40px;
  }
}
</style>