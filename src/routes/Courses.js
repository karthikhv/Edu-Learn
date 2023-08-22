import React from 'react'
import Navbar from '../components/Navbar'
import bg4 from "../assets/bg4.jpg"
import Background from '../components/Background'
import Footer from '../components/Footer'
import CourseHome from '../components/Allcourses/CourseHome'

const Courses = () => {
  return (
    <div>
      <Navbar src={bg4}/>
      <Background heading="Courses" title="Unlimited Knowledge"/>
      <CourseHome/>
      <Footer/>
    </div>
  )
}

export default Courses
