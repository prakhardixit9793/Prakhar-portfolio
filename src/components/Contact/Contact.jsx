import React from 'react'
// import cont from '../../assets/contact.png'
import Contact from "../../assets/contact.png";

import "./Contact.css"
import {useGSAP}  from "@gsap/react"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'


function Contact() {
        useGSAP(()=>{
        gsap.from(".leftcontact img",{
                x:-100,
                duration:1,
                opacity:0,
                stagger:1,
                scrollTrigger:{
                        trigger:".leftcontact img",
                        scroll:"body", 
                        scrub:2,
                        markers:false,
                        start:"top 80%",
                        end: "top 30",

                }
        })
        gsap.from("form",{
                x:100,
                duration:1,
                opacity:0,
                stagger:1,
                scrollTrigger:{
                        trigger:"form",
                        scroll:"body", 
                        scrub:2,
                        markers:false,
                        start:"top 80%",
                        end: "top 30",

                }
        })
      })
  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={Contact} alt=""/>
        </div>

        <div className="rightcontact">
                <form action="https://formspree.io/f/myznvkkw" method='POST'>
                    <input name="Username" type="text"placeholder="<NAME/> "/>
                    <input name='Email' type="email" placeholder='<EMAIL/> '/>
                    <input name="message" type="text" id="textarea" placeholder="<MESSEGE/>"/>
                    <input type="submit" id="btn" value="Submit"/>
                </form>

        </div>
    </div>
  )
}

export default Contact