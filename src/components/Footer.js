import React from 'react'
import "./footer.css"
import { FaFacebook, FaLinkedin,FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <div className="footer">
      <div className="top">
          <h1>Edu-Learn</h1>
          <p>Online Education and Learning</p>
              <div className="fas">
              <FaFacebook  to='/' size={35} style= {{color:'blue',marginRight:"25px"}}/>
              <FaLinkedin size={35} style= {{marginRight:"25px"}} />
              <FaInstagram size={35} style= {{color:'red',marginRight:"25px"}} />
            </div>
      </div>
      <div className="left">
        <ul>
          <li>Contact </li>
          <li>Pricing</li>
          <li>Terms and Condition</li>
          <li>Privacy</li>
          <li>Feedbacks</li>
        </ul>
        <ul className='right'>
        <li>About</li>
        <li>Services</li>
        <li>Courses</li>
        <li>Blog</li>
        <li>Contact </li>
        </ul>
      </div>
    </div>  
    </>
  )
}

export default Footer
