<template>
    <div class="orkut-app">
        <div class="header">
            <img src="../assets/orkut_logo.png">
        </div>        
        <section class="hero profile-basic-info">
          <div class="hero-body">
            <div class="container">
                <div class="intro">
                    <h1 class="title">
                      My career <span>history</span>
                    </h1>
                    <p>I'm kind of nostalgic and I guess the bast way to show my career is through one of an application that's started my web interest.</p>
                    <p>Below you can see as a friend see me;)</p>
                    <img src="../assets/orkut_descriptions.png">
                </div>

                
                <div class="enterprise" v-for="experience in experiences">
                    <div class="columns is-mobile">
                        <div class="column is-2 logo">
                            <!-- <img src="../assets/orkut/ey_logo.jpg"> -->
                            <img v-bind:src="'img/'+experience.img">
                        </div>
                        <div class="column narrow description">
                            <h2>{{experience.role}}</h2>
                            <h3>{{experience.enterprise}}<span>{{experience.period}}</span></h3>
                        </div>                    
                    </div>
                    <h3 class="enterprise-acting">{{experience.enterpriseActing}}</span></h3>
                    <div class="job-description" v-for="act in experience.acting">
                        <p>{{act}}</p>
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
export default class Orkut extends Vue {
    data(){
        return{
            experiences:[
                {
                    img: "ey_logo.jpg",
                    role: "IT Risk Consultant",
                    enterprise: "Ernest & Young (EY)",
                    enterpriseActing: "Multinacional Enterprise",
                    period: "2015-2018",
                    acting:[                        
                        "Responsible for the development of systems for internal and external use, whether for computer, internet or cell phones (Applications);",
                        "Complete and / or partial involvement in projects for clients of different segments, among them, health plan operators, banks, national agencies and international companies;",
                        "Developing using various architecture and concepts, such as MVC, DDD, TDD, REST API and microservices, also using continuous delivery;",
                        "Also working on the development of RPA tools, using BluePrism and UiPath platforms.",
                    ]
                },
                {
                    img: "desenvolve_logo.png",
                    role: "Co-founder/Developer",
                    enterprise: "Desenvolve.co",
                    enterpriseActing: "Software House",
                    period: "2013-2015",
                    acting:[                        
                        "Web Development Startup, focusing on user experience and perfomance. In which was a partner of Be! Interactive, that has been operating in the market for more than 20 years, and worked together in most varied projects, including Universia Rio 2014 and world-class sporting events;",
                        "Acting as a fullstack web developer, using agile methodologies;",
                        "Responsible also for configuration of droplets used by the company and clients, including DigitalOcean and AWS;",
                        "Also acting as responsible for sale and management of projects, including the relationship with the client.",
                    ]
                },
                {
                    img: "riojunior_logo.jpg",
                    role: "Operation Consultant",
                    enterprise: "Rio Junior",
                    enterpriseActing: "Federation of junior companies of the State of Rio de Janeiro",
                    period: "2013-2013.2",
                    acting:[                        
                        "Acting in the tactical-operational control, and in the monitoring and analysis of the strategy. As well as in the facilitation of knowledge management.",
                    ]
                },
                {
                    img: "gamajunior_logo.jpg",
                    role: "Quality Consultant",
                    enterprise: "GamaJunior",
                    enterpriseActing: "Junior Consulting Firm",
                    period: "2013 - 2013.2",
                    acting:[                        
                        "Responsible for controlling and ensuring the quality of services provided, applying and monitoring the use of quality tools.",
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.orkut-app{
    padding: 0 1em;
    .intro{
        img{
            width:100%;
            padding-bottom: 2em;
        }
    }
    background-color: #fff;
    color: #222;
    .header{
        img{
            width: 70%;
            display:block;
            margin: 0 auto;
            padding-top:10%;
        }
    }
    .enterprise{
        width:100%;
        padding-bottom:8%;
        .title{
            span{
                color:rgba(129, 24, 79,0.8);
            }
        }
        .logo{
            padding: 0;
            margin-left:.5em;
            img{
                width:100%;
            }
        }
        .enterprise-acting{
            font-size:.8em;
            margin-top:-8%;
        }
        .description{
            margin-top:-5%;
            padding: 0;
            h2{
                font-size: 1em;
            }
            h3{
                font-size: .8em;
                margin-top:-1em;
                color: rgba(129, 24, 79,0.8);
                span{
                    font-size: .6m;
                    color: rgba(34, 34, 34,.6);
                    float: right;
                }
            }
        }
        .job-description{
            margin-top:-.5em;
            font-size:.8em;
        }
    }
}
</style>