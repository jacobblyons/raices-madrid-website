<template>
  <div :class="active ? 'drawer active' : 'drawer inactive'">
      <drawer-link name="Who we are" to="/whoweare" />
      <drawer-link name="Gatherings" to="/gatherings" />
      <drawer-link name="Events" to="/events" />
      <drawer-link name="Sermons" to="/sermons" />
  </div>
</template>

<script>
import DrawerLink from "@/components/Navbar/DrawerLink";
export default {
  components: {
    DrawerLink
  },
  props: {
    active: Boolean
  }
};
</script>

<style lang="scss" scoped>
.active {
  top: 0;
  left: 0;
  transition: 0.25s;
}
.inactive {
  top: 0;
  left: 150vw;
}

.drawer {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: lightgrey;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}
</style>