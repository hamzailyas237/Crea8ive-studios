
import { Link } from 'react-router-dom'
import logo from '../images/logo.gif'

import React from 'react'
import { useState } from 'react'

const Navbar = () => {

  const [bool, setBool] = useState(false)

  const toggleMenu = () => {
    setBool(!bool)

  }

  return (

    <div className="navbar-container">

      <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
        <img className='logo' src={logo} />

        <div id="menu-btn" className="menu-btn">
          <i onClick={toggleMenu} className="fas fa-bars"></i>
        </div>
      </div>

      <div className='navbar-links' style={{ display: bool ? 'flex' : '' }}>
        <Link className='route' to='/'>Home</Link>
        <Link className='route' to='/about'>About</Link>
        <Link className='route disable' to='/services'>Services</Link>
        <Link className='route' to='/contact'>Contact</Link>
        <Link className='route disable' to='/portfolio'>Portfolio</Link>
      </div>



    </div>



  )
}

export default Navbar