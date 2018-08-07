<template>
	<transition v-on:enter="enter" v-bind:css="false" appear tag="div">
    <div id="app">
      <router-view/>
    </div>
	</transition>
</template>

<script lang="ts">
import Vue from "vue";
import {TweenMax, Power2, TimelineLite, TimelineMax} from "gsap"

export default Vue.extend({
  methods: {
    enter(body: any) {
      const timeLine = new TimelineMax({
        onComplete: function() {}
      });

      timeLine.set(body, {
        css: {
          position: "fixed",
          marginTop: 20 + "%",
          height: 5,
          width: 0 + "%",
          color: "rgba(22, 22, 125, 0)"
        }
      });

      timeLine.to(body, 0.4, {
        css: {
          position: "fixed",
          marginTop: 20 + "%",
          height: 5,
          width: 100 + "%",
          color: "rgba(22, 22, 125, 0)"
        }
      });

      timeLine.to(body, 0.4, {
        css: {
          position: "fixed",
          marginTop: 0 + "%",
          height: 100 + "%",
          width: "auto",
          color: "rgba(22, 22, 125, .1)"
        }
      });

      timeLine.to(body, 0.4, {
        css: {
          position: "fixed",
          marginTop: 0 + "%",
          height: 100 + "%",
          width: "auto",
          color: "rgba(22, 22, 125, .5)"
        }
      });

      timeLine.to(body, 0.8, {
        css: {
          position: "relative",
          marginTop: 0 + "%",
          height: "auto",
          width: "auto",
          color: "rgba(22, 22, 125, 1)"
        }
      });
    }
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu");
@import "node_modules/bulma/sass/utilities/_all";
@import "node_modules/bulma/sass/components/_all";
@import "node_modules/bulma/sass/grid/_all";
@import "node_modules/bulma/sass/elements/tag";

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body, #app {
  padding: 0;
  margin: 0;
  height: 100vh !important;
  width: 100%;
  position: fixed;
  overflow: hidden;
}

#app {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(22, 22, 125, 1) 56%,
    rgba(0, 212, 255, 1) 100%
  );
  font-size: 1.5em;
  font-family: "Ubuntu";  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
