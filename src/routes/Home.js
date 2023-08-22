import React from 'react'
import Navbar from '../components/Navbar'
import bg1 from "../assets/bg1.jpg"
import Homeinfo from '../components/Homeinfo'
import Footer from '../components/Footer'
import CourseHome from '../components/Allcourses/CourseHome'
import Journaldata from '../components/Journaldata'

const Home = () => {
  return (
    <div>
      <Navbar src={bg1}/>
      <Homeinfo/>
      <section className='blog padding'>
        <div className='container grid2'>
        <Journaldata/>
       </div>
       </section>
      <CourseHome/>
      <Footer/>
    </div>
  )
}

export default Home
