import React from 'react'
import {Link} from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
  <header className='header'>
    <Link to="/" className='logo'>Swathi Muneeswaran</Link>
    <nav className='nav_list'>
       <Link to="/" className='nav1' >Home</Link>
       <Link to="/about" className='nav1'>About</Link>
       <Link to="/education" className='nav1'>Education</Link> 
        <Link to="/skills" className='nav1'>Skills</Link>
        <Link to="/projects" className='nav1'>Projects</Link>
       <Link to="/contact"className='nav1'>Contact</Link>
    </nav>
  </header>
  )
}

export default Navbar