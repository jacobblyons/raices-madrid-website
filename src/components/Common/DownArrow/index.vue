<template>
  <i></i>
</template>

<style lang="scss" scoped>
.downarrow {
  width: 2em;
  height: 2em;
}
i {
  animation: fade-in 2s;
  border: solid white;
  border-width: 0 7px 7px 0;
  display: inline-block;
  padding: 12px;
  transform: rotate(45deg);
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-1rem) rotate(45deg);
  }
  to {
    transform: translateY(0rem) rotate(45deg);
    opacity: 1;
  }
}
</style>
