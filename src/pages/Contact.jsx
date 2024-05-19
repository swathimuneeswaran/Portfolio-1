import React from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar />
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact<span>Me</span>
        </h2>
        <form action="#" className='form'>
          <div className="input-box">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="text"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>

        <footer>
          <div className="social">
            <a href="https://github.com/swathimuneeswaran" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/swathi-m-6b64b0223/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <ul className="list">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright">© Swathi | All Rights Reserved </p>
        </footer>
      </section>
    </>
  );
};

export default Contact;
