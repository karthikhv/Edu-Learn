import React from 'react'
import bg3 from "../assets/bg3.jpg"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactform from '../components/Contactform'
import Background from '../components/Background'
const Contact = () => {
  return (
    <>
      <Navbar src={bg3}/>
      <Background heading="CONTACT US" title="Scroll down to send query"></Background>
      <Contactform/>
      <Footer/>
    </>
  )
}

export default Contact
