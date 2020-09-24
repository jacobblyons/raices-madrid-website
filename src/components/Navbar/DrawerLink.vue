<template>
  <div class="drawer-link">
    <router-link class="drawer-link-text" :to="to">{{name.toUpperCase()}}</router-link>
  </div>
</template>

<script>
export default {
    props:{
        name:String,
        to:String       
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";
.drawer-link  {
    margin:.4rem;
    &-text {
        @include heading2-text;
        color: black;
        text-decoration: none;
        font-weight: 500;
    }
    &-text:hover  {
        color: black;
        font-style: italic;
        font-weight: 800;
    }
    
}


</style>