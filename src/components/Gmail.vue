<template>
    <div class="gmail-app">
        <div class="header">
        </div>        
        <section class="hero">
          <div class="hero-body">
            <div class="container">
                <div class="intro">
                    <h1 class="title">
                      How to find <span>me</span>
                    </h1>
                    <p>Here is my real social networks, phone and mail. So call me maybe ;0</p>
                </div>

                <div class="columns is-mobile socialmedia" v-for="socialmedia in socialmedias">
                    <div class="column is-2">
                      <p class="letter">{{socialmedia.letter}}</p>
                    </div>
                    <div class="column">
                        <p>
                          <strong>{{socialmedia.subject}}</strong>
                          <br>
                          <a v-bind:href="socialmedia.msg" v-if="socialmedia.url" target="_blank">{{socialmedia.msg}}</a>
                          <p v-if="!socialmedia.url" class="no-links">{{socialmedia.msg}}</p>
                        </p>
                    </div>
                </div>

            </div>
          </div>
        </section>   
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Desktop from "@/components/Desktop.vue"

@Component
export default class Gmail extends Vue {
    data(){
        return{
            socialmedias:[
                {
                    letter:"L",
                    subject: "Linkedin",
                    msg:"/vinicius-fortino-b7b18357/",
                    url:"https://www.linkedin.com/in/vinicius-fortino-b7b18357/",
                },
                {
                    letter:"I",
                    subject: "Instagram",
                    msg:"/vinicius.fortino",
                    url:"https://instagram.com/vinicius.fortino/",
                },
                {
                    letter:"G",
                    subject: "Gmail",
                    msg:"vinicius.fortino@gmail.com",
                    url:null
                },
                {
                    letter:"P",
                    subject: "Phone number",
                    msg:"(21) 96731-5631",
                    url:null,
                },
            ]
        }
    }
}
</script>
<style lang="scss">
.gmail-app{
    background-color: #fff;
    padding-bottom: 1em;
    color:#222;
    .header{
        background-color: rgba(199,22,16, .8);
        width:100%;
        height: 2em;
        display:block;
        color: #fff;
    }
    .letter{
        color:#fff;
        padding-top:.5em;
        text-align: center;
        background-color: rgba(199,22,16, .8);
        height: 2.5em;
        width: 2.5em;
        border-radius: 60%; 
        -moz-border-radius: 60%; 
        -webkit-border-radius: 60%; 
        border: 0px inset #800000;
    }
    span{
        color: rgba(199,22,16, .8);
    }
    .socialmedia{
        border-bottom:1px solid #ccc;
        font-size: .8em;
        .no-links{
            margin-top:-1em;
        }
    }
    .intro, .socialmedia{
        padding: 0 1em;
    }
}
</style>