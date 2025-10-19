import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"
import {useGSAP}  from "@gsap/react"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function About() {
        useGSAP(()=>{
        gsap.from(".circle",{
                x:-100,
                duration:1,
                opacity:0,
                stagger:1,
                scrollTrigger:{
                        trigger:".circle",
                        scroll:"body", 
                        scrub:2,
                        
                        start:"top 70%",
                        end: "top 30",

                }
        })

        gsap.from(".line",{
                x:-100,
                duration:1,
                opacity:0,
                stagger :1,
                scrollTrigger:{
                  trigger:".line",
                  scroll:"body", 
                  scrub:2,
                  
                  start:"top 70%",
                  end: "top 30",
                }
        })

                gsap.from(".aboutdetails h1",{
                x:-100,
                duration:1,
                opacity:0,
                stagger :1,
                        scrollTrigger:{
                        trigger:".aboutdetails h1",
                        scroll:"body", 
                        scrub:2,
                        
                        start:"top 70%",
                        end: "top 30",
                }

        })
                gsap.from(".aboutdetails ul",{
                y:100,
                duration:1,
                opacity:0,
                stagger :1,
                scrollTrigger:{
                  trigger:".aboutdetails ul",
                  scroll:"body", 
                  scrub:2,
               
                  start:"top 70%",
                  end: "top 30",
                }
        })
                gsap.from(".rightabout ",{
                x:100,
                duration:1,
                opacity:0,
                stagger :1,
                scrollTrigger:{
                        trigger:".rightabout",
                        scroll:"body", 
                        scrub:2,
                       
                        start:"top 70%",
                        end: "top 30",
                }

        })
})
  return (
    <div id="about">
        <div className='leftabout'>
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className='line'></div>
            <div className="circle"></div>
          </div>
          <div className="aboutdetails">
            <div className="personalinfo">
                <h1>Personal Info</h1>
                 <ul>
                <li>
        <span>NAME</span> : PRAKHAR DIXIT

                </li>
                <li>
        <span>AGE</span> : 21 YEARS

                </li>
                <li>
        <span>GENDER</span> : MALE

                </li>
                <li>
        <span>LANGUAGE KNOWN</span> : HINDI , ENGLISH

                </li>
            </ul>
            </div>
            <div className="education">
                <h1>Education</h1>
                 <ul>
                <li>
        <span>DEGREE</span> : B-TECH

                </li>
                <li>
        <span>BRANCH</span> : ECE

                </li>
                <li>
        <span>COLLEGE</span> : AJAY KUMAR GARG ENGG. COLLEGE

                </li>
                <li>
        <span>INTEREST</span> : FRONTEND(WEB DEV) , PROGRAMMING.

                </li>
            </ul>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                 <ul>
                <li>
             HTML,CSS

                </li>
                <li>
             JAVASCRIPT

                </li>
                <li>
             REACT

                </li>
                <li>
             DSA(PROGRAMMING)

                </li>
            </ul>
            </div>
          </div>
        </div>

        <div className='rightabout'>
        <Card title="MERN STACK DEVELOPER" image={mern}/>
        <Card title="JAVA" image={java}/>
        <Card title="DSA" image={dsa}/>
        </div>

    </div>
  )
}
  


export default About