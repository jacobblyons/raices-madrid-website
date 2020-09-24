<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/mixins";
body,
html {
  margin: 0;
  overflow: hidden;
  overflow-y: auto;
}

// fonts
@include font('cocogoose-light', './assets/fonts/Cocogoose Pro Light-trial.ttf');
@include font('cocogoose-light-italic', './assets/fonts/Cocogoose Pro Italic-trial.ttf');
@include font('cocogoose-semilight-italic', './assets/fonts/Cocogoose Pro Semilight Italic-trial.ttf');
@include font('cocogoose-semilight', './assets/fonts/Cocogoose Pro Semilight-trial.ttf');
@include font('cocogoose-thin-italic', './assets/fonts/Cocogoose Pro Thin Italic-trial.ttf');
@include font('cocogoose-thin', './assets/fonts/Cocogoose Pro Thin-trial.ttf');
@include font('cocogoose-ultralight-italic', './assets/fonts/Cocogoose Pro UltraLight Italic-trial.ttf');
@include font('cocogoose-ultralight', './assets/fonts/Cocogoose Pro Ultralight-trial.ttf');
@include font('cocogoose', './assets/fonts/Cocogoose Pro-trial.ttf');
</style>
