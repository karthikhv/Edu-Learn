import React from 'react'
import Navbar from '../components/Navbar'
import bg5 from "../assets/bg5.jpg"
import Background from '../components/Background'
import Footer from '../components/Footer'
import CoursesCard from '../components/Allcourses/CoursesCard'

const Pricing = () => {
  return (
    <div>
       <Navbar src={bg5}/>
       <Background heading="Pricing" title="Choose the right paln"/>
       <CoursesCard/>
       <Footer/>
    </div>
  )
}

export default Pricing
