import React from 'react'
import "./Heading.css"
const Heading = (props) => {
  return (
    <div className="conatiner">
      <h1 className='head'>{props.title}</h1>
      <p className='sub'>{props.subtitle}</p>
    </div>
  )
}

export default Heading
