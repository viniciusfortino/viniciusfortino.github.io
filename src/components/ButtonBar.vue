<template>
  <div class="columns is-mobile button-bar">
    <div class="column is-offset-2 is-2" @click="backButton"><img src="../assets/arrow_button.svg"></div>
    <div class="column is-offset-1 is-2" @click="homeButton"><img src="../assets/home_button.svg"></div>
    <div class="column is-offset-1 is-2" @click="minimizeButton"><img src="../assets/copy_button.svg"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Desktop from "@/components/Desktop.vue"
import { AppBus } from '@/main.ts';

@Component({})
export default class ButtonBar extends Vue {
  backButton(){
    AppBus.$emit('applicationChanged', Desktop);
  }
  homeButton(){
    AppBus.$emit('applicationChanged', Desktop);
  }
  minimizeButton(){
    AppBus.$emit('applicationMinimized', '');
  }
}
</script>
<style lang="scss">
.button-bar{
  img{
    cursor: pointer;
  }  
}
</style>