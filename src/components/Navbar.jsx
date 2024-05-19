import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='header'>
      <Link to="/" className='logo'>Swathi Muneeswaran</Link>
      <div className='hamburger' onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`nav_list ${isOpen ? 'show' : 'hide'}`}>
        <Link to="/" className='nav1' onClick={toggleMenu}>Home</Link>
        <Link to="/about" className='nav1' onClick={toggleMenu}>About</Link>
        <Link to="/education" className='nav1' onClick={toggleMenu}>Education</Link>
        <Link to="/skills" className='nav1' onClick={toggleMenu}>Skills</Link>
        <Link to="/projects" className='nav1' onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" className='nav1' onClick={toggleMenu}>Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
