import React from 'react'
import "./background.css"
const Background = (props) => {
  return (
    <div>
      <div className="hero">
      <div className="content">
        <p>{props.heading}</p>
        <h1>{props.title}</h1>
      </div>
    </div>
    </div>
  )
}

export default Background
