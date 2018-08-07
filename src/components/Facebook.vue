<template>
    <div class="facebook-app">
        <div class="nav"></div>
        <div class="background"><img src="../assets/facebook_background.jpg"></div>
        <div class="profile-pic"><img src="../assets/me.jpg"></div>
        <div class="profile-name">
            <h1>Vinicius Fortino</h1>
            <h4>Full-Stack Developer</h4>
        </div>
        <div class="profile-about">
            <ul class="container">
                <li class="columns is-mobile courses">
                    <img class="column is-2" src="../assets/facebook_education.svg">
                    <p class="column">Studied Computer Science at <strong>UVA - Universidade Veiga de Almeida</strong>
                    <span>2013 - 2018.2</span></p>
                </li>
                <li class="columns is-mobile courses">
                    <img class="column is-2" src="../assets/facebook_education.svg">
                    <p class="column">JAVA OO at <strong>ITA - Instituto de Técnologia da Aeronáutica (Coursera)</strong>
                    <span>2017.2 - 2018.2</span></p>
                </li>
                <li class="columns is-mobile courses">
                    <img class="column is-2" src="../assets/facebook_education.svg">
                    <p class="column">Electrical Technician at <strong>FAETEC</strong>
                    <span>2007 - 2011</span></p>
                </li>
                <li class="columns is-mobile language">
                    <img class="column is-2" src="../assets/facebook_talk.svg">
                    <p class="column">Portuguese <span>Native</span></p>
                </li>
                <li class="columns is-mobile language">
                    <img class="column is-2" src="../assets/facebook_talk.svg">
                    <p class="column">English <span>Fluent</span></p>
                </li>
                <li class="columns is-mobile language">
                    <img class="column is-2" src="../assets/facebook_talk.svg">
                    <p class="column">French <span>Basic (learning)</span></p>
                </li>
                <li class="columns is-mobile">
                    <img class="column is-2" src="../assets/facebook_location.svg">
                    <p class="column">Lives in <strong>Rio de Janeiro</strong></p>
                </li>
            </ul>
            <div class="linkedin columns is-mobile">
                <a class="column is-offset-2 is-8" href="https://www.linkedin.com/in/vinicius-fortino-b7b18357/" target="_blank">
                    <img src="../assets/linkedin_global.svg">
                    <p>Linkedin</p>
                </a>
            </div>
        </div>
        <div class="">
            <section class="hero profile-basic-info">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    A little about <span>me</span>
                  </h1>
                    <p>Fascinated by tecnology and human behavor, passionate about creating since i was a kid. And that's why i became a developer, <span>to make programs that solve people/society problems and interact with then</span>.</p>
                    <p>In my life, I worked as in <span>Multinational enterprises as so in startups</span>, developing the hability of adapat myself and undestand problems in diferent levels and approchs.</p>
                    <p>In my last job, I developer skills to <span>lead little teams and to manager client relationships</span>.</p>
                    <p>As a consultant on a Big Four, <span>I worked at several types of companies</span>: like banks, governament agencies, sports events, health and agribusiness.</p>
                    <p>To see more about my career, look at on <span>Orkut</span> app.</p>
                    <p>And also, to contact me, use my <span>Gmail</span> app.</p>
                </div>
              </div>
            </section>          
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Linkedin from "@/components/Desktop.vue"

@Component
export default class Facebook extends Vue {
    data(){
        return{
        }
    }
    created(){
    }
}
</script>
<style lang="scss">
.facebook-app{
    background-color: #fff;
    color: #000;
    // padding-bottom: 0em;
    span{
        color: rgba(59,89,152,.6);
    }
    .nav{
        background-color: rgba(59,89,152,1);
        height: 2em;
        width: 100%;
    }
    .background img{
        width:100%;
    }
    .profile-pic img{
        width: 40%;
        border: 5px solid #fff;
        display: block;
        margin: -15% auto;
        position: relative;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    }
    .profile-name{
        text-align: center;
        margin-top: 20%;
        h1{
            font-size: 1.2em;
        }
        h4{
            font-size: .8em;
            margin-top: -1em;
            color: rgba(59,89,152,1);
        }
    }
    .profile-about{
        border-top: 1px solid #ccc;
        border-bottom: 2px solid #ccc;
        padding-top: 3%;
        padding-bottom: 8%;
        span{
            float: right;
            padding-right: 1em;
        }
        ul{
            font-size: .8em;
            list-style: none;
            margin-left: -8%;
            img{
                width:100%;
                padding-top:5%;
                height:5%;
            }
            .courses p{
                margin-top: -4%;
            }
        }
        .linkedin{
            a{
                color: #ccc;
                text-align: center;
                decoration: none;
                padding:.4em;
                margin: 0 auto;
                display: block;
                width: 50%;
                border:1px solid #ccc;
                -webkit-border-radius: 1em;
                -moz-border-radius: 1em;
                border-radius: 1em;
                *{
                    display:inline-block;
                }
                img{
                    width:10%;
                    margin-right:.5em;
                }
                p{
                    margin: -1em 1em 0 0;
                }
            }
        }
    }
    .profile-basic-info{
        padding:.3em;
        width:100%;
        .hero-body{
            p span{
                color: rgba(59,89,152,1);                
            }
        }
    }
}
</style>