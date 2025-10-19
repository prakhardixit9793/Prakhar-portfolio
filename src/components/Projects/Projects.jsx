import React from 'react'
import Card from "../Card/Card"
import "./Projects.css"
import va from "../../assets/va.png"
import weather from "../../assets/weather.png"
import chatbot from "../../assets/chatbot.png"
import fp1 from "../../assets/fp1.png"
import fp2 from "../../assets/fp2.png"
import {useGSAP}  from "@gsap/react"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)

function Projects() {
        useGSAP(()=>{
        gsap.from("#para",{
                y:100,
                duration:1,
                opacity:0,
                stagger:1,
                scrollTrigger:{
                        trigger:"#para",
                        scroll:"body", 
                        scrub:2,
                        
                        start:"top 80%",
                        end: "top 30",

                }
        })
        gsap.from(".slider",{
                y:100,
                duration:1,
                opacity:0,
                stagger:1,
                scrollTrigger:{
                        trigger:".slider",
                        scroll:"body", 
                        scrub:2,
                    
                        start:"top 80%",
                        end: "top 30",

                }
        })
      })
   return (
    <div id="projects">
    <h1 id="para">1 YEAR EXPERIENCE</h1>
    <div className="slider">
        <Card title="TO-DO-LIST" image={va}/>
        <Card title="WEATHER APP" image={weather}/>
        <Card title="CHATBOT" image={chatbot}/>
        <Card title="FUTURE PROJECT-1" image={fp1}/>
        <Card title="FUTURE PROJECT-2" image={fp2}/>
    </div>
    </div>
  )
}

export default Projects