<template>
    <div v-bind:class="{ minimized: minimizeApp, 'nav-area': !minimizeApp}">
        <transition 
  		v-on:before-enter="leave"
		v-on:enter="enter"
		v-bind:css="false" appear tag="component">
            <component v-bind:is="currentComponent"></component>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Desktop from "@/components/Desktop.vue"
import Orkut from "@/components/Orkut.vue"
import { AppBus } from '@/main.ts';
import {TweenMax, Power4, TimelineLite, TimelineMax} from "gsap"

@Component
export default class NavArea extends Vue {
	currentComponent = Desktop;
	minimizeApp = false;
    created(){
        AppBus.$on('applicationChanged', (app: any) => {
			this.currentComponent = app;
			if(this.minimizeApp){this.minimizeApp = false}
        });
        AppBus.$on('applicationMinimized', (app: any) => {
			this.minimizeApp = !this.minimizeApp;
        });
    }
	enter(el: any, done: any) {
		const tl = new TimelineMax({
			onComplete: function(){}
		})
		
		tl.set(el, {
			autoAlpha: 0,
			scale: .5,
			transformOrigin: '50% 50%'
        })
        
		tl.set(el, {
			autoAlpha: .5,
			scale: .5,
			transformOrigin: '50% 50%'
		})
		
		tl.to(el, 1, {
			autoAlpha: 1,
			scale: 1,
			ease: Power4.easeOut
		})
	}
	leave(el: any, done: any) {
	}	
}
</script>
<style scoped lang="scss">
	.nav-area{
		position: relative;
		height:50%;
        // cursor: url('../assets/cursor.png'), auto !important;	
    	overflow: auto;
    	overflow-x: hidden;
	}
	/* Let's get this party started */
	::-webkit-scrollbar {
	    width: .3em;
	}
	.minimized div{	
		width:90%;
		height:70%;
		margin: 0 auto;
		overflow: hidden;
		-webkit-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.8);
		-moz-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.8);
		box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.8);
	}
	/* Track */
	::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
	}
	
	/* Handle */
	::-webkit-scrollbar-thumb {
    background-color: #000000;
	}
</style>