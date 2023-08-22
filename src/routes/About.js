import React from 'react'
import Navbar from '../components/Navbar'
import bg1 from "../assets/bg2.jpg"
import Footer from '../components/Footer'
import "../components/Navbar.css"
import Background from '../components/Background'
import Aboutdata from '../components/Aboutdata'

const About = () => {
  return (
    <div>
      <Navbar src={bg1} className="bgvactive"/>
      <Background heading="About" title="LEARN ANYTHING"/>
      <Aboutdata/>
      <Footer/>
    </div>
  )
}

export default About
