<template>
    <div class="columns is-mobile list-apps">
      <div @click="openFacebook" class="column is-offset-2 is-2 app" alt="Me"><img src="../assets/facebook.svg"></div>
      <div @click="openOrkut" class="column is-2 app" alt="Experience"><img src="../assets/orkut.svg"></div>
      <div @click="openTrello" class="column is-2 app" alt="Skills"><img src="../assets/trello.svg"></div>
      <div @click="openGmail" class="column is-2 app" alt="Hire Me"><img src="../assets/gmail.svg"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Facebook from "@/components/Facebook.vue"
import Orkut from "@/components/Orkut.vue"
import Trello from "@/components/Trello.vue"
import Gmail from "@/components/Gmail.vue"
import { AppBus } from '@/main.ts';

@Component
export default class Desktop extends Vue {
  openFacebook(){
    AppBus.$emit('applicationChanged', Facebook);
  }
  openOrkut(){
    AppBus.$emit('applicationChanged', Orkut);
  }
  openTrello(){
    AppBus.$emit('applicationChanged', Trello);
  }
  openInstagram(){
    AppBus.$emit('applicationChanged', Facebook);
  }
  openGmail(){
    AppBus.$emit('applicationChanged', Gmail);
  }
}
</script>


<style scoped lang="scss">
  .list-apps{
    padding-top: 150%;
    img{
      width:100%;
      cursor: pointer;
      background-color:#fff;
      border-radius: 50%; 
      -moz-border-radius: 50%; 
      -webkit-border-radius: 50%; 
      border: 0px inset #800000;
      -webkit-box-shadow: -2px 2px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: -2px 2px 5px 0px rgba(0,0,0,0.75);
      box-shadow: -2px 2px 5px 0px rgba(0,0,0,0.75);
    }
  }
</style>