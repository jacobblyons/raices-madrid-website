<template>
  <div class="navbar-link">
    <a class="navbar-link-text" v-scroll-to="to">{{name.toUpperCase()}}</a>
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
.navbar-link  {
    margin: {
        left: 1rem;
        right: 1rem;
    }

    &-text {
        @include navbar-text;
        color: white;
        text-decoration: none;
    }
    &-text:hover  {
        color: black;
        font-style: italic;
        font-weight: 400;
    }
    
}


</style>