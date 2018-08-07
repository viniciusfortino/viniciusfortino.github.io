<template>
    <div class="trello-app">
        <div class="header">
        </div>        
        <section class="hero profile-basic-info">
          <div class="hero-body">
            <div class="container">
                <div class="intro">
                    <h1 class="title">
                      My <span>skills</span>
                    </h1>
                    <p>Now in at app, i'll show you the languagens that I know and got experience. Also as tools, databases and softwares that I usualy work.</p>
                </div>

                
                <div class="card" v-for="skill in skills">
                    <header class="card-header">
                      <p class="card-header-title">
                        {{skill.type}}
                      </p>
                    </header>
                    <div class="card-content">
                      <div class="content">
                        <div class="tags">
                            <span class="tag is-large" v-for="element in skill.elements">
                                {{element}}
                            </span>
                        </div>
                      </div>
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
export default class Trello extends Vue {
    data(){
        return{
            skills:[
                {
                    type: "Serversides Languages and Frameworkds",
                    elements: ["Java", "Kotlin", "C++", "C++", "Ruby on Rails","Python", "R", "Node.js"]
                },
                {
                    type: "Web Languages and frameworks",
                    elements: ["HTML 5", "CSS", "JavaScript", "ECMAScript 6", "Angular JS", "Angular 6", "Vue", "TypeScript"]
                },
                {
                    type: "DB Languages and frameworks",
                    elements: ["SQL", "SQLite", "Mongo.db", "PostgreSQL"]
                },
                {
                    type: "Test Frameworks",
                    elements: ["Selenium", "Jasmine", "RSpec", "Mocha"]
                },
                {
                    type: "Tools, Task Runners, Packag Managers and others",
                    elements: ["Git", "Grunt", "Bundle", "NPM", "Bower", "UiPath", "Docker", "Kubernetes"]
                },
                {
                    type: "Operations Systems",
                    elements: ["Debian", "Ubuntu", "MacOS", "Windows", "Resbian"]
                },
                {
                    type: "IDES and Editors",
                    elements: ["Sublime Text", "Brackets", "Atom", "Visual Studio", "Visual Code", "Eclipse", "NetBeans", "Arduino Software"]
                },
                {
                    type: "Hardware Experience",
                    elements: ["RespberyPI", "Makey Makey", "Arduino"]
                },
            ]
        }
    }
}
</script>
<style lang="scss">
.trello-app{
    background-color:  rgba(2,106,167,1);
    padding-bottom: 1em;
    color:#fff;
    .header{
        background-color: rgba(12,57,83,1);
        width:100%;
        height: 2em;
        display:block;
        color: #fff;
    }
    .container{
        padding: 0 1em;
        span{
            color: rgba(91,164,207,1);            
        }
    }
    .card{
        margin-bottom:5%;
        -webkit-box-shadow: -1px 1px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -1px 1px 5px 0px rgba(0,0,0,0.75);
        box-shadow: -1px 1px 5px 0px rgba(0,0,0,0.75);
        .card-header{
            color:rgba(34,34,34,1);
            font-size: .8em;
            p{
                margin:0;
            }
        }
        .card-content{
            background-color:rgba(214,218,220, .9);
        }
        .tag{
            color: rgba(2,106,167,1);
        }
    }
}
</style>