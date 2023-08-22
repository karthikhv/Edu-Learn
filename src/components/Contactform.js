import React from 'react';
import "./Contact.css";

const Contactform = () => {

  return (
    <div className='contacts padding'>
      <div className='container shadow flexSB'>
        <div className='right row'>
          <h1>Contact us</h1>
          <p>We're open for any suggestion or just to have a chat</p>
          <div className='items grid2'>
            <div className='box'>
              <h4>ADDRESS:</h4>
              <p>Agumbe main road 577418</p>
            </div>
            <div className='box'>
              <h4>EMAIL:</h4>
              <p>karthikhv018@gmail.com</p>
            </div>
            <div className='box'>
              <h4>PHONE:</h4>
              <p>7618743479</p>
            </div>
          </div>
          <form action=''>
            <div className='flexSB'>
              <input type='text' placeholder='Name' />
              <input type='email' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10' placeholder="Create a message here..."></textarea>
            <button className='primary-btn'>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactform;
