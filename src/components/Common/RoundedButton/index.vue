<template>
    <router-link class="rounded-button" :to="to">{{name.toUpperCase()}}</router-link>
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
@import "../../../styles/mixins";
.rounded-button{
    display:inline-block;
    padding:0.3em 1.2em;
    margin:0 0.3em 0.3em 0;
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#FFFFFF;
    background-color:#4eb5f1;
    text-align:center;
    transition: all 0.2s;
}
.rounded-button:hover{
    background-color:#4095c6;
}

@media all and (max-width:30em){
 .rounded-button {
    display: block;
    margin: .2em auto
 }
}


</style>