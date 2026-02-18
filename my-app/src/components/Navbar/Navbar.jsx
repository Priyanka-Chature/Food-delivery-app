import React from 'react'
import './Navbar.css'
import '../../index.css'

import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      
      <img src={logo} alt='logo' className='logo'/>
      <ul className='navbar-menu'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact Us</a></li>
      </ul>
      <div>
        <button className='login-btn'>Login</button>
      </div>



    </div>
    
    
    </>
  )
}

export default Navbar