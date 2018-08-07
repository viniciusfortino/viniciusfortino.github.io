<template>
  <div class="container principal-container">
    <transition v-on:enter="onEnter" v-on:after-enter="onStartUp" v-bind:css="false" appear tag="div">
      <div class="">
        <div>
          <div class="device device-galaxy-s8 device-blue">
            <div class="device-frame">
              <div class="screen">
                  <Video v-if="startup"/>
                  <NotificationBar v-if="!startup" class="notification-bar"/>
                  <NavArea v-if="!startup" class="desktop"/>
                  <ButtonBar v-if="!startup" class="button-bar"/>
              </div>
            </div>
            <div class="device-stripe"></div>
            <div class="device-header"></div>
            <div class="device-sensors"></div>
            <div class="device-btns"></div>
            <div class="device-power"></div>
          </div>
        </div>
        <div>
        <div class="body-text cv-link">
          <a href="files/CV_Vinicius_Fortino.pdf" download>
            <img src="../assets/body_download.svg"/>
            <p>Fisical CV</p>
          </a>
        </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Video from "@/components/Video.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import NavArea from "@/components/NavArea.vue";
import Desktop from "@/components/Desktop.vue";
import ButtonBar from "@/components/ButtonBar.vue";
import { TweenMax, Power2, TimelineLite, TimelineMax } from "gsap";

@Component({
  components: {
    Video,
    NotificationBar,
    NavArea,
    ButtonBar
  }
})
export default class Home extends Vue {
  startup = true;
  onEnter(body: any) {
    const timeLine = new TimelineMax({
      onComplete: function() {}
    });

    timeLine.set(body, {
      css: {
        alpha: 0
      }
    });

    timeLine.to(body, 2, {
      css: {
        alpha: 0
      }
    });

    timeLine.to(body, 0.5, {
      css: {
        alpha: 1
      }
    });
  }
  onStartUp() {
    var vm = this;
    setTimeout(function() {
      vm.startup = false;
    }, 5000);
  }
}
</script>
<style  lang="scss">
// Galaxy S8
$device-black: #cfcfcf;
$device-black-dark: darken($device-black, 20%);
$device-black-panel: #222;
$device-blue: #a3c5e8;
$device-blue-dark: darken($device-blue, 20%);
$device-blue-panel: #222;
.cv-link {
  position: absolute;
  right: 2%;
  bottom: 2%;
  text-shadow: -2px 2px 2px rgba(150, 150, 150, 1);
  a {
    text-decoration: none;
    color: #fff;
    img{
      width: 50%;
      margin: 0 auto;
      margin-bottom: -30%;
      display: block;
    }
  }
}
.device-galaxy-s8 {
  height: 828px;
  width: 380px;
  margin: -5% auto !important;
  transform: scale(0.7);

  .device-frame {
    background: $device-black-panel;
    border: solid $device-black;
    border-radius: 55px;
    border-width: 5px 0;
    box-shadow: inset 0 0 0 2px $device-black-dark;
    height: 820px;
    padding: 60px 10px 40px 10px;
    width: 380px;
    .screen {
      background: #000;
      width: 100%;
      height: 100%;
      video {
        width: 100%;
        height: 100%;
      }
      .notification-bar,
      .button-bar {
        width: 100%;
      }
      .notification-bar {
        margin-top: 4%;
        height: 4%;
      }
      .desktop {
        height: 88%;
        background: url("../assets/phone_background.png");
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
      .button-bar {
        padding-top: 3%;
        height: 8%;
      }
    }
    .screen:before,
    .screen:after {
      content: "";
      position: absolute;
      display: block;
      top: 8%;
      width: 8%;
      height: 85.5%;
      opacity: 0.4;
    }

    .screen:before {
      left: 3%;
      background: linear-gradient(to right, #fff 0%, transparent 100%);
    }

    .screen:after {
      right: 3%;
      background: linear-gradient(to left, #fff 0%, transparent 100%);
    }
  }

  // 2960-by-1440-pixel resolution
  .device-content {
    border: 2px solid #222;
    border-radius: 34px;
    height: 740px;
    width: 360px;
  }

  .device-stripe {
    &::after,
    &::before {
      border: solid rgba(#333, 0.15);
      border-width: 5px 0;
      content: "";
      height: 828px;
      position: absolute;
      top: 0;
      width: 6px;
      z-index: 9;
    }
    &::after {
      left: 48px;
    }
    &::before {
      right: 48px;
    }
  }

  .device-sensors {
    background: #666;
    border-radius: 3px;
    height: 6px;
    left: 50%;
    margin-left: -24px;
    margin-top: -3px;
    position: absolute;
    top: 32px;
    width: 48px;

    &::after,
    &::before {
      background: #666;
      border-radius: 50%;
      content: "";
      position: absolute;
      top: 50%;
    }
    &::after {
      box-shadow: -192px 0 #333, -174px 0 #333, -240px 0 #333;
      height: 8px;
      right: -90px;
      margin-top: -4px;
      width: 8px;
    }
    &::before {
      box-shadow: 186px 0 #666;
      height: 12px;
      left: -90px;
      margin-top: -6px;
      width: 12px;
    }
  }

  .device-btns {
    background: $device-black-dark;
    border-radius: 3px 0 0 3px;
    height: 116px;
    left: -3px;
    position: absolute;
    top: 144px;
    width: 3px;

    &::after {
      background: $device-black-dark;
      border-radius: 3px 0 0 3px;
      content: "";
      height: 54px;
      left: 0;
      position: absolute;
      top: 164px;
      width: 3px;
    }
  }

  .device-power {
    background: $device-black-dark;
    border-radius: 0 3px 3px 0;
    height: 54px;
    right: -3px;
    position: absolute;
    top: 260px;
    width: 3px;
  }

  // Coral Blue edition
  &.device-blue {
    .device-frame {
      border-color: $device-blue;
      box-shadow: inset 0 0 0 2px $device-blue-dark;
    }

    .device-stripe {
      &::after,
      &::before {
        border-color: rgba(#fff, 0.35);
      }
    }

    .device-btns {
      &,
      &::after {
        background: $device-blue-dark;
      }
    }

    .device-power {
      background: $device-blue-dark;
    }
  }
}
</style>

