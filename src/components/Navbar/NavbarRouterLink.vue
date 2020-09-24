<template>
  <div class="navbar-link">
    <router-link class="navbar-link-text" :to="to">{{name.toUpperCase()}}</router-link>
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

<style lang="scss" >
@import "../../styles/mixins";
.navbar-link  {
    margin: {
        left: 1rem;
        right: 1rem;
    }
    cursor: pointer;

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