import React from 'react'
import { Link } from 'react-router-dom'
import "./homecontent.css"
const Homeinfo = () => {
  return (
    <div className="head">
      <div className="main">
        <h1>WELCOME TO EDU-LEARN </h1>
            <p>Best Online Education Expertise <br />Never ending source of knowledge</p>
        <div>
          <Link to="/pricing" className='btn'>Get Started</Link>
          <Link to="/courses" className='btn'>Courses</Link>
        </div>
      </div>
    </div>
  )
}

export default Homeinfo