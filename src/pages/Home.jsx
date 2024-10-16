import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import 'boxicons/css/boxicons.min.css';
import blue from './blue.jpg';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <img
          src="https://images.hdqwalls.com/download/clouds-neon-rings-dark-5k-p0-1920x1080.jpg"
          style={{ width: '100%', height: '737px', objectFit: 'cover' }}
          alt="Background"
          className='blur_image'
        />
        <div className="box">
          <section className="home" id="home">
            <div className="home-img">
              <img src={blue} alt="Profile" className='image' />
            </div>
            <div className="home-content">
              <h2>
                I'm <span>Swathi</span>
              </h2>
              <h3 className="text-animation">
                I'm a <span></span>
              </h3>
              <p>
                I'm a Fullstack developer with a passion for building beautiful and functional
                websites.
              </p>
              <div className="social-icons">
                <a href="https://github.com/swathimuneeswaran" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/swathi-m-6b64b0223/" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
              <a href="https://drive.google.com/file/d/1dggtR7tBCNz5IxWNPvwUp7Dk2hqPVDcB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button type='button' className='resume'>Resume</button>
              </a>
            </div>
          </section>
        </div>
      </div>
      <About />
      <Education  />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
