import React from 'react'
import Navbar from '../components/Navbar'
import bg6 from "../assets/bg6.jpg"
import Background from '../components/Background'
import Footer from '../components/Footer'
import Journaldata from '../components/Journaldata'
const Journal = () => {
  return (
    <div>
       <Navbar src={bg6}/>
       <Background heading="Journal" title="Blog Posts"/>
       <section className='blog padding'>
        <div className='container grid2'>
        <Journaldata/>
       </div>
       </section>
       <Footer/>
    </div>
  )
}

export default Journal
