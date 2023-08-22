import React, { useState } from 'react'
import {FaTimes,FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = (props) => {
  const [click,setClick] = useState(false);
  const Handleclick=() => setClick(!click);
  return (
    <div className="nav-contaner">
      <div className="bgv">
        <img src={props.src} alt='background'></img>
      </div>
      <div className="overlay"></div>
      <div className="nav-menu">
        <Link to="/">
          <h1>Edu-Learn</h1>
          <p>Online Education and Learning</p>
        </Link>
        <ul className={click? "nav-men active":"nav-men" } >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/journal">Journal</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={Handleclick}>
        {click ?(<FaTimes size={30} style={{color:"white"}}
        />):(<FaBars size={30} style={{color:"white"}}/>)}
      </div>
    </div>
  </div>
  )
}

export default  Navbar;

