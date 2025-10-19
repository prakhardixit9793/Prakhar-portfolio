import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { ReactTyped } from "react-typed";
import {useGSAP}  from "@gsap/react"
import gsap from 'gsap'

function Home() {
  useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line1",{
      y:80,
      duration:0
      

    })
  })
    useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line2",{
      y:80,
      duration:0
      

    })
  })
    useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line3",{
      y:80,
      duration:0
      

    })
    gsap.from(".righthome img",{
      x:200,
      duration:1,
      opacity:0
    })
  })
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">  MYSELF</div>
          <div className="line2">PRAKHAR DIXIT</div>
          <div className="line3">
            <ReactTyped
              strings={["PROGRAMMER", "FRONTEND WEB DEVELOPER", "OPEN SOURCE SOCIETY"]}
              speed={100}
              typeSpeed={40}
              backSpeed={50}
              cursor="|"
              loop>
               <input className="inputtyping" type="text" /> 
            </ReactTyped>
            
          </div>
            <button className="homedetails button">HIRE ME</button>
        </div>
        
      </div>
      <div className="righthome">
        <img src={man} alt="Profile" />
      </div>
    </div>
  )
}

export default Home
