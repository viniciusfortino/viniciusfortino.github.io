<template>
    <section class="section notification-bar">
        <div class="columns is-mobile level-right">
          <div class="column is-offset-4 is-2">
            <img src="../assets/wifi.svg">
          </div>
          <time class="column is-2 level-left clock">{{hour}}:{{minutes}}</time>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
export default class NotificationBar extends Vue {
  date = new Date();
  hour = (this.date.getHours() < 10 ? "0" : "") + this.date.getHours();
  minutes = '00';

  mounted(){
    this.calcMinutes();
    var vm = this;
    setInterval(function(){
      vm.calcMinutes();
    },500)
  }

  calcMinutes(){
    var newDate = new Date();
    this.minutes = (newDate.getMinutes() < 10 ? "0" : "") + newDate.getMinutes();
  }

}
</script>
<style lang="scss">
.notification-bar {
  .clock {
    margin-right: 1em !important;
  }
  .column {
    margin-top: -2%;
    color: #fff;
    font-size: 0.8em;
    img {
      width: 50%;
    }
  }
}
</style>
